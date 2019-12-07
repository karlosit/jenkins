pipeline {
    agent any
    environment {
        CI = 'true'
        COMPOSE_PROJECT_NAME = "${env.JOB_NAME}-${env.BUILD_ID}"
    }
    stages {
        stage('Build') {
            steps {
                deleteDir()
                sh 'docker system prune -a -f'
                sh 'docker-compose down -v'
                sh 'docker-compose up -d --build'
            }
        }
        stage('Test') {
            steps {
                echo "test ${BUILD_NUMBER}"
                sh 'docker build -t demo-test -f docker/Dockerfile.test --no-cache .'
                sh 'docker run --rm demo-test'
                sh 'docker rmi demo-test'
            }
        }
        stage('Deploy for production') {
            when {
                branch 'master'  
            }
            steps {
                echo 'From master'
                input message: 'Finished using the web site?'
                sh 'docker container stop demo-react'
                sh 'docker container rm demo-react'
            }
        }
        stage('Deliver for development') {
            when {
                branch 'develop' 
            }
            steps {
                echo 'Build from develop'
            }
        }   
    }

    post {
         always {
            //archiveArtifacts artifacts: "test1.${BUILD_NUMBER}.txt"
            junit 'report.xml'
            echo 'artifact saved'
        }
        success {
            echo 'I succeeeded!'
            //deleteDir()
        }
        // unstable {
        //     echo 'I am unstable :/'
        // }
        failure {
            echo 'I failed :('
            echo 'after build'
            sh 'docker-compose down'
            //deleteDir()
            //mail to: 'carlos.olmedodev@gmail.com',
            //    subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
            //    body: "Something is wrong with ${env.BUILD_URL}"
        }
        changed {
            echo 'Things were different before...'
            //sh 'docker-compose down'
            //deleteDir()
        }
    }
}