package db

import (
	"hao123/util"
	"log"
	"os"
	"testing"
)

var testStore Store

func TestMain(m *testing.M) {
	config, err := util.LoadConfig("../.")
	if err != nil {
		log.Fatalf("Failed to load config: %v", err)
	}

	connect, err := Connect(config.DatabaseURL, config.DBName, config.DBUsername, config.DBPassword, config.Source, 3) // Use a test database
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	defer func() {
		if err := connect.Disconnect(connect); err != nil {
			log.Printf("Failed to disconnect MongoDB: %v", err)
		}
	}()

	queries := NewMongoQueries(connect.Database)
	testStore = NewMongoStore(connect.Client, queries)

	code := m.Run()

	os.Exit(code)
}
