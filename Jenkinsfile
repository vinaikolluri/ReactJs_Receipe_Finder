pipeline {
    agent any

    stages {
        stage('Setup Environment') {
            steps {
                echo 'Setting up environment: Installing Node.js, NPM, and Apache HTTPD...'
                sh '''
                    # Update system and install prerequisites
                    sudo yum update -y
                    sudo yum install -y  httpd

                    # Install NVM (Node Version Manager)
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

                    # Load NVM for current shell
                    . "$HOME/.nvm/nvm.sh"

                    # Install Node.js version 22
                    nvm install 22

                    # Verify installations
                    node -v
                    npm -v

                    # Start and enable Apache HTTP Server
                    sudo systemctl start httpd
                    sudo systemctl enable httpd
                '''
            }
        }

        stage('Clone git  Repository') {
            steps {
                echo 'Cloning repository...'
                git branch: 'vinai', url: 'https://github.com/vinaikolluri/ReactJs_Receipe_Finder.git'
            }
        }

        stage('Build React App') {
            steps {
                echo 'Installing dependencies and building the React app...'
                sh '''
                    . "$HOME/.nvm/nvm.sh"
                    npm install
                    npm run build
                '''
            }
        }

        stage('Deploy to Apache HTTPD') {
            steps {
                echo 'Deploying build files to Apache HTTP Server...'
                sh '''
                    sudo rm -rf /var/www/html/*
                    sudo cp -r dist/* /var/www/html/
                '''
            }
        }
    }
}
