const {src,dest} = require("gulp");
const inject = require("gulp-inject-string");
const fs = require("fs");
let config = fs.readFileSync("condore.config.json","utf8");
const {filename,destination} = JSON.parse(config);
console.log(filename,destination);
const createConfig =()=>{
      return src("./tailwind.config.cjs")
        .pipe(inject.after("content:[",`"${filename}"`))
        .pipe(dest(`${destination}`));
}

exports.bebe = createConfig;


