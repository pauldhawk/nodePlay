const moment = require('moment');
const faker = require('faker');

const CHANCE_DOWN = 10;
const CHANCE_UP = 100 - 25;
const MAX_SCORE = 5;
const MIN_SCORE = 0

const pulse_dates = [
  {
    after: moment("2019-01-01T00:00:00.000Z").toISOString(),
    before: moment("2019-09-23T00:00:00.000Z").toISOString(),
  },
  {
    after: moment("2019-01-01T00:00:00.000Z").toISOString(),
    before: moment("2019-02-28T00:00:00.000Z").toISOString(),
  },
  {
    after: moment("2019-03-01T00:00:00.000Z").toISOString(),
    before: moment("2019-05-30T00:00:00.000Z").toISOString(),
  },
  {
    after: moment("2019-06-01T00:00:00.000Z").toISOString(),
    before: moment().toISOString(),
  },
];

const scores = [...Array(10).keys()]
  .map(x => faker.random.number(5, 0));




//const ramdom_date = faker.date.between(after.toISOString(), before.toISOString()); // Rowan Nikolaus
// const random_num = faker.random.number(100, 0);
// let new_num = 4;


const newData = scores.map(current_number => {
  const random_num = faker.random.number(100, 0);
  let new_num;

  if (random_num <= CHANCE_DOWN) {
    new_num = Math.max(current_number - 1 , MIN_SCORE)
    console.log('going down')
  } else if (random_num >= CHANCE_UP) {
    new_num = Math.min(current_number + 1 , MAX_SCORE)
    console.log('going up')
  } else {
    console.log('staying pat')
    new_num = current_number;
  }
  console.log('new num = ', new_num)
  return new_num
})




