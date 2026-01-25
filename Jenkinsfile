pipeline {
    agent any

   

    environment {
        S3_BUCKET = "codekerdostest"
        CLOUDFRONT_ID = "EA4IBJH3S9LRW"
    }

    stages {

        stage('Install Tools as Root') {
            steps {
                sh '''
                sudo yum install -y git unzip

                cd /tmp
                curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
                unzip -o awscliv2.zip
                sudo ./aws/install --update

                curl -fsSL https://rpm.nodesource.com/setup_24.x | sudo bash -
                sudo yum install -y nodejs

                git --version
                aws --version
                node -v
                npm -v
                '''
            }
        }

        stage('Clone Code') {
            steps {
                sh '''
                rm -rf ReactJs_Receipe_Finder
                git clone -b vinai https://github.com/vinaikolluri/ReactJs_Receipe_Finder.git
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                cd ReactJs_Receipe_Finder
                npm install
                '''
            }
        }

        stage('Build React App') {
            steps {
                sh '''
                cd ReactJs_Receipe_Finder
                npm run build
                '''
            }
        }

        stage('Upload to S3') {
            steps {
                sh '''
                aws s3 sync ReactJs_Receipe_Finder/dist/ s3://$S3_BUCKET --delete
                '''
            }
        }

        stage('CloudFront Invalidation') {
            steps {
                sh '''
                aws cloudfront create-invalidation \
                  --distribution-id $CLOUDFRONT_ID \
                  --paths "/*"
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful: React app on S3, CloudFront cache cleared"
        }
    }
}
