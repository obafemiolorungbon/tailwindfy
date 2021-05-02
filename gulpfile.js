const {src,dest} = require("gulp");
const inject = require("gulp-inject-string");
const fs = require("fs");
const path = require("path");
const rename = require("gulp-rename");

const getValues = ()=>{
  try{
    let config = fs.readFileSync("condore.config.json");
    console.log("config file detected, now reading ......")
    let filename = JSON.parse(config);
    console.log("Config file read succesfully, now updating tailwind config")
    return filename
    }catch(err){
      console.log(`An error occured while trying to open the config file,make sure you have created the config file by running [command] 
      `)
      return
  
  }
}
const filename = getValues()
console.log(path.join(__dirname + filename));
const createConfig =()=>{
        let enabled = true
        let toWrite = `purge:{
                              enabled : ${enabled}, 
                              content : "${path.join(
                                process.cwd(),
                                filename
                              )}"},
                      `; 
        return src("./tailwind.config.js")
          .pipe(inject.after("module.exports = {",toWrite))
          .pipe(rename("./tailwind.config.js"))
          .pipe(dest(`./`));
}

exports.compile = createConfig;


