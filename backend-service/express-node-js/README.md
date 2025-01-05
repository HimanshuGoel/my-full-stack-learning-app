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
