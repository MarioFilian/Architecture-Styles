FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3004
CMD ["node", "socketio-server.js"]