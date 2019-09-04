const printall = (m, depth = 0) => {
  console.log(padStart('', depth, '\t'), padStart(m.name, 6, '_-'));
  if (m.questions && m.questions.length > 0) {
    m.questions.forEach(x => {
      printall(x, depth+1)
    });
  }
  if (m.modules && m.modules.length > 0) {
    m.modules.forEach(x => {
      printall(x, depth+1)
    });
  }
}
modules.forEach(x => {
  printall(x);
})
