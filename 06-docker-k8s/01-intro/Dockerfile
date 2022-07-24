FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./package-lock.json ./
RUN npm install

COPY ./ ./

# Not necessary - wasnt in course: EXPOSE 8085

CMD ["npm", "start"]

# docker run -p 8085:8085 sebslon/simpleweb:latest