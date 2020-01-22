FROM node:12.13

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./api/package*.json ./

RUN apt-get update && apt-get install -f -y postgresql-client
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./api .

EXPOSE 3000
CMD [ "./entryPoint.sh" ]