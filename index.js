const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const { generateHtml } = require('./generateHtml')

const team = []

function getTeam() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your employee ID?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'office'
            },
            {
                type: 'list',
                message: 'Would you like to add any team members?',
                name: 'add',
                choices: [
                    'engineer',
                    'intern',
                    'finish building team'
                ]
            }
        ])
        .then((answer) => {

            generateHtml(answer)

        })
}