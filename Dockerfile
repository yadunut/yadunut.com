FROM node:alpine as builder

WORKDIR /usr/src/app

ENV NODE_ENV production

RUN npm install -g gatsby-cli

COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
