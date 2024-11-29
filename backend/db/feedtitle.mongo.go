package db

import (
	"context"
	"errors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
)

type FeedTitleParams struct {
	FeedTitle string `json:"name"`
}

func (mq *MongoQueries) GetAllFeedTitles(ctx context.Context, collectionName string, filter bson.M) ([]bson.M, error) {
	// Default filter to empty (matches all documents) if no filter is provided
	if filter == nil {
		filter = bson.M{}
	}
	var results []bson.M

	err := mq.ExecuteQuery(ctx, collectionName, func(collection *mongo.Collection) error {
		cursor, err := collection.Find(ctx, filter)
		if err != nil {
			return err
		}
		defer cursor.Close(ctx)

		for cursor.Next(ctx) {
			var document bson.M
			if err := cursor.Decode(&document); err != nil {
				return err
			}
			results = append(results, document)
		}

		if err := cursor.Err(); err != nil {
			return err
		}

		return nil
	})

	return results, err

}

func (mq *MongoQueries) AddFeedTitle(ctx context.Context, collectionName string, feedTitle *FeedTitleParams) (*FeedTitle, error) {

	// Validate input
	if feedTitle.FeedTitle == "" {
		return nil, errors.New("feed title must be provided")
	}

	// Define a filter to check for existing documents
	filter := bson.M{
		"name": feedTitle.FeedTitle,
	}

	// Check if the feed title already exists
	err := mq.ExecuteQuery(ctx, collectionName, func(collection *mongo.Collection) error {
		count, err := collection.CountDocuments(ctx, filter)
		if err != nil {
			return err
		}

		if count > 0 {
			return errors.New("feed title already exists")
		}

		return nil
	})

	if err != nil {
		return nil, err
	}
	// If the feed title doesn't exist, insert it into the database
	newFeedTitle := &FeedTitle{
		ID:        primitive.NewObjectID(),
		Name:      feedTitle.FeedTitle,
		CreatedAt: func() *time.Time { t := time.Now(); return &t }(),
		UpdatedAt: func() *time.Time { t := time.Now(); return &t }(),
	}

	err = mq.ExecuteQuery(ctx, collectionName, func(collection *mongo.Collection) error {
		_, err := collection.InsertOne(ctx, newFeedTitle)
		return err
	})

	if err != nil {
		return nil, err
	}

	// Return the newly created feed title
	return newFeedTitle, nil
}

func (mq *MongoQueries) AddManyFeedTitles(ctx context.Context, collectionName string, feedTitles []*FeedTitleParams) ([]*FeedTitle, error) {

	if len(feedTitles) == 0 {
		return nil, errors.New("no feed titles provided")
	}

	var docs []interface{}
	var results []*FeedTitle

	for _, feedTitle := range feedTitles {
		if feedTitle.FeedTitle == "" {
			return nil, errors.New("feed title must be provided")
		}
		newFeedTitle := &FeedTitle{
			ID:        primitive.NewObjectID(),
			Name:      feedTitle.FeedTitle,
			CreatedAt: func() *time.Time { t := time.Now(); return &t }(),
			UpdatedAt: func() *time.Time { t := time.Now(); return &t }(),
		}

		docs = append(docs, newFeedTitle)
		results = append(results, newFeedTitle)
	}

	err := mq.ExecuteQuery(ctx, collectionName, func(collection *mongo.Collection) error {
		_, err := collection.InsertMany(ctx, docs)
		return err
	})

	if err != nil {
		return nil, err
	}

	return results, nil
}
