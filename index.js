const { askQuestions,InitialBuild } = require("./lib/askDetails");
const fs = require("fs");

const purgeFile = async () => {
  try {
    let replies = await askQuestions();
    let preference = await InitialBuild()
    let config = {...replies,...preference}
    fs.writeFileSync("condore.config.json", JSON.stringify(config));
    console.log(config)
  } catch (err) {
    console.log(err);
  }
};
purgeFile();
module.exports = { purgeFile };