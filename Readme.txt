sudo docker-compose up -d

Either Use docker compose file or below way

1. Create Mongo db container
    sudo docker container run --name mymongodb --publish 27017:27017 -d mongo

2. Modify container to allow authentication
    sudo docker container exec -it mymongodb bash

3. run command in bash ==> 
    mongo

4. create collection/db in mongodb by run below command ==> 
    use mydb 

5. create an account then type show users
    db.createUser({ user: "user", pwd: "piyush", roles: [] })

6. exit from mongo shell only not from container

7. Enable Mongodb auth
    mongo --port 27017 -u user -p piyush --authenticationDatabase mydb

8. now exit from container. 

9. Need to find IP address of mongodb 
    sudo docker inspect -f '{{.Name}} - {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mydatabase
