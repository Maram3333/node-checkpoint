const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
err?console.log(err):console.log(data)
});
