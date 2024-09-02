# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app/back

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm i

# Copy the rest of the application code to the working directory
COPY . ./

# Expose a port (if your application listens on a specific port)
EXPOSE 5000

# Run db migration
CMD ["npm", "run","migration:run"]

# Build the app
CMD ["npm", "run" ,"build"]

# Run the application
CMD ["npm", "run" ,"start"]