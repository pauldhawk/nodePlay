const { get, has, partition, groupBy } = require('lodash');
const modules = require('./data/mock-raw-modules');
const my_id = 1028;
const [questions, mods] = partition(modules, x => x.topic_id !== null)

const lookupParents = (next_id, parents = []) => {
  if (next_id === null || next_id === undefined) { return parents }
  parents.push(next_id);
  return lookupParents(get(mods_dict, `${next_id}.parent_id`, null), parents)
}

const mods_formated = mods.map(x => {
  const { id, name, parent_id } = x;
  return {
    id,
    name,
    parent_id,
    type: 'module',
    owners: [],
    children: [],
    parents: [],
    progress: {
      overall: { answered: 0, questions: 0, },
      mine: { answered: 0, questions: 0, },
    },
  }
});

const mods_dict = mods_formated.reduce((result, x) => {
  result[x.id] = x;
  return result;
}, {});

const questions_formated = questions.map(x => {
  const name = x.topic_name;
  const parents = lookupParents(x.parent_id);
  const has_owner = x.owner_id !== null;
  delete x.topic_name;
  return {
    ...x,
    name,
    parents,
    type: 'question',
    has_owner,
    is_answered: x.score !== null,
    is_mine: has_owner !== false && x.owner_id === my_id,
  }
});


console.log(modules)
//console.log(ps)
