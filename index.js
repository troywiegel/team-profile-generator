const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const generateHtml = require('./generateHtml')

const team = []

function getTeam() {

    inquirer.prompt([
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
            message: 'What school is the intern from?',
            name: 'school',
            when: (answers) => answers.role === 'intern'
        },
    ])
        .then((answer) => {

            let employee;

            if (answer.role === 'manager') {

                employee = new Manager(answer.name, answer.id, answer.email, answer.role, answer.office)
                team.push(employee)

                addEmployee()

            } else if (answer.role === 'engineer') {

                employee = new Engineer(answer.name, answer.id, answer.email, answer.role, answer.github)
                team.push(employee)

                addEmployee()

            } else if (answer.role === 'intern') {

                employee = new Intern(answer.name, answer.id, answer.email, answer.role, answer.school)
                team.push(employee)

                addEmployee()
            }
        })
}

function addEmployee() {

    inquirer
        .prompt([
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
                generateHtml(team)
            }
        })
}

getTeam()