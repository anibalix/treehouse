var grades = [100, 99, 69, 74, 88, 64, 89, 100, 85];
var total = 0;
var numOfGrades = grades.length;

for (var i = 0; i < grades.length; i++) {
    total = grades[i] += total;
    var average = total / numOfGrades;
}
console.log(average.toFixed(2));