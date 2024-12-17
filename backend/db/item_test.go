package db

import (
	"context"
	"fmt"
	"testing"

	"github.com/stretchr/testify/require"
	"go.mongodb.org/mongo-driver/bson"
)

func createAddItem(t *testing.T) *Item {

	arg := &ItemParams{
		Name:     "巨龙猎手1",
		URL:      "https://wan.baidu.com1/cover?gameId=58573089&idfrom=4084",
		Category: func() *string { s := "页游"; return &s }(),
	}

	result, err := testStore.AddItem(context.Background(), "item", arg)

	require.NoError(t, err)
	require.NotEmpty(t, result)
	require.Equal(t, arg.Name, result.Name)
	require.Equal(t, arg.URL, result.URL)
	require.Equal(t, arg.Category, result.Category)
	return result

}

// func TestAddItem(t *testing.T) {
// 	createAddItem(t)
// }

func TestGetAllItem(t *testing.T) {

	insertedCategory := createAddItem(t)

	filter := bson.M{}
	results, err := testStore.GetAllItem(context.Background(), "item", filter, 0, 3)

	require.NoError(t, err)
	require.NotEmpty(t, results)

	var found bool
	for _, result := range results {
		if result["name"] == insertedCategory.Name && result["url"] == insertedCategory.URL {
			found = true
			break
		}
	}

	require.True(t, found, "Inserted Item not found in the results")
}

func TestAddManyItem(t *testing.T) {
	items, err := LoadFromFile[ItemParams]("../sample-data/items.json")

	if err != nil {
		panic(fmt.Sprintf("Failed to load items: %v", err))
	}

	var dummy []*ItemParams
	for i := range items {
		dummy = append(dummy, &items[i])

	}
	require.NotEmpty(t, dummy, "Dummy slice should not be empty")
	require.Equal(t, len(items), len(dummy), "Dummy slice should contain the same number of items as the loaded data")

	inserteIem, err := testStore.AddManyItem(context.Background(), "item", dummy)
	require.NoError(t, err)
	require.Len(t, inserteIem, len(dummy))
}
