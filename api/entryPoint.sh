#!/bin/bash

#waits for db container and dumps output.
while ! pg_isready -h db -p 5432 > /dev/null 2> /dev/null; do
    echo "db connection not ready."
    sleep 2 
done
node ./database/dbBootstrap.js
npm start