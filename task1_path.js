// NPM Core Package - Path 


// Summary: 





// Code: 

const path = require('path'); 

// Create a regular expression for the current file name and extension 
const reName = /^task1_path$/i; 
const reExt = /^\.js$/i; 

// Extract the current file name using .parse().name
let currFileName = path.parse(__filename).name; 

// Extract the current file ext using .parse().ext
let currFileExt = path.parse(__filename).ext; 

// Test the file name with the regular expression - state the results in the console. 
let nameVerify = reName.test(currFileName); 

if(nameVerify) {
    console.log(`The current file name is task1_path.`)
} else {
    console.log(`The current file name is NOT task1_path.`)
}; 


// Test the file extension with the regular expression - state the results in the console. 
let extVerify = reExt.test(currFileExt); 

if(extVerify) {
    console.log(`The current file extension is .js`)
} else {
    console.log(`The current file extension is NOT .js`)
}; 


console.log(path.isAbsolute(currFileName)); 

console.log(path.isAbsolute(currFileExt)); 

console.log(path.isAbsolute(path.parse(__filename).root + path.parse(__filename).dir + path.parse(__filename).base)); 

console.log(path.parse(__dirname)); 







// let relPath = path.relative('/QAP_S3_FULLSTACKJS/task1_lodash.js', '/QAP_S3_FULLSTACKJS/task2_sharp.js'); 
// let relPathReverse = path.relative('/QAP_S3_FULLSTACKJS/task2_sharp.js', '/QAP_S3_FULLSTACKJS/Images/original_images/sagrada_front.jpg'); 

// console.log(relPath); 
// console.log(relPathReverse); 





