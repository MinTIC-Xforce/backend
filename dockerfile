#FROM node:12.22.12
FROM node:14.21.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node","index.js"]