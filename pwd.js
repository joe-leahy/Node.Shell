module.exports = function () {
  // The stdin 'data' event fires after a user types in a line
  process.stdout.write("\n");
  process.stdout.write(process.cwd());
  process.stdout.write("\n");
  process.stdout.write("\nprompt > ");
};
