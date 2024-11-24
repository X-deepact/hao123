package db

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type Queries interface {
	GetAllAdvertisement(ctx context.Context, collectionName string, filter bson.M) ([]bson.M, error)
	GetAllACategories(ctx context.Context, collectionName string, filter bson.M) ([]bson.M, error)
	GetAllLinks(ctx context.Context, collectionName string, filter bson.M) ([]bson.M, error)
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
