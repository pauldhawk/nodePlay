module.exports = {
  topic: {
    name: "xCommunications",
    type: 1,
    description: "test",
    is_public: 1,
  },
  base: {
    hs: {
      name: `Gryffindor`, 
      status: 4,
      test: 1,
      type: 1,
      dashboard_vis: 3,
    },
    user: {
      owner: {
        email: `Minerva.McGonagall@aviahealthinnovation.com`,
        firstname: 'Minerva',
        lastname: 'McGonagall',
        status: 3,
        test: 1,
        org: null,
      },
      memeber: {}
    },
    priority: {
      org_id: null,
      topic_ids: [],
      name: `Patronuses`,
      is_public: 1,
      is_archived: 0,
    },
  },
  noComp: {
    hs: {
      name: `Ravenclaw`, // Cho Chang house
      status: 4,
      test: 1,
      type: 1,
      dashboard_vis: 3,
    },
    user: {
      owner: {
        email: `Filius.Flitwick@aviahealthinnovation.com`,
        firstname: 'Filius',
        lastname: 'Flitwick',
        status: 3,
        test: 1,
        org: null,
      },
      memeber: {}
    },
    priority: {
      org_id: null,
      topic_ids: [],
      name: `Owls`,
      is_public: 1,
      is_archived: 0,
    },
  },  
  comp: {
    hs: {
      name: `Slytherin`, 
      status: 4,
      test: 1,
      type: 1,
      dashboard_vis: 3,
    },
    user: {
      owner: {
        email: `Severus.Snape@aviahealthinnovation.com`,
        firstname: 'Severus',
        lastname: 'Snape',
        status: 3,
        test: 1,
        org: null,
      },
      memeber: {}
    },
    priority: {
      org_id: null,
      topic_ids: [],
      name: `Dark magic communication`,
      is_public: 1,
      is_archived: 0,
    },
  },
  notPublic: {
    hs: {
      name: `Hufflepuff`, 
      status: 4,
      test: 1,
      type: 1,
      dashboard_vis: 3,
    },
    user: {
      owner: {
        email: `Pomona.Sprout@aviahealthinnovation.com`,
        firstname: 'Pomona',
        lastname: 'Sprout',
        status: 3,
        test: 1,
        org: null,
      },
      memeber: {}
    },
    priority: {
      org_id: null,
      topic_ids: [],
      name: `Dumbledore's Army coin`,
      is_public: 0,
      is_archived: 0,
    },
  },
}
