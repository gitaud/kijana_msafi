FROM node:16.18.1-alpine as builder

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
COPY --chown=node:node . .

RUN npm install
RUN npm run build

FROM nginx:mainline-alpine
COPY --chown=node:node --from=builder ./ /var/www/html