const {src,dest} = require("gulp");
const inject = require("gulp-inject-string");
const fs = require("fs");

const getValues = ()=>{
  try{
    let config = fs.readFileSync("condore.config.json");
    let {filename,destination,directory,preference} = JSON.parse(config);
    console.log(filename,destination,directory,preference)
    return {filename,destination}
    }catch(err){
      console.log(`An error occured while trying to open the config file,make sure you have created the config file by running [command] 
      `)
      return
  
  }
}

const {filename,destination} = getValues()

console.log(filename,destination);
const createConfig =()=>{
        return src("./tailwind.config.cjs")
          .pipe(inject.after("content:[",`"${filename}"`))
          .pipe(dest(`${destination}`));
}
exports.compile = createConfig;


