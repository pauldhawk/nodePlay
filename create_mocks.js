const faker = require('faker');
const Chance = require('chance');
const chance = new Chance();


function files(num = 1) {
  return Array(num).fill().map(x => {
    return {
      id: chance.integer({
        min: 1000,
        max: 5000
      }),
      name: faker.company.catchPhrase(),
      description: faker.company.bs(),
      author: null,
      published_date: null,
      is_public: 1,
      link: faker.image.imageUrl(),
      file_name: faker.system.fileName(),
      user: chance.integer({
        min: 1000,
        max: 5000
      }),
      last_accessed: "2019-01-29T15:36:58.000Z",
      modified: "2019-01-29T21:37:09.000Z",
      created: "2019-01-29T15:36:58.000Z",
      user_obj: {
        id: chance.integer({
          min: 1000,
          max: 5000
        }),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        avatar: faker.internet.avatar(),
      },
      source_obj: {
        source: faker.internet.domainName(),
        logo_link: faker.internet.avatar(),
      },
      type_obj: null,
      groups: [],
      rd: {}
    };
  });
}

function createToolbox() {
  return ["Interest", "Evaluating", "Piloting"].map(x => {
    return {
      name: x,
      files: files(chance.integer({ min: 4, max: 9 })),
    };
  })

}

function stages() {

const stages = [ "1. Interest",
    "2.1 Evaluating: Considering",
    "2.2 Evaluating: Committed",
    "2.3 Evaluating: Contracted",
    "3. Piloting",
    "4. Adopted"
  ];

  return stages.map(x => {
    const num_items = chance.integer({ min: 3, max: 10 });
    const items_complete = chance.integer({ min: 0, max: num_items });
    const items = Array(num_items).fill().map(x => {
      return {
        name: faker.company.bs(),
        is_complete: chance.integer({ min: 0, max: 1 }),
      }
    });

    return {
      name: x,
      step_num_complete: items_complete,
      step_total: num_items,
      is_current: 0,
      is_complete: 0,
      items,
    }
  })
}

module.exports = {
  files,
  stages,
  createToolbox,
}
