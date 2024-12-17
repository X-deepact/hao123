package db

import (
	"context"
	"errors"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"time"
)

type contentParams struct {
	Video []MediaItem `bson:"video" json:"video"`
	Live  []MediaItem `bson:"live" json:"live"`
}

func (mq *MongoQueries) GetAllContent(ctx context.Context, collectionName string, filter bson.M, skip, limit int64) ([]Content, error) {
	// Ensure the filter is not nil
	if filter == nil {
		filter = bson.M{}
	}

	// Prepare a slice to hold the results
	var results []Content

	// Execute the query
	err := mq.ExecuteQuery(ctx, collectionName, func(collection *mongo.Collection) error {
		// Set pagination options
		findOptions := options.Find().SetSkip(skip).SetLimit(limit)

		// Perform the query
		cursor, err := collection.Find(ctx, filter, findOptions)
		if err != nil {
			return err
		}
		defer cursor.Close(ctx)

		// Decode each document into the results slice
		if err := cursor.All(ctx, &results); err != nil {
			return err
		}

		return nil
	})

	// Return the results and error (if any)
	return results, err
}

func (mq *MongoQueries) AddContent(ctx context.Context, collectionName string, contentParams *contentParams) (*Content, error) {
	if len(contentParams.Video) == 0 && len(contentParams.Live) == 0 {
		return nil, errors.New("video or live content must be provided")
	}

	for _, video := range contentParams.Video {
		if video.Title == "" || video.URL == "" {
			return nil, errors.New("each video must have a title and URL")
		}
	}
	for _, live := range contentParams.Live {
		if live.Title == "" || live.URL == "" {
			return nil, errors.New("each live event must have a title and URL")
		}
	}

	// Prepare the new document
	newContent := &Content{
		ID:    primitive.NewObjectID(),
		Video: contentParams.Video,
		Live:  contentParams.Live,
		CreatedAt: func() *time.Time {
			now := time.Now()
			return &now
		}(),
		UpdatedAt: func() *time.Time {
			now := time.Now()
			return &now
		}(),
	}

	// Insert the document
	err := mq.ExecuteQuery(ctx, collectionName, func(collection *mongo.Collection) error {
		result, err := collection.InsertOne(ctx, newContent)
		if err == nil {
			newContent.ID = result.InsertedID.(primitive.ObjectID)
		}
		return err
	})
	if err != nil {
		return nil, fmt.Errorf("failed to insert content: %v", err)
	}

	return newContent, nil
}

func (mq *MongoQueries) AddManyContent(ctx context.Context, collectionName string, contentParamsList []*contentParams) ([]*Content, error) {
	if len(contentParamsList) == 0 {
		return nil, errors.New("no content items provided to insert")
	}

	// Prepare documents for insertion
	var docs []interface{}
	var resultDocs []*Content

	for _, contentParams := range contentParamsList {
		// Validate fields
		if len(contentParams.Video) == 0 && len(contentParams.Live) == 0 {
			return nil, errors.New("video or live content must be provided for all items")
		}

		for _, video := range contentParams.Video {
			if video.Title == "" || video.URL == "" {
				return nil, errors.New("each video must have a title and URL")
			}
		}
		for _, live := range contentParams.Live {
			if live.Title == "" || live.URL == "" {
				return nil, errors.New("each live event must have a title and URL")
			}
		}

		newContent := &Content{
			ID:    primitive.NewObjectID(),
			Video: contentParams.Video,
			Live:  contentParams.Live,
			CreatedAt: func() *time.Time {
				now := time.Now()
				return &now
			}(),
			UpdatedAt: func() *time.Time {
				now := time.Now()
				return &now
			}(),
		}

		docs = append(docs, newContent)
		resultDocs = append(resultDocs, newContent)
	}

	// Insert the documents
	err := mq.ExecuteQuery(ctx, collectionName, func(collection *mongo.Collection) error {
		_, err := collection.InsertMany(ctx, docs)
		return err
	})

	if err != nil {
		return nil, fmt.Errorf("failed to insert content items: %v", err)
	}

	return resultDocs, nil
}
