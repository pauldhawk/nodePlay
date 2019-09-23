const Promise = require('bluebird');
const fs = Promise.promisifyAll(require("fs"));


const readFile = (dpath) => {
  return fs.readFileAsync(dpath, "utf8");
}

const writeFile = (({data, filename}) => {
  return fs.writeFileAsync(filename, data)

});

module.exports = {
  readFile,
  writeFile,
}

