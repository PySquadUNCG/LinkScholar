export default class API {
    constructor({ options }) {
        this.options = options;
    }

    async post({ path, method, params, auth }) {
        const express = require('express')
        const { spawn } = require('child_process');
        const app = express()
        const port = 3000

        app.get('/', (req, res) => {
            let dat = [];

            const python = spawn('python', [path, method, params, auth]);

            // collect data from script
            python.stdout.on('data', function (data) {
                console.log('Pipe data from python script ...');
                dat = data.toString();
            });

            // in close event we are sure that stream from child process is closed
            python.on('close', (code) => {
                console.log(`child process close all stdio with code ${code}`);

                // send data to browser
                res.send(dat.join(""));
            });

        })
        app.listen(port, () => console.log(`Example app listening on port 
           ${port}!`))
    }
}