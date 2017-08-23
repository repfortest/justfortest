# justfortest
test task for Softteco

fortunecookie.js -- Node app

# Action: Create a Dockerfile.

Docker commands used: 

$ docker build .

$ docker build -t justfortest/my_mongodb:latest .

$ docker build -t justfortest/fortunecookie:latest .

$ docker run -v justfortest:/usr/src/app -it justfortest/fortunecookie


# Action: Create a docker-compose.yml

$ docker-compose up

Login and push images to Docker Hub

$ docker login

$ docker push justfortest/fortunecookie


Pull container with app: 

Get iside a container with app and run app:
$ docker exec -it fortunecookie_app_1 bash
#cd /usr/src/app
#node fortunecookie.js
