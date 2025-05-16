# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy backend package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy backend source code
COPY . .

# Build React app inside frontend folder
WORKDIR /usr/src/app/frontend
RUN npm install
RUN npm run build

# Move React build files to backend public directory
RUN mkdir -p /usr/src/app/public
RUN cp -a /usr/src/app/frontend/build/. /usr/src/app/public/

# Change back to backend root
WORKDIR /usr/src/app

# Expose the port your Express app listens on
EXPOSE 8080

# Start the backend server
CMD ["node", "server.js"]
