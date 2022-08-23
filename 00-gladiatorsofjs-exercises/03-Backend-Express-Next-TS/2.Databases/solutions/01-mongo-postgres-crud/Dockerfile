FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

USER 1000

COPY . .

CMD ["npm", "run", "start"]