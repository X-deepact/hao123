DATABASE_URL=mongodb://admin:password@127.0.0.1:27017/?authSource=admin


delete_collection:
	echo "db.getSiblingDB('$(DB_NAME)').dropDatabase();" | mongosh "$(DATABASE_URL)"
go_test:
	go test ./db -v
# make delete_collection DB_NAME=hao123
.PHONY:delete_collection go_test