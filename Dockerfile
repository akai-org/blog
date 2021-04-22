FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
EXPOSE 8000
ENTRYPOINT node_modules/.bin/gatsby develop -H 0.0.0.0
