const {scoresGreaterOrEqual, addMark, squareOfNumbers, expensesSummation, afternoonClass, letterGrade} = require("./classTask");

test("scores greater or equal to 70", ()=>{
    const testScores = [70,23,43,56,21,34,67,4,44,80];
    let answer = [70,80];
    expect(scoresGreaterOrEqual(testScores)).toEqual(answer);

});

test("add mark to student's existing score", ()=> {
    let scores = [85,92,78,88,95];
    let expectedAnswer = [90,97,83,93,100];
    expect(addMark(scores)).toEqual(expectedAnswer);
});

test("square of numbers in a list", ()=>{
    let arrayList = [2,4,6,8,10];
    let expectedAnswer = [4,16,36,64,100];
    expect(squareOfNumbers(arrayList)).toEqual(expectedAnswer);
});

test("expenses tracking and summation", ()=> {
    let expenseCategories = {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80};
    let expectedAnswer = 380;
    expect(expensesSummation(expenseCategories)).toBe(expectedAnswer);

});

test("test for class timing filtering", ()=>{
    let timeList = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    let finalResult = ["1:00 PM", "3:00 PM", "5:00 PM"];
    expect(afternoonClass(timeList)).toEqual(finalResult);
})

test("letter grade mapping", ()=> {
    let studentGrade = [95, 78, 85, 60, 45, 92];
    let expected = ['A', 'B', 'C', 'D', 'F'];
    expect(letterGrade(studentGrade)).toEqual(expected);
})

