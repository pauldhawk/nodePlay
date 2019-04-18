const classmates = [
  {
    name: 'wesley', gender: 'boy', },
  { name: 'lieber', gender: 'boy', },
  { name: 'graeme', gender: 'boy', },
  { name: 'quinn', gender: 'girl', },
  { name: 'jane', gender: 'girl', },
];

const theBoys = classmates.filter(x => x.gender === 'boy')

const theGirls = classmates.filter(x => x.gender === 'girl')




const wesley = ' from Wesley Hawk '
const num = 10+99
const result = [1,2,3,4,5,6,7].reduce((r,s) => r+s, 0)
console.log('hello world' + wesley + result)
console.log('the Boys are ', theBoys.map(x => x.name))

console.log('the all are ', theGirls.map(x => x.name))
console.log('the all are ', classmates.map(x => x.name))



