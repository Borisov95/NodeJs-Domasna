//3. Првите 3 студенти кои имаат имиња од 5 карактери(букви), подредени по просек.

const { studenti } = require("./zadaca");

const students = studenti.filter(student => student.ime.length === 5)
.sort((a, b) => b.prosek - a.prosek)
.slice(0, 3);

console.log(students); 