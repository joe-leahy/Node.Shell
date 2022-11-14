const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const dataIn = data.toString().trim().split(" ");
    const cmd = dataIn[0];
    const fileName = dataIn[1];

    switch (cmd) {
        case 'pwd': pwd();
            break
        case 'ls': ls();
            break
        case 'cat': cat(fileName);
            break
        default:
            process.stdout.write(`Command not found: ${cmd}`),
            process.stdout.write('\n prompt > ');
    }

})


