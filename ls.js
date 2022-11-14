const fs = require("fs");

module.exports = function () {
  // The stdin 'data' event fires after a user types in a line
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write("\n");
      process.stdout.write(files.join("\n"));
      process.stdout.write("\n");
      process.stdout.write("\nprompt > ");
    }
  });
};
