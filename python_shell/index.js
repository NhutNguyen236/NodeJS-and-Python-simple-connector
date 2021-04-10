var express = require('express')
var app = express()

app.get('/:firstname/:lastname', (req, res) => {
    var { PythonShell } = require('python-shell')
    
    var option = {
        args: [req.params.firstname, req.params.lastname]
    }

    PythonShell.run('processor.py', option, (err, data) => {
        if(err){
            res.send(err)
        }

        else{
            res.send(data.toString())
        }
    })
})

app.listen(8080, () => {
    console.log('http://localhost:8080')
})