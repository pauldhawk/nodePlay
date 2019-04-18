const { get, has, partition } = require('lodash');
const modules_res = require('./data/mock_modules');

console.log(modules_res)

modules_res.forEach(x => {
  console.log('\t', x.name)
  x.submodules.forEach(y => {
    console.log('\t\t', y.name)
    const qs = y.questions.reduce((result, z) => `${result} ${z.topic_id},`, '')
    console.log('\t\t\t', qs);
  })
})
