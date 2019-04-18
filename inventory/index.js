const pulse_ontology = [
  {
    name: 'Acquisition & Growth',
    children: [
      {
        name: 'Discovery & Navigation',
        children: [
          72,
          1392,
          1393,
          367,
        ]
      },
      {
        name: 'Search & Transparency',
        children: [
          360,
          1394,
          361,
          362,
        ]
      },
      {
        name: 'Scheduling',
        children: [
          1395,
          486,
          1397,
          103,
        ]
      },
    ]
  },
  {
    name: 'Experience & Engagement',
    children: [
      {
        name: 'Seamless Encounter',
        children: [
          1417,
          487,
          131,
          244,
          1453,
          368,
          127,
          1414,
          213,
        ]
      },
      {
        name: 'Remote & Personalized Care',
        children: [
          165,
          370,
          1399,
          1400,
          97,
          1401,
          185,
          108,
          46,
          166,
          1415,
        ]
      },
      {
        name: 'Education & Communication',
        children: [
          1449,
          1357,
          1451,
          1611,
          243,
          120,
        ]
      },
      {
        name: 'Billing & Payment',
        children: [
          77,
          395,
          1422,
          1423,
        ]
      },
    ]
  },
  {
    name: 'Enduring Relationships',
    children: [
      {
        name: 'Life Phase Specific Care',
        children: [
          71,
          31,
          98,
          155,
        ]
      },
      {
        name: 'Service Excellence',
        children: [
          1427,
          1429,
          479,
        ]
      },
      {
        name: 'Consumer Insights',
        children: [
          374,
          1385,
          1386,
          1432,
          362,
          1438,
          1439,
          498,
        ]
      },
      {
        name: 'Personalized Wellness',
        children: [
          1389,
          1435,
          1437,
          1434,
          1433,
          1387,
          1388,
          1436,
          141,
        ]
      },
    ]
  },
]
console.log(pulse_ontology[0])
// pulse_ontology.forEach((branch) => {
//   // console.log('branch')
//   // if(branch.name) {
//     console.log('branch.name',branch.name )
//  // }
// })

// const setPulseBranch = async (db, branch) => {
//   let parent_id;
//   if(branch.name) {
//     const sql = `INSERT INTO pulse_modules (name, created_by, modified_by) VALUES ('${branch.name}', 1, 1)`
//     let branch_res = await db.runSql(sql)
//     parent_id = branch_res.insertId
//   }

//   await branch.children.forEach(async (child) => {
//     const res = await typeof child === 'object'
//       ? await setPulseBranch(db, child)
//       : await test(db, child, parent_id)
//     console.log(res)
//   })
//   console.dir('------------------------------------------------')
// }
