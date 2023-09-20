FROM node:18-alpine

WORKDIR /balanceadorservidor

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]