const bcal_path = './bell_cal.json';
const { readFile,writeFile } = require('./util/file');

const re = /^[blaze]+ day/i;
readFile(bcal_path)
.then(x => {
  const cal = JSON.parse(x).vcalendar[0].vevent
    .filter(d => re.test(d.summary))
    .map(d => {
      const { summary: old_summary } = d;
      let summary = 'unknown day';
      switch(old_summary) {
        case 'B Day':
            d.summary = `Wes: Gym, Miles: Library`
        break;
        case 'L Day':
            d.summary = `Wes: Library, Miles: Art`
        break;
        case 'A Day':
            d.summary = `Wes: Gym, Miles: Gym`
        break;
        case 'Z Day':
            d.summary = `Wes: Art, Miles: Gym`
        break;
        case 'E Day':
            d.summary = `Wes: Music, Miles: Music`
        break;
        default:
          d.summary = 'unknown day';
        break;
      }
      return d;
  })
  return cal
}).then(x => {
  return writeFile({ data: x, filename: 'result.json'})
  // x.forEach(b => {
  //   console.log(b.summary)
  // });
}).then(x => {console.log(x)
});
  //writeFile({})

// });

//     {
//     console.log(`${d.summary}: `,re.test(d.summary));
//   })
// })

// fsp.readFile(bcal_path, { encoding: 'utf8' })
// .then(r => console.log(r.length))

// const days = ['B Day', 'L Day', 'A Day', 'Z Day', 'E Day','Memorial Day-No School' ]

// const re = /^[blaze]+ day/i;

// days.forEach(d => {
//    console.log(re.test(d));
// });
