const { get, has, partition, groupBy } = require('lodash');
const modules = require('./data/mock-raw-modules');

const [questions, mods] = partition(modules, x => x.topic_id !== null)

const mods_formated = mods.map(x => {
  const { id, name, parent_id } = x;
  return {
    id,
    name,
    parent_id,
    owners: [],
  }
});

const mods_dict = mods_formated.reduce((result, x) => {
  result[x.id] = x;
  return result;
}, {});
const lookupParents = (next_id, parents = []) => {
  if (next_id === null || next_id === undefined) { return parents }

  parents.push(next_id);
  const next = get(mods_dict, `${next_id}.parent_id`, null);
  console.log('next ', next)
  return lookupParents(get(mods_dict, `${next_id}.parent_id`, null), parents)
}
const questions_formated = questions.map(x => {
  const name = x.topic_name;
  const parents = lookupParents(x.parent_id)
  delete x.topic_name;
  return {
    ...x,
    score: x.score || 0,
    name,
    parents,
  }
});


console.log(questions_formated)
//console.log(ps)
