const inquirer = require('inquirer')
const fs = require('fs')
const employees = require('./lib/employees')
const { generateHtml } = require('./lib/generateHtml')

const team = []

function getTeam() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the employee name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is the employee ID?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is the employee email address?',
                name: 'email'
            },
            {
                type: 'list',
                message: 'What is the employee job role?',
                name: 'role',
                choices: [
                    'manager',
                    'engineer',
                    'intern'
                ]
            },
            {
                type: 'input',
                message: 'What is the manager office number?',
                name: 'office',
                when: (answers) => answers.role === 'manager'
            },
            {
                type: 'input',
                message: 'What is the engineer github username?',
                name: 'github',
                when: (answers) => answers.role === 'engineer'
            },
            {
                type: 'input',
                message: 'What is the intern school name?',
                name: 'school',
                when: (answers) => answers.role === 'intern'
            },
            {
                type: 'list',
                message: 'Would you like to add another employee?',
                name: 'add',
                choices: [
                    'yes',
                    'no'
                ]
            }
        ])
        .then((answer) => {
            if (answer.add === 'yes') {
                getTeam()
            } else {
                generateHtml()
            }
        })
}

getTeam()