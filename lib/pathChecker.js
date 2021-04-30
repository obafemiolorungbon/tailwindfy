const path = require("path");
const {access,constants} =require("fs");
const checkFileExist = (filename) =>{
    return new Promise((resolve,reject)=>{
    access(
      path.join(process.cwd(), "/", filename),
      constants.F_OK,
      (err) => {
        if (err) {
          let a = path.join(process.cwd(), "/", filename);
          a;
          console.log(a);
          reject("Wrong file name or file does not exist");
          return;
        }
        resolve(true);
        return;
      }
    );
})
}
module.exports = checkFileExist