package db

import (
	"context"
	"fmt"
	"github.com/stretchr/testify/require"
	"go.mongodb.org/mongo-driver/bson"
	"testing"
)

func createAddFeedTitle(t *testing.T) *FeedTitle {

	arg := &FeedTitleParams{
		FeedTitle: "综合1",
	}
	result, err := testStore.AddFeedTitle(context.Background(), "feedtitles", arg)
	require.NoError(t, err)
	require.NotEmpty(t, result)
	require.Equal(t, arg.FeedTitle, result.Name)

	return result
}

func TestAddFeedTitle(t *testing.T) {
	createAddFeedTitle(t)
}

func TestGetAllFeedTitles(t *testing.T) {
	feedtitle := createAddFeedTitle(t)
	filter := bson.M{}
	result, err := testStore.GetAllFeedTitles(context.Background(), "feedtitles", filter)
	require.NoError(t, err)
	require.NotEmpty(t, result)

	var found bool
	for _, v := range result {
		if v["name"] == feedtitle.Name {
			found = true
			break
		}
	}
	require.True(t, found, "Inserted feed title not found in the results")
}

func TestManyFeedTitles(t *testing.T) {
	feedtitles, err := LoadFromFile[FeedTitleParams]("../sample-data/feed-titles.json")

	if err != nil {
		panic(fmt.Sprintf("Failed to load feed titles: %v", err))
	}

	var dummy []*FeedTitleParams

	for i := range feedtitles {
		dummy = append(dummy, &feedtitles[i])
	}

	require.NotEmpty(t, dummy, "Failed to load feed titles")
	require.Equal(t, len(feedtitles), len(dummy), "Failed to load feed titles")

	insertFeedTitle, err := testStore.AddManyFeedTitles(context.Background(), "feedtitles", dummy)

	require.NoError(t, err)
	require.NotEmpty(t, insertFeedTitle)

	for i, inserted := range insertFeedTitle {
		require.NotNil(t, inserted.ID)
		require.Equal(t, inserted.Name, feedtitles[i].FeedTitle)
		require.NotNil(t, inserted.CreatedAt)
		require.NotNil(t, inserted.UpdatedAt)

	}
}
