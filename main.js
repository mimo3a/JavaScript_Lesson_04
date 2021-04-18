// minimum
function exit(mass) {
    console.log(mass);
    console.log('--------------------------------------')
}

let array = [2,43,0,-76,5,54,-4,3,45,2,0,-4,-78,45,23,56,34,-43,-34,76,-65,55,-33];

// sorting up
function sortUp(number1, number2) {
    return number1 - number2;
}
exit("sort up " + array.sort(sortUp));



// sorting down
function sortDown(number1, number2) {
    return number2 - number1;
}
exit(" sort doun " + array.sort(sortDown));


// filtering positives

function filterPositiv(object) {
    return object >= 0
}
let positiv = array.filter(filterPositiv);
exit("Positive array = " + positiv)


// filtering negatives

function filterNegativ(object) {
    return object < 0;
}
let negativ = array.filter(filterNegativ);
exit('Negativ array = ' + negativ);


// maximum

let arrayStudents = [];
let student_1 = {'yearOfStuding' : 2, 'facultyName' : 'Physic'};
let student_2 = {'yearOfStuding' : 1, 'facultyName' : 'Byology'};
let student_3 = {'yearOfStuding' : 5, 'facultyName' : 'Chymy'};
let student_4 = {'yearOfStuding' : 3, 'facultyName' : 'Phylosophy'};
let student_5 = {'yearOfStuding' : 2, 'facultyName' : 'Mathematik'};
let student_6 = {'yearOfStuding' : 6, 'facultyName' : 'English'};
let student_7 = {'yearOfStuding' : 1, 'facultyName' : 'Phylology'};
let student_8 = {'yearOfStuding' : 3, 'facultyName' : 'Recht'};
let student_9 = {'yearOfStuding' : 4, 'facultyName' : 'Economy'};
let student_10 = {'yearOfStuding' : 4, 'facultyName' : 'Jury'};

arrayStudents.push(student_1, student_2, student_3, student_4, student_5, student_6, student_7, student_8, student_9, student_10);

// faculityName array

function faculName(obj) {  
    return obj.facultyName;   
}
let faculNameArr = arrayStudents.map(faculName);
exit(" List of facultet`s names..." + faculNameArr);


// summ of years

function reduceFunction(summ, current) {
    return summ + current.yearOfStuding;

}

let summ = arrayStudents.reduce(reduceFunction,0);
exit('The summ of studing`s years= ' + summ);


