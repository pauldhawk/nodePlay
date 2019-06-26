var fs = require('fs');

const readFile = (path) => {
  fs.readFile('DATA', 'utf8', function(err, contents) {
    console.log(contents);
  });
}

const writeFile = ({data, path, filename}) => { return null; }

module.exports = {
  readFile,
  writeFile,
}
