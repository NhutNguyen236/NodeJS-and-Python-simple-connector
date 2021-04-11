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
    
    // This line will encode your output result from python to standard utf8
    // which means it will be type string
    process.stdout.setEncoding('utf8')

    process.stdout.on('data', (data) => {
        // this will show you 
        console.log(typeof(data))

        console.log(data.toString())

        // Change to res.render
        res.send(data.toString())
    })
})

app.listen(8080, () => {
    console.log('http://localhost:8080')
})