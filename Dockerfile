# base image
FROM node

# current working directory inside the container
WORKDIR /mynodeapp

# copy all dirs/files from current dir in host to workdir in the container
COPY . .

# install npm packages
RUN npm install

# expose this port outside
EXPOSE 3000 

# command to run when the container starts
# ENTRYPOINT [ "node", "server.js" ]
CMD [ "node", "server.js" ]