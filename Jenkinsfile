pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-credentials' // ID for DockerHub credentials stored in Jenkins
        DOCKERHUB_REPO = "amuleeksidhu/sampl" // DockerHub repository
        IMAGE_TAG = "latest" // Tag for the Docker image
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/amuleek/dockerizing-a-node-app.git' // Clone the GitHub repository
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${DOCKERHUB_REPO}:${IMAGE_TAG} -f Dockerfile .' // Build the Docker image
            }
        }

        stage('Login to DockerHub') {
            environment {
                DOCKER_CONFIG = credentials('dockerhub-credentials') // Mount Docker credentials from Jenkins
            }
            steps {
                sh 'docker push ${DOCKERHUB_REPO}:${IMAGE_TAG}' // Push the image to DockerHub
            }
        }

        stage('Run Docker Container Locally') {
            steps {
                sh 'docker run -d -p 3000:3000 ${DOCKERHUB_REPO}:${IMAGE_TAG}' // Run the Docker container locally
            }
        }
    }

    post {
        always {
            script {
                sh 'docker logout' // Logout from DockerHub
                cleanWs() // Clean the workspace
            }
        }
    }
}
