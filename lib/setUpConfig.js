const fs = require("fs");

const purgeFile = async (filename) => {
  try {
    let config = { file: filename };
    fs.writeFileSync("./node_modules/tailwindfy/condore.config.json", JSON.stringify(config));
  } catch (err) {
    console.log(err);
  }
};

module.exports = purgeFile