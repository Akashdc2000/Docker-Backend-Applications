FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7777

CMD ["npm","run","dev"]









# FROM node:16-alpine
# WORKDIR /app
# COPY . .
# RUN npm ci

# CMD ["npm","run","dev"]