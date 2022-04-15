FROM node

WORKDIR /opt/app

COPY app.js /opt/app/app.js
COPY public/ /opt/app/public/
COPY index.html /opt/app/index.html

COPY package.json /opt/app/package.json 

RUN ["npm", "install"]
