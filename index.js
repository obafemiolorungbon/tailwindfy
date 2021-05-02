const shell = require('shelljs');
const setUpConfig = require("./lib/setUpConfig")

const argv = process.argv[2]
console.log(argv)
if (argv =="large"|| argv == "l"){
  shell.exec("cd ./node_modules/tailwindfy && yarn run devBuild ");
  return
}
const filename = process.argv[3];
setUpConfig(filename);
shell.exec(" cd ./node_modules/tailwindpurge && yarn run compile && yarn run miniBuild")

