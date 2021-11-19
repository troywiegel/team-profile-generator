const fs = require('fs')

function generateHtml(team) {

    const cards = []

    for (let i = 0; i < team.length; i++) {

        switch (team[i].role) {

            case 'manager':
                let managerCard =
                    `
                <div class='card manager' style='width: 18rem;'>
                    <div class='card-header text-white bg-info'>${team[i].name}</div>
                    <div class='card-body'>
                        <h5 class='card-title'>${team[i].role}</h5>
                        <p class='card-text'>ID: ${team[i].id}</p>
                        <a href='mailto: ${team[i].email}' class='card-text'>Email</a>
                        <p class='card-text'>Office Number: ${team[i].office}</p>
                    </div>
                </div>
                `
                cards.push(managerCard)
                break;
            case 'engineer':
                let engineerCard =
                    `
                <div class='card engineer' style='width: 18rem;'>
                     <div class='card-header text-white bg-info'>${team[i].name}</div>
                     <div class='card-body'>
                         <h5 class='card-title'>${team[i].role}</h5>
                         <p class='card-text'>ID: ${team[i].id}</p>
                         <a href='mailto: ${team[i].email}' class='card-text'>Email</a>
                         <br>
                         <a href='https://github.com/${team[i].github}' target='_blank' class='card-text'>Github</a>
                     </div>
                 </div>
                `
                cards.push(engineerCard)
                break;
            case 'intern':
                let internCard =
                    `
                <div class='card intern' style='width: 18rem;'>
                    <div class='card-header text-white bg-info'>${team[i].name}</div>
                    <div class='card-body'>
                        <h5 class='card-title'>${team[i].role}</h5>
                        <p class='card-text'>ID: ${team[i].id}</p>
                        <a href='mailto: ${team[i].email}' class='card-text'>Email</a>
                        <p class='card-text'>School: ${team[i].school}</p>
                    </div>
                </div>
                `
                cards.push(internCard)
                break;
        }
    }

    let html =
        `
    <!DOCTYPE html>
    <html lang="en">
        
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
        
    <body>
        
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center">My Team</h1>
                </div>
            </div>
        </header>
        
        <div class="card-wrapper d-flex flex-row justify-content-around">
            ${cards.join(' ')}
        </div>
        
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    </body>
        
    </html>
    `
    fs.writeFile('./dist/myteam.html', html, function (err) {

        err ? console.error(err) : console.log('Success! Wrote the Html page ✔️')

    })
}

module.exports = generateHtml