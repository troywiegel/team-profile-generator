const fs = require('fs')

function generateHtml(answer) {

    let html = `<!DOCTYPE html>
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
        <div id='manager' class="card" style="width: 18rem;">
            <div class="card-header text-white bg-info">${answer.name}</div>
            <div class="card-body">
                <h5 class="card-title">Manager</h5>
                <p class="card-text">ID: ${answer.id}</p>
                <p class="card-text">Email: ${answer.email}</p>
                <p class="card-text">Office Number: ${answer.office}</p>
            </div>
        </div>
        <div class="card engineer" style="width: 18rem;">
            <div class="card-header text-white bg-dark">Name</div>
            <div class="card-body">
                <h5 class="card-title">Engineer</h5>
                <p class="card-text">ID: </p>
                <p class="card-text">Email: </p>
                <p class="card-text">GitHub: </p>
            </div>
        </div>
        <div class="card engineer" style="width: 18rem;">
            <div class="card-header text-white bg-dark">Name</div>
            <div class="card-body">
                <h5 class="card-title">Engineer</h5>
                <p class="card-text">ID: </p>
                <p class="card-text">Email: </p>
                <p class="card-text">GitHub: </p>
            </div>
        </div>
        <div class="card engineer" style="width: 18rem;">
            <div class="card-header text-white bg-dark">Name</div>
            <div class="card-body">
                <h5 class="card-title">Engineer</h5>
                <p class="card-text">ID: </p>
                <p class="card-text">Email: </p>
                <p class="card-text">GitHub: </p>
            </div>
        </div>
        <div class="card intern" style="width: 18rem;">
        <div class="card-header text-dark bg-light">Name</div>
        <div class="card-body">
            <h5 class="card-title">Intern</h5>
            <p class="card-text">ID: </p>
            <p class="card-text">Email: </p>
            <p class="card-text">School: </p>
        </div>
    </div>
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

    fs.writeFile('myteam.html', html, function (err) {

        err ? console.error(err) : console.log('Success! Wrote the Html page ✔️')

    })
}

module.exports = { generateHtml }