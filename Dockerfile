# Use the official httpd image
FROM httpd:alpine

# Set the working directory
WORKDIR /var/www/html/

# Copy all files from the 'dist' folder to Apache's web root directory
COPY dist/ /var/www/html/

# Expose port 80
EXPOSE 80

# Start Apache HTTP Server
CMD ["httpd", "-D", "FOREGROUND"]
