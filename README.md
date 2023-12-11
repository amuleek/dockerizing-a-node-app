# Dockerfile: Dockerize A Node.js App

A `Dockerfile` is a text document that contains all the commands a user could call on the command line to assemble an `image`.

`Docker Image` is an executable package of software that includes everything needed to run an application.

A `Container` is a runtime instance of an image. Containers make development and deployment more efficient since they contain all the dependencies and parameters needed for the application it runs completely isolated from the host environment.

Steps To Dockerize An App

- Create your app.
- Create a file named Dockerfile.
- Add instructions in Dockerfile.
- Build Dockerfile to create an image.
- Run the image to create a container.

### Dockerize A Node App 

#### src/server.js

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Dockerizing a Node.js application here!");
});

app.listen(3000, function () {
  console.log("App listening on port 3000");
});
```

#### package.json

```js
{
  "name": "my-app",
  "version": "1.0",
  "dependencies": {
    "express": "4.18.2"
  }
}

```

#### Dockerfile

```dockerfile
FROM node:19-alpine

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install

CMD ["node", "server.js"]
```

#### Build The Dockerfile To Create Image

```bash
docker build -t node-app:1.0 .
```

#### Run Container From The node-app:1.0 Image

```bash
docker run -d -p 3000:3000 node-app:1.0
```
