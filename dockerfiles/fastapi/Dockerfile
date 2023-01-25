FROM python:3.12.0a4-alpine3.17

ENV HOME /home/usr
ENV PATH /home/usr/.local/bin:$PATH

WORKDIR /home/usr/app/

RUN apk update && apk upgrade \
    # build-base contains gcc, libc-dev and binutils packages
    && apk add build-base libffi-dev \
    && apk --no-cache add curl
RUN curl -sSL https://install.python-poetry.org | python3 -
