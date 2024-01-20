// NPM Package - Lodash 

const _ = require('lodash'); 

const classList = ['anakin Skywalker', 'darth vader', 'Padme Amidala', 'leia Organa', 'BABY Yoda', 'mace Windu']; 
const courseName = ['The Force 101', 'Node, You Will Learn', 'Java: There is No Try']; 


// Modify the class list to start case (Abcd Efgh)
classList.forEach((student, index, array) => {
    array[index] = _.startCase(_.toLower(student)); 
    return array; 
}); 

// Confirm that the student names display correctly 
console.log(classList); 


// Shuffle the order of students 
const shuffledClassLst = _.shuffle(classList); 

// Confirm that the students names are displayed in a random order 
console.log(shuffledClassLst); 


// Divide the shuffled list of students into groups of 2
const studentTeams = _.chunk(shuffledClassLst, 2); 

// Confirm the groups of 2 have been created 
console.log(studentTeams);



