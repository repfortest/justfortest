FROM node:argon
 
WORKDIR /usr/src/app 
RUN npm install

EXPOSE 3000
CMD [ "node", "fortunecookie.js" ]
