//5. Вкупен просек на студенти чиешто име завршува на буквата а, и на сите останати

const { studenti } = require("./zadaca");

const studentsWithA = studenti.filter(student => student.ime.endsWith("a"))
.reduce((acc, curr)=> acc + curr.prosek, 0) / studenti.filter(student => student.ime.endsWith("a")).length;


const otherStudents = studenti.filter(student => !student.ime.endsWith("a"))
.reduce((acc, curr) => acc + curr.prosek, 0) / studenti.filter(student => !student.ime.endsWith("a")).length;

console.log(studentsWithA);
console.log(otherStudents);
