# Stage 1: Build the React Application
FROM node:14 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application for production
RUN npm run build

# Stage 2: Serve the Application using Nginx
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port that Nginx will listen on (default is 80)
EXPOSE 80

# Start Nginx when the container is run
CMD ["nginx", "-g", "daemon off;"]
