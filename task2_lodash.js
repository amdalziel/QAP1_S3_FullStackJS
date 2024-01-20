// NPM Package - Lodash 

const _ = require('lodash'); 

const classList = ['anakin Skywalker', 'darth vader', 'Padme Amidala', 'leia Organa', 'BABY Yoda', 'mace Windu']; 
const bookTitleList = ['Death Star Database Design & Implementation', 'Node, You Will Learn', 'Java: There is No Try']; 


// Modify the class list to start case (Aaaaa Bbbb Cccc) using _.forEach and _.startCase 
_.forEach(classList, (student, index) => {
    classList[index] = _.startCase(_.toLower(student)); 
    return classList; 
}); 

// Confirm that the student names display correctly 
console.log(`Class List (start case):`); 
console.log(classList); 
console.log(); 


// Shuffle the order of students 
const shuffledClassLst = _.shuffle(classList); 

// Confirm that the students names are displayed in a random order 
console.log(`Shuffled class list:`);
console.log(shuffledClassLst);
console.log();  


// Divide the shuffled list of students into groups of 2
const studentTeams = _.chunk(shuffledClassLst, 2); 

// Confirm the groups of 2 have been created 
console.log(`Students divided into groups of two:`);
console.log(studentTeams);
console.log(); 


// Use a _.map loop to organize and record teams and assignments information: 
// Team number (index)
// Names of each team member
// Book assigned for reading 

const teamAssignment = _.map(studentTeams, (student, index) => {
    return (`Team ${index + 1} (${student[0]} and ${student[1]}) will read '${bookTitleList[index]}'`);
}); 

// Confirm the new array - teamAssignment - stores the information correctly 
console.log(teamAssignment);







