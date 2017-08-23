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

Docker Hub repository: https://hub.docker.com/u/justfortest/

Get iside a container with app and run app (container with mongo should be started):

$ docker exec -it fortunecookie_app_1 bash

#cd /usr/src/app

#node fortunecookie.js

If you would like to run app on host change a hostname in db connections string:

To run on container: var uri = 'mongodb://mongo:27017/admin';

To run on Host: var uri = 'mongodb://127.0.0.1:27017/admin';

