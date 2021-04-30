const {askQuestions} = require("./lib/askDetails");
const fs = require("fs");

const purgeFile = async ()=>{
    try{
        let replies = await askQuestions()
        fs.writeFileSync("condore.config.json", JSON.stringify(replies))
    }catch(err){
        console.log(err)

    }
}
purgeFile()
module.exports={purgeFile
}
// try{
//     await checkExist(filename)
//     acceptFilename(filename);
// }catch(err){
//     console.log(`Can't access file because file does not exist`)
    
// }
    


//clear();
// console.log(
//   chalk.green(figlet.textSync("", { horizontalLayout: "full" }))
// );
//to do

//the modolde that takes care of the file finding

//a module that spits out the initial css file into a path specified or root folder
//in styles folder if no path is specified:

    //a module that creates this path, checks if it exist first

    //a module that compiles the first big build

//a module that accepts the file path to be purged or an array of file paths

// having parsed this file path or array of file paths, passes them to the purger

//the module that actually purges and then spit out the minified build

//