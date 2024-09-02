# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm i

RUN npm i -g serve

# Copy the rest of the application code to the working directory
COPY . ./

RUN npm run build

# Expose a port (if your application listens on a specific port)
EXPOSE 3000

# Define the command to run your application
CMD [ "serve", "-s", "dist" ]

