// see readme for exactly how this should look
// use inquirer to ask questions
// employee class is the main one that keeps track of common data
// sub classes keep track of specific info for that employee

// start with asking questions from inquirer
// blank team array at the top let team = []
    // with those answers make a new class with the answers
    // let eng = mew Engineer (answer.id, answer.name, etc..)
    // then push that new class into team array >> team.push(eng)

// When finished adding people, make the fake html page using fs.writeFile()

let team = [{name: 'Tom', role: 'Manager'}, {name: 'Troy', role: 'Engineer'}]

let fakeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${makeCards(team)}
</body>
</html>
`
function makeCards(team) {

    let cards = []

    for (let i = 0; i < array.lengtht; i++) {
        if (team[i].role === 'Engineer') {
            cards.push( `
                <h1> I am an engineer ${team[i].name} </h1>
            
            `)
        } else if (team[i].role === 'manager') {

            cards.push( `
            <h1> I am a manager ${team[i].name} </h1>
            `)
        }
        
    }
    return cards.join('')
}


// Inquirer.prompt({
//     type: "confirm",
//     name: "continue",
//     message: "Continue?"
// }, function (answers) {
//     if (answers.continue) {
//         Inquirer.prompt([...], cb);
//     }
// });
const inquirer = require('inquirer')

const questions = []

function getManager() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'managerName',
            },
            {
                type: 'list',
                message: 'What is your employee ID?',
                name: 'managerId',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'managerOffice',
            },
            {
                type: 'list',
                message: 'Would you like to add any team members?',
                name: 'managerTeam',
                choices: [
                    'Engineer',
                    'Intern',
                    'Finish building team'
                ]
            },
        ])
    if ('managerTeam' === 'Engineer') {
        getEngineer()
    } else if ('managerTeam' === 'Intern') {
        getIntern()
    }
}

function getEngineer() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'engineerName',
            },
            {
                type: 'list',
                message: 'What is your employee ID?',
                name: 'engineerId',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'engineerGithub',
            }
        ])
}

function getIntern() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'internName',
            },
            {
                type: 'list',
                message: 'What is your employee ID?',
                name: 'internId',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'internEmail',
            },
            {
                type: 'input',
                message: 'What school do you attend?',
                name: 'internSchool',
            }
        ])
}

getManager()
