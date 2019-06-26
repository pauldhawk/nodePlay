const { get, has, partition, groupBy, padStart } = require('lodash');
const modules = require('./data/mock-raw-modules');
// const flat_mods = require('./data/mock_modules')
const rt = {topic_id: "360"};

const printall = (m, depth = 0) => {
  if(true || m.is_active_path === true) {
    console.log(padStart('a', depth, '\t'), m.name);
    if (m.questions && m.questions.length > 0) {
      m.questions.forEach(x => {
        printall(x, depth+1)
      });
    }
  }
    if (m.modules && m.modules.length > 0) {
      m.modules.forEach(x => {
        printall(x, depth+1)
      });
    }
}


const getActiveItem = (mods, rt) => {
  let parents;
  return mods.reduce((result, mod, index) => {
    if (rt.module_id && rt.module_id == mod.id) {
      result.active_item = mod;
      result.active_index = index;
      result.active_path = mod.parents.reduce((r, y) => {
        r[y] = null;
        return r;
      }, {});
    }

    if (rt.topic_id && rt.topic_id == mod.topic_id) {
      result.active_item = mod;
      result.active_index = index;
      result.active_path = mod.parents.reduce((r, y) => {
        r[y] = null;
        return r;
      }, {});
    }
    return result;
  }, { active_item: {}, active_path: {}, active_index: 0});
}

const setModules = (m, ) => {

}
const printMods = (m, parents, active_index) => {
  m.forEach(x => {
    if(x.is_active_path === true) {
      console.log(padStart('', x.depth, '\t'), x.name)
    }
  })
}



const { active_item, active_path, active_index} = getActiveItem(modules, route);



















modules.forEach(x => {
  if(x.is_active_path === true) {
    console.log(padStart('', x.depth, '\t'), x.name)
  }
})

// modules.forEach(x => {
//   printall(x);
// })
