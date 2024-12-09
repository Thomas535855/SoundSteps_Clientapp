# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) for caching dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (you should serve on port 8080)
EXPOSE 8080

# Start the application
CMD ["npm", "run", "serve"]
