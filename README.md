# justfortest
test task for Softteco

fortunecookie.js -- Node app

Create a Dockerfile.

Docker commands used: 
$ docker build .
$ docker build -t justfortest/my_mongodb:latest .
$ docker build -t justfortest/fortunecookie:latest .
$ docker run -v justfortest:/usr/src/app -it justfortest/fortunecookie

Create a docker-compose.yml
$ docker-compose up

Login and push images to Docker Hub
$ docker login
$ docker push justfortest/my_mongodb
$ docker push justfortest/fortunecookie
