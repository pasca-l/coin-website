FROM node:current-alpine3.17
WORKDIR /home/usr/app/
RUN apk update && apk upgrade
RUN npm install -g npm@9.2.0
