FROM node:alpine3.10

#RUN mkdir -p app/
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /

RUN yarn install

COPY . /

EXPOSE 3000
CMD ["yarn", "start"]