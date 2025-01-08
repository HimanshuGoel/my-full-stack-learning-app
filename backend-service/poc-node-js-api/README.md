# Express Node.js

To be created...

<http://localhost:8080/api/applications>

Commands

- Pulling a docker image - docker pull mongo:latest
- Running the image into a container - docker run --name mongodb -d -p 27017:27017 mongo:latest
- Check running containers - docker ps
- Access the MongoDB shell inside the container - docker exec -it mongodb mongosh

Run MongoDB with a volume: docker run --name mongodb -d -p 27017:27017 -v /path/to/your/data:/data/db mongo:latest

Stop the container: - docker stop mongodb
docker rm mongodb - docker rm mongodb

Run the containers - docker-compose up -d

show dbs

use db_name1

db.getCollectionNames(); or show collections
db.collection_name.find()

> nx reset

> nx serve proof-of-concepts

> Mongo DB -
> Schema with Mongoose
> Validation Annotations (built-in and custom)
> Middleware (Hooks) (pre-save, post-save)
> Aggregations (advanced query like calculating aggregating)
> Virtual Fields
> Indexing on subscription name 7. Error Handling (validation error)
> Transactions
> Populate (Relationships) 10. Data Encryption
> Auditing
> Pagination
> Soft Deletes
> Environment-specific Configurations
> Caching with Redis
> API Rate Limiting
> Query Filtering, Sorting, and Pagination

<https://chatgpt.com/share/677a9b1d-b234-800a-b93b-097e67a0573b>

> CI/CD Integration
> Logging with Winston
> Automated API Documentation

setup eslint, prettier

refactor codebase to make it more of feature based instead of type based
