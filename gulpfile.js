const {src,dest} = require("gulp");
const inject = require("gulp-inject-string");
const fs = require("fs");
const path = require("path");

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

console.log(path.join(__dirname + filename),path.join(__dirname + destination));
const createConfig =()=>{
        return src("./tailwind.config.cjs")
          .pipe(inject.after("content:[",`"${path.join(__dirname + filename)}"`))
          .pipe(dest(`${path.join(__dirname + destination)}`));
}

// const editConfig = ()=>{
//   return src("./package.json")
//     .pipe(inject.after("the file url for dumping files"))
//     .pipe(dest("file to drop the file"))
// }
exports.compile = createConfig;


