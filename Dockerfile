FROM node:18

# Set up the working directory
WORKDIR /usr/src/app

# Copy application files
COPY package*.json ./
RUN npm install

COPY . .

# Expose the port and start the app
EXPOSE 8080
CMD ["node", "server.js"]