FROM node:12.13
#Requires environmental being set variable to run correctly.

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ../../api/package*.json ./

RUN apt-get update && apt-get install -f -y postgresql-client
RUN npm ci
COPY ../../api/database/seeds .
COPY ../../api/database/migrations .
COPY ../../api/database/knexfile.js .
COPY ../../api/database/dbContext.js .
COPY ./migrationTaskEntryPoint.js .

CMD [ "node ./migrationTaskEntryPoint.js" ]