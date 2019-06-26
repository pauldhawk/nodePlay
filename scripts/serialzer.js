const pulse = require('./data/pulse');
const { get: _get } = require('lodash');

// console.log(pulse)
const resovler = [
  {
    key: 'benchmark',
    value: {
      score_count: 0,
      score_sum: 0,
      score_max: 0,
      score_mean: 0,
      score_percent: 0,
    },
  },
  {
    key: 'children',
    value: [],
  },
  {
    key: 'created',
    value: (x) => _get(x, 'created'),
  },
  {
    key: 'created_by',
    value: (x) => _get(x, 'created_by'),
  },
  {
    key: 'has_owner',
    value: (x) => x.owner_id === null ? 0 : 1,
  },
  {
    key: 'is_checked',
    value: (x) => x.is_checked || 0,
  },
  {
    key: 'is_enabled',
    value: (x) => x.is_enabled || 0,
  },
  {
    key: 'is_mine',
    value: (x) => x.owner_id === x.user_id ? 1 : 0,
  },
  {
    key: 'is_owner',
    value: (x) => 0,
  },
  {
    key: 'is_scored',
    value: (x) => x.score === null ? 0 : 1,
  },
  {
    key: 'modified',
    value: (x) => _get(x, 'modified'),
  },
  {
    key: 'modified_by',
    value: (x) => _get(x, 'modified_by'),
  },
  {
    key: 'name',
    value: (x) => _get(x, 'topic_name') || _get(x, 'name'),
  },
  {
    key: 'owner_id',
    value: (x) => _get(x, 'owner_id'),
  },
  {
    key: 'owner_info',
    value: (x) => ({
      avatar: x.avatar,
      fullname: `${x.firstname} ${x.lastname}`,
      title: x.title
    }),
  },
  {
    key: 'parent_id',
    value: (x) => _get(x, 'parent_id'),
  },
  {
    key: 'parents',
    value: [],
  },
  {
    key: 'questions_progress',
    value: { answered: 0, total: 0, },
  },
  {
    key: 'score',
    value: (x) => _get(x, 'score'),
  },
  {
    key: 'scoring',
    value: {
      score_count: 0,
      score_sum: 0,
      score_max: 0,
      score_mean: 0,
      score_percent: 0,
    },
  },
  {
    key: 'scored_by',
    value: (x) => _get(x, 'scored_by'),
  },
  {
    key: 'scored_date',
    value: (x) => _get(x, 'scored_date'),
  },
  {
    key: 'topic_id',
    value: (x) => _get(x, 'topic_id'),
  },
  {
    key: 'type',
    value: (x) => x.topic_id === null ? 'module' : 'question',
  },
  {
    key: 'user',
    value: (x) => ({
      user_id: x.user_id,
      avatar: x.avatar,
      department: x.dept,
      firstname: x.firstname,
      lastname: x.lastname,
      org_id: x.org,
      title: x.title,
    }),
  },
  {
    key: 'url',
    value: (url) => 'todo' //_buildPulseUrl(x, org_id),
  },

]
const a = {
  key: '',
  value: (x) => x,
};


const serialized_pulse = pulse.map(x => {
  return resovler.reduce((r, y) => {
    r[y.key]= typeof y.value === 'function'
      ? y.value(x)
      : y.value;
    return r;
  }, {})
});



console.log(serialized_pulse)
