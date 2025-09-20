# -------- Stage 1: Build the frontend --------
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the project (creates "dist" folder)
RUN npm run build


# -------- Stage 2: Serve with Apache --------
FROM httpd:alpine

# Set the correct document root for Apache
WORKDIR /usr/local/apache2/htdocs/

# Copy build output from previous stage to Apache web root
COPY --from=build /app/dist/ ./

# Expose port 80
EXPOSE 80

# Start Apache HTTP Server
CMD ["httpd", "-D", "FOREGROUND"]
