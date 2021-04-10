var express = require('express')
var app = express()

app.get('/:firstname/:lastname', (req, res) => {

    var spawn = require('child_process').spawn
    
    var firstname = req.params.firstname
    var lastname = req.params.lastname

    // This method here helps us spawn child process asynchronously
    var process = spawn('python', [
        './processor.py',
        firstname,
        lastname
    ])

    process.stdout.on('data', (data) => {
        console.log(data.toString())

        res.send(data.toString())
    })
})

app.listen(8080, () => {
    console.log('http://localhost:8080')
})