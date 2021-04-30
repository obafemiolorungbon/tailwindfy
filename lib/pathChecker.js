//checks if the file path exist for the following:
    //the file path to create initial build
    //the file path to create the final build
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