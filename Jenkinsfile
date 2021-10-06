pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            when {
                  branch 'main'
                }
            steps {
                nodejs(nodeJSInstallationName: 'node:14') {
                    sh 'yarn'
                }
            }
        }
        stage('Build') {
            when {
                  branch 'main'
                }
            steps {
                nodejs(nodeJSInstallationName: 'node:14') {
                    sh 'yarn build'
                }
            }
        }
        stage('Deploy') {
            when {
                  branch 'main'
                }
            steps {
                nodejs(nodeJSInstallationName: 'node:14') {
                    sh 'yarn deploy'
                }
            }
        }
    }
 }
