FROM node:lts-alpine

RUN addgroup app && adduser -S -G app app

RUN mkdir /app && chown app:app /app

USER app

# RUN mkdir -p /home/app

WORKDIR /home/app/app

COPY ./package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]