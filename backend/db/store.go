package db

import "go.mongodb.org/mongo-driver/mongo"

// Store is for Higher-Level Logic and Transactions for later
type Store interface {
	Queries
}

type MongoStore struct {
	Queries
	Client *mongo.Client
}

func NewMongoStore(client *mongo.Client, queries Queries) Store {
	return &MongoStore{
		Client:  client,
		Queries: queries,
	}
}
