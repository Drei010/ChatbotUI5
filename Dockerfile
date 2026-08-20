# syntax=docker/dockerfile:1
ARG NODE_VERSION=24.15.0

FROM node:${NODE_VERSION}-alpine
WORKDIR /usr/src/app

COPY . .
RUN npm ci

USER node
EXPOSE 4004
CMD ["npm", "start"]