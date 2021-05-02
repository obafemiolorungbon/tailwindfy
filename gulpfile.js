const {src,dest} = require("gulp");
const inject = require("gulp-inject-string");
const fs = require("fs");
const path = require("path");
const rename = require("gulp-rename");

const getValues = ()=>{
  try{
    let config = fs.readFileSync("condore.config.json");
    let {filename} = JSON.parse(config);
    console.log(filename)
    return {filename}
    }catch(err){
      console.log(`An error occured while trying to open the config file,make sure you have created the config file by running [command] 
      `)
      return
  
  }
}

const {filename} = getValues()

console.log(path.join(__dirname + filename));
const createConfig =()=>{
        return src("./tailwind.config.cjs")
          .pipe(inject.after("content:[",`"${filename}"`))
          .pipe(rename("./miniTailwind.config.cjs"))
          .pipe(dest(`./`));
}

exports.compile = createConfig;


