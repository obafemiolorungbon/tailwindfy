const inquirer = require("inquirer");
const checkExist = require("./pathChecker.js");
const checkPreference = require("./validateInitial")

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
},
InitialBuild : ()=>{
        const questions = [
            {
                name:"directory",
                type:"input",
                message:"What folder will you like your development css to be in:\n",
                validate:checkExist
            },
            {
                name:"preference",
                type:"input",
                message:"Enter b for the larger css file (~8MB) and s for the smaller file (~3MB):\n",
                validate:checkPreference
            }
    
        ];
        return inquirer.prompt(questions);
}

}