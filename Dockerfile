# Stage 1: Build the Angular app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app in production mode
RUN npm run build --prod

# Stage 2: Serve the Angular app using a lightweight server
FROM nginx:alpine

# Copy the built Angular app to the Nginx server directory
COPY --from=build /app/dist/hao123 /usr/share/nginx/html

# Expose the port the app will run on
EXPOSE 80

# Start Nginx to serve the Angular app
CMD ["nginx", "-g", "daemon off;"]
