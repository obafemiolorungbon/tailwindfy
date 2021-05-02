const shell = require('shelljs');
const { askQuestions, InitialBuild } = require("./lib/askDetails");
const setUpConfig = require("./lib/setUpConfig")

const argv = process.argv[2]
console.log(argv)
if (argv =="large"|| argv == "l"){
  console.log(`Now running from ${process.cwd()}`)
  shell.exec("cd ./node_modules/tailwindpurgeyarn");
  shell.exec("run devBuild");
  return
}
const filename = process.argv[4];
setUpConfig(filename);
shell.exec("yarn run compile")

purgeFile();
module.exports = { purgeFile };
