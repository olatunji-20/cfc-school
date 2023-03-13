FROM node:lts-alpine

EXPOSE 2500

# USER node

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ./package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]