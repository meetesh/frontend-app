FROM node:16-alpine
COPY package.json .
COPY package-lock.json .
COPY server.js .
COPY dist/* dist/
RUN ["npm", "install", "--only=prod"]
ENTRYPOINT ["npm", "run", "start"]
EXPOSE 6060
