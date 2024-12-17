package db

import (
	"context"
	"fmt"
	"testing"

	"github.com/stretchr/testify/require"
	"go.mongodb.org/mongo-driver/bson"
)

func createAddItemCategories(t *testing.T) *ItemCategories {
	arg := &AddCategoryParams{

		Name: "综合1",
		URL:  "http://www.hao123.com/sitemap1",
	}
	result, err := testStore.AddItemCategories(context.Background(), "itemCategories", arg)
	require.NoError(t, err)
	require.NotEmpty(t, result)
	require.Equal(t, arg.Name, result.Name)
	require.Equal(t, arg.URL, result.URL)
	return result
}

// func TestAddItemCategories(t *testing.T) {
// 	createAddItemCategories(t)
// }

func TestGetAllItemCategories(t *testing.T) {

	insertedCategory := createAddItemCategories(t) // This adds a document using AddItemCategories

	filter := bson.M{}
	results, err := testStore.GetAllItemCategories(context.Background(), "itemCategories", filter, 0, 3)

	require.NoError(t, err)
	require.NotEmpty(t, results)

	var found bool
	for _, result := range results {
		if result["name"] == insertedCategory.Name && result["url"] == insertedCategory.URL {
			found = true
			break
		}
	}

	require.True(t, found, "Inserted item categories not found in the results")
}

func TestAddManyItemCategories(t *testing.T) {
	var dummy []*AddCategoryParams

	itemCategories, err := LoadFromFile[AddCategoryParams]("../sample-data/itemCategories.json")

	if err != nil {
		panic(fmt.Sprintf("Failed to load item categories: %v", err))
	}

	for i := range itemCategories {
		dummy = append(dummy, &itemCategories[i])
	}
	require.NotEmpty(t, dummy, "Dummy slice should not be empty")
	require.Equal(t, len(itemCategories), len(dummy), "Dummy slice should contain the same number of items as the loaded data")
	insertedCategories, err := testStore.AddManyItemCategories(context.Background(), "itemCategories", dummy)
	require.NoError(t, err) // Ensure no errors occurred
	require.Len(t, insertedCategories, len(dummy))

	// Fetch the database reference via the store
	//	db := testStore.GetDatabase()
	//	require.NotNil(t, db)
	//
	// Clean up the collection
	//	err = db.Collection("ItemCategories").Drop(context.Background())
	//	require.NoError(t, err)

}
