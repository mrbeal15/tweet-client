# base image
FROM node:10.15.1

# set working directory
RUN mkdir /client
WORKDIR /clientp

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /client/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["npm", "start"]
