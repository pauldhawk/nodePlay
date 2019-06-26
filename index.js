//import { pathToFileURL } from "url";

let var1 = { name: 'paul'}
let var2 = { job: 'dev'};

var1.job = var2.job;
console.log(var1)








// const sassExtract = require('sass-extract');

// sassExtract.render({
//   file: './custom.scss',
// })
// .then(rendered => {
//   const gVars = rendered.vars.global;

//   const colorKeys = Object.keys(gVars).filter(x => {
//     const val = gVars[x];
//     return val.type === 'SassColor';
//   }).map(y => {
//     const {type, value} = gVars[y];
//     return {
//       key: y,
//       type,
//       value
//     }
//   })
//   console.log(colorKeys);
// });
