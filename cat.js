const fs = require ("fs");
// const bash = require("./bash.js")

module.exports = function (fileName) {

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        console.log(data)

    })


  process.stdout.write("\n");
};
