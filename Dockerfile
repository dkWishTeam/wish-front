FROM node:18-alpine
WORKDIR ./

COPY package.json .

ADD . .
RUN npm install

EXPOSE 8080
CMD ["npm", "run", "serve"]