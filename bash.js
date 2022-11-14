const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const dataIn = data.toString().trim().split(" ");
    const cmd = dataIn[0];
    const fileName = dataIn[1];
    if (cmd === 'pwd'){
        pwd();
    }
    else if(cmd === 'ls'){
        ls();
    }
    else if(cmd === 'cat'){
        cat(fileName);
  }


  else{
  process.stdout.write(`Command not found: ${cmd}`);
  process.stdout.write('\n prompt > ');
}

})


