FROM node:16.20.0

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn install

CMD ["yarn", "start"]
