const inquirer = require("inquirer");
const checkExist = require("./pathChecker.js");

module.exports = {
    
askQuestions:()=>{
    const questions = [
        {
            name:"filename",
            type:"input",
            message:"Kindly enter the name of the file to purge:\n",
            validate:checkExist
        },
        {
            name:"destination",
            type:"input",
            message:"Kindly enter the folder you want the final css",
            validate:checkExist
        }
    ];
    return inquirer.prompt(questions);
}

}