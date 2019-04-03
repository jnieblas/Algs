pipeline {
    agent { docker { image 'node:8' } }
    stages {
        stage('build') {
            steps {
                bat 'npm --version'
            }
        }
    }
}