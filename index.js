const fs = require('fs');

const content = `
<div>
    <h1>Hello World</h1>
    <p>This is Indra</p>
</div>
`
const fileName = 'index.html'
// const filePath = '/index.html'


fs.writeFile(fileName, content, {'flag': 'a+'} , err => {
    if (err) {
        console.log(`error occured => ${err}`)
        return;
    }
})


// const indexHTML = fs.readFileSync(filePath)

// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200);
//     res.write(indexHTML);
//     res.end();
// }).listen(5000, () => {
//     console.log(`listening on port 5000...`)
// });



const http = require('http');

http.createServer((request, response) => {
    fs.readFile(fileName, (err, data) => {
            if (err) {
                console.log('error occured => ' + err);
                return;
            }
            response.writeHead(200, {'content-type': 'text/html'});
            response.write(data)
            response.end();
    })
}).listen(5000, () => {
    console.log('listening on port 5000...')
});
