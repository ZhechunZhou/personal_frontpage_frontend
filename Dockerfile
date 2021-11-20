# build environment
FROM node:current-alpine as build
RUN apk add --no-cache python3 py3-pip
RUN apk add --virtual build-dependencies build-base gcc wget git
RUN rm -rf /var/cache/apk/*
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN export NODE_OPTIONS=--openssl-legacy-provider && yarn build

# production environment
FROM nginx:stable-alpine
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
