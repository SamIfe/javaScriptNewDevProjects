function scoresGreaterOrEqual(testScores) {
let result = testScores.filter((num) => num >=70)
return result;
};

function addMark(mark){
    let markIncrement = mark.map((num)=> num + 5);
    return markIncrement;
}

function squareOfNumbers(numberList){
    let squaredNumber = numberList.map((number)=> number * number);
    return squaredNumber;
}

const expensesSummation = (expenseList)=> {
    let total = 0;
    for(let element in expenseList){
        total += expenseList[element];
    }
    return total;
}

const afternoonClass = (timelist)=>{
     let time = timelist.filter((list) => list.includes("PM"));

    return time;
}

function letterGrade(grade) {
    let gradding = [];
    grade.map((num)=>{
        if(num >= 90 && num <=100){
        gradding.push('A');
    } else if(num >= 80 && num <= 89){
        gradding.push('B');
    } else if(num >= 70 && num <= 79){
        gradding.push('C');
    } else if(num >= 60 && num <= 69){
        gradding.push('D');
    } else{
        gradding.push("F");
    }
    })
    
  return gradding;

}

module.exports = {scoresGreaterOrEqual, addMark, squareOfNumbers, expensesSummation, afternoonClass};

let scores = [1,2,3,4,99,76,7];
const expenseList = {
    "groceries": 150,
    "dining out": 100,
    "transportation": 50,
    "entertainment": 80,
 };
 let timeList = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
 let studentGrade = [95, 78, 85, 60, 45, 92];
console.log (scoresGreaterOrEqual(scores));
console.log (addMark(scores));
console.log (squareOfNumbers(scores));
console.log (expensesSummation(expenseList));
console.log (afternoonClass(timeList));
console.log (letterGrade(studentGrade));