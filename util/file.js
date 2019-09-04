const Promise = require('bluebird');
const fs = Promise.promisifyAll(require("fs"));


const readFile = (dpath) => {
  return fs.readFileAsync(dpath, "utf8");
}

const writeFile = ({data, path, filename}) => { return null; }

module.exports = {
  readFile,
  writeFile,
}

