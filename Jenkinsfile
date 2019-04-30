pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            algs '-p 3000:3000'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
