//4. Градови подредени според групната висина на просек на студентите од нив.


const { studenti } = require("./zadaca");


const gruoupedByCity = {}

for (let students of studenti){
    if(gruoupedByCity[students.grad]){
        gruoupedByCity[students.grad].push(students);
    }else {
        gruoupedByCity[students.grad]= [students];
    }
}
const groupedByAverageGrade = [];

for (let city in gruoupedByCity){
    const average = gruoupedByCity[city].reduce((sum, student)=> sum + student.prosek, 0) / gruoupedByCity[city].length;
    groupedByAverageGrade.push({city , prosek:average});
}
console.log(groupedByAverageGrade.sort((a ,b)=> b.prosek - a.prosek));