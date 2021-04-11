var express = require('express')
var app = express()

app.set('view engine', 'jade')

app.get('/:firstname/:lastname', (req, res) => {
    var { PythonShell } = require('python-shell')
    
    var option = {
        mode: 'text',
        pythonOptions: ['-u'],
        args: [req.params.firstname, req.params.lastname]
    }

    PythonShell.run('processor.py', option, (err, data) => {
        if(err){
            res.send(err)
        }

        else{
            // Way to return each line of data from python is to json stringify then parse it 
            var json_data = JSON.stringify(data)
            var json_parse = JSON.parse(json_data)

            console.log(json_parse)

            // now the return type that you need is json so you can freely interact with it
            console.log("firstname is " + json_parse[0])
            console.log("lastname is " + json_parse[1])

            // Turn to res.render()
            res.render('index', {firstname: json_parse[0], lastname: json_parse[1], f_code: json_parse[2], l_code: json_parse[3]})
        }
    })
})

app.listen(8080, () => {
    console.log('http://localhost:8080')
})