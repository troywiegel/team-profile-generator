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



// let team = [{name: 'Tom', role: 'Manager'}, {name: 'Troy', role: 'Engineer'}]

// let fakeHtml = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     ${makeCards(team)}
// </body>
// </html>
// `
// function makeCards(team) {

//     let cards = []

//     for (let i = 0; i < array.lengtht; i++) {
//         if (team[i].role === 'Engineer') {
//             cards.push( `
//                 <h1> I am an engineer ${team[i].name} </h1>

//             `)
//         } else if (team[i].role === 'manager') {

//             cards.push( `
//             <div id='manager' class="card" style="width: 18rem;">
//             <div class="card-header text-white bg-info">${answer.managerName}</div>
//             <div class="card-body">
//                 <h5 class="card-title">Manager</h5>
//                 <p class="card-text">ID: ${answer.managerId}</p>
//                 <p class="card-text">Email: </p>
//                 <p class="card-text">Office Number: </p>
//             </div>
//         </div>
//             `)
//         }

//     }
//     return cards.join('')
// }