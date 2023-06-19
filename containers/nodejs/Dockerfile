FROM node:20-alpine3.17

ENV HOME /home/usr

WORKDIR /home/usr/app

COPY ./src/package.json /home/usr/app/

RUN apk update && apk upgrade \
    && npm install
