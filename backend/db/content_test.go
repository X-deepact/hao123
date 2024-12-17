package db

import (
	"context"
	"github.com/stretchr/testify/require"
	"go.mongodb.org/mongo-driver/bson"
	"testing"
)

func createContent(t *testing.T) *Content {

	arg := &contentParams{
		Video: []MediaItem{
			{
				Title: "李兴良声誉逆转，他的商业演出遭到网友抵制！",
				URL:   "https://haokan.baidu.com/v?vid=6838304730666196375&fr=hao123-op",
			},
		},
		Live: []MediaItem{
			{
				Title: "一起听肖战的歌吧~ 关注央视视频《听……》",
				URL:   "https://live.baidu.com/m/media/pclive/pchome/live.html?room_id=9819444259&source=hao123_left",
			},
		},
	}

	result, err := testStore.AddContent(context.Background(), "Content", arg)

	require.NoError(t, err)
	require.NotEmpty(t, result)
	require.Equal(t, len(arg.Video), len(result.Video))
	require.Equal(t, len(arg.Live), len(result.Live))

	for i, video := range arg.Video {
		require.Equal(t, video.Title, result.Video[i].Title)
		require.Equal(t, video.URL, result.Video[i].URL)
	}

	// Validate Live items
	for i, live := range arg.Live {
		require.Equal(t, live.Title, result.Live[i].Title)
		require.Equal(t, live.URL, result.Live[i].URL)
	}

	return result
}

func TestAddContent(t *testing.T) {
	createContent(t)
}

func TestGetAllContent(t *testing.T) {
	insertContent := createContent(t)
	filter := bson.M{}

	results, err := testStore.GetAllContent(context.Background(), "Content", filter, 0, 1)

	require.NoError(t, err)
	require.NotEmpty(t, results)

	var found bool
	for _, result := range results {
		// Validate Video
		for _, video := range result.Video {
			for _, insertedVideo := range insertContent.Video {
				if video.Title == insertedVideo.Title && video.URL == insertedVideo.URL {
					found = true
					break
				}
			}
		}

		// Validate Live
		for _, live := range result.Live {
			for _, insertedLive := range insertContent.Live {
				if live.Title == insertedLive.Title && live.URL == insertedLive.URL {
					found = true
					break
				}
			}
		}
	}

	require.True(t, found, "Inserted content not found in the results")
}

func TestAddManyContent(t *testing.T) {
	// Load content data from the JSON file
	contents, err := LoadFromFile[contentParams]("../sample-data/broad-cast.json")
	require.NoError(t, err, "Failed to load content from file")

	// Ensure we have valid data
	require.NotEmpty(t, contents, "Content data should not be empty")

	// Convert loaded content data into a slice of pointers
	var dummy []*contentParams
	for _, content := range contents {
		dummy = append(dummy, &content)
	}

	// Assert that all items are properly converted
	require.Equal(t, len(contents), len(dummy), "Dummy slice should contain the same number of items as the loaded data")

	// Insert multiple content items into the test store
	insertedContents, err := testStore.AddManyContent(context.Background(), "Content", dummy)

	// Ensure no errors occurred during insertion
	require.NoError(t, err, "Failed to insert content items")
	require.NotEmpty(t, insertedContents)

	// Validate that each inserted item contains the expected data
	for i, insertedContent := range insertedContents {
		require.Equal(t, dummy[i].Video, insertedContent.Video, "Video data should match")
		require.Equal(t, dummy[i].Live, insertedContent.Live, "Live data should match")
	}

}
