const {access,constants} =require("fs");
const checkFileExist = (filename) =>{
    return new Promise((resolve,reject)=>{
    access(filename, constants.F_OK, (err) => {
       if (err) {
         reject("Wrong file name or file does not exist")
         return;
       }
       console.log(`access to ${filename} exists`);
       resolve(true);
       return;
     });
})
}
module.exports = checkFileExist