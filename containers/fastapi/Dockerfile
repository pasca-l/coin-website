FROM python:3.10.9-bullseye

ENV HOME /home/usr
ENV PATH /home/usr/.local/bin:$PATH

WORKDIR /home/usr/app

RUN apt-get update && apt-get upgrade \
    # dependency for opencv-python
    && apt-get install -y libgl1-mesa-dev

COPY ./cv/pyproject.toml /home/usr/app/
COPY ./cv/poetry.lock /home/usr/app/
RUN apt install -y curl \
    && curl -sSL https://install.python-poetry.org | python3 - \
    && poetry install
