


# Use the official httpd image
FROM httpd:alpine

# Set the correct document root for Apache
WORKDIR /usr/local/apache2/htdocs/

# Copy all files from the 'dist' folder to Apache's web root directory
COPY dist/ /usr/local/apache2/htdocs/

# Expose port 80
EXPOSE 80

# Start Apache HTTP Server
CMD ["httpd", "-D", "FOREGROUND"]
