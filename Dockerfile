FROM node:10
# Create app directory
WORKDIR /usr/src/app

# Copy package.json as well as package-lock.json
COPY package*.json ./

RUN npm install
# Or use:  RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD ["node", "server.js"]


#ADD views /app/views
#ADD package.json /app
#ADD server.js /app

#RUN cd /app; npm install

#ENV NODE_ENV production
#ENV PORT 8080
#EXPOSE 8080

#WORKDIR "/app"
#CMD [ "npm", "start" ]