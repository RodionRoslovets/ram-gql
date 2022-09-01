FROM node:16-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json .

RUN yarn

COPY . .

RUN yarn codegen

CMD [ "yarn", "dev" ]
