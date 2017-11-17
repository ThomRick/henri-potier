FROM node:carbon-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run -s build

EXPOSE 5000
CMD [ "npm", "start" ]