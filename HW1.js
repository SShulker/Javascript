function sumOfSquareAreas(a, b) {
    return (a*a) + (b*b);
}

var squareSum1 = sumOfSquareAreas(5, 10)
var squareSum2 = sumOfSquareAreas(10, 20)
var squareSum3 = sumOfSquareAreas(20, 40)

console.log(squareSum1);
console.log(squareSum2);
console.log(squareSum3);


function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    return (homeworkAvg*.10) + (quizAvg*.15) + (examAvg*.75);
}

var gradeCalc1 = gradeCalculator(100, 90, 80)
var gradeCalc2 = gradeCalculator(90, 80, 100)
var gradeCalc3 = gradeCalculator(80, 100, 90)

console.log(gradeCalc1);
console.log(gradeCalc2);
console.log(gradeCalc3);