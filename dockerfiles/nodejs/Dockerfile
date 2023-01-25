FROM node:current-alpine3.17

ENV HOME /home/usr

WORKDIR /home/usr/app/

RUN apk update && apk upgrade \
    && npm install -g npm@9.2.0
