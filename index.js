const sass = require('node-sass');
const sassExtract = require('sass-extract');

sass_file_path = './data/custom.scss';
const rendered = sass.renderSync({
  file: sass_file_path,
});

sassExtract.extract(rendered, {
  file: sass_file_path,
})
.then(vars => {
  const global_vars = vars.global;
  const sass_keys = Object.keys(global_vars)
  const colors = sass_keys.filter(x => global_vars[x].type === 'SassColor')
    .map(y => {
      const val = global_vars[y];
      return {
        name: y,
        value: val.value.hex
      }
    })
  console.log('colors', colors)
  //console.log(global_vars['$gray-100'].type === 'SassColor');

});

// ./data/custom.scss
//  only.types = ['SassNumber']
