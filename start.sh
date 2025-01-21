#!/usr/bin/env bash

 

xhost +local:docker
xhost +$HOST

docker compose up --build --remove-orphans
