const inquirer = require("inquirer");
const checkFileExist = require("./pathChecker");
// const {checkPreference} = require("./validateInitial"); 

module.exports = {
    initialBuild:()=>{
        const questions = [
            {
                name:"firstBuild",
                type:"input",
                message:"Kindly enter the path where you want your initial large file",
                validate:checkFileExist
            }
        ];
        return inquirer.prompt(questions)
    }


}
