const shell = require('shelljs');
const { askQuestions, InitialBuild } = require("./lib/askDetails");
const setUpConfig = require("./lib/setUpConfig")


if (argv =="large"|| argv == "l"){
  const argv = process.argv[3];
  shell.exec("yarn run devBuild");
  return
}
const filename = process.argv[4];
setUpConfig(filename);
shell.exec("yarn run compile")

purgeFile();
module.exports = { purgeFile };
