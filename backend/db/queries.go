package db

import (
	"context"
	"encoding/json"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"os"
)

type Queries interface {
	AddItemCategories(ctx context.Context, collectionName string, itemCategories *AddCategoryParams) (*ItemCategories, error)
	GetAllItemCategories(ctx context.Context, collectionName string, filter bson.M) ([]bson.M, error)
	AddManyItemCategories(ctx context.Context, collectionName string, itemCategories []*AddCategoryParams) ([]*ItemCategories, error)
	GetAllCategories(ctx context.Context, collectionName string, filter bson.M) ([]bson.M, error)
	AddCategory(ctx context.Context, collectionName string, category *CategoryParams) (*Category, error)
	AddManyCategories(ctx context.Context, collectionName string, categories []*CategoryParams) ([]*Category, error)
	GetAllHotSearch(ctx context.Context, collectionName string, filter bson.M) ([]bson.M, error)
	AddHostSearch(ctx context.Context, collectionName string, hostSearch *HostSearchParams) (*HostSearch, error)
	AddManyHotSearch(ctx context.Context, collectionName string, hostSearch []*HostSearchParams) ([]*HostSearch, error)
	GetAllItem(ctx context.Context, collectionName string, filter bson.M) ([]bson.M, error)
	AddItem(ctx context.Context, collectionName string, item *ItemParams) (*Item, error)
	AddManyItem(ctx context.Context, collectionName string, items []*ItemParams) ([]*Item, error)
	GetAllSiteItem(ctx context.Context, collectionName string, filter bson.M) ([]bson.M, error)
	AddSiteItem(ctx context.Context, collectionName string, siteItem *siteItemsParams) (*SiteItems, error)
	AddManySiteItem(ctx context.Context, collectionName string, siteItems []*siteItemsParams) ([]*SiteItems, error)
	GetAllFeedTitles(ctx context.Context, collectionName string, filter bson.M) ([]bson.M, error)
	AddFeedTitle(ctx context.Context, collectionName string, feedTitle *FeedTitleParams) (*FeedTitle, error)
	AddManyFeedTitles(ctx context.Context, collectionName string, feedTitles []*FeedTitleParams) ([]*FeedTitle, error)
}

type MongoQueries struct {
	DB *mongo.Database
}

func NewMongoQueries(db *mongo.Database) Queries {
	return &MongoQueries{
		DB: db,
	}
}

// ExecuteQuery performs generic operations on any collection
func (mq *MongoQueries) ExecuteQuery(ctx context.Context, collectionName string, queryFunc func(*mongo.Collection) error) error {

	collection := mq.DB.Collection(collectionName)
	return queryFunc(collection)
}

func LoadFromFile[T any](filePath string) ([]T, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, fmt.Errorf("failed to open file: %v", err)
	}
	defer file.Close()

	// Decode the JSON file into a slice of the generic type T
	var data []T
	if err := json.NewDecoder(file).Decode(&data); err != nil {
		return nil, fmt.Errorf("failed to decode JSON: %v", err)
	}

	return data, nil
}
