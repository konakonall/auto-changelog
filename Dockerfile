FROM node:12

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

RUN npm link

# ENTRYPOINT [ "auto-changelog"]

CMD ls



