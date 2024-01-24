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



// Function 1: Test a path property (name, ext ...) with a regular expression - state the results in the console. 
function verifyPath(inputFile, re){
    let inputVerify = re.test(inputFile); 
    if(inputVerify) {
        console.log(`The input matches the regular expression given.`);
    } else {
        console.log(`The input does NOT match the regular expression given.`); 
    }
}; 


// Function 2: Check if an input given is an absolute path using .isAbsolute()
function isAbsoluteCheck(inputPath) {
    let checkAbsolute = path.isAbsolute(inputPath); 
    if(checkAbsolute) {
        console.log(`The path ${inputPath} is an absolute path.`)
    } else {
        console.log(`The path ${inputPath} is NOT an absolute path.`)
    }
}; 


// Function 3: Use .join() to create additional paths 
function useJoinMethod(joinParameter) {
    let currentPath = path.resolve(__filename); 
    let joinAdded = path.join(currentPath, joinParameter); 
    console.log(`The path you wish to create is: ${joinAdded}`); 
}; 


verifyPath(currFileName, reName); 
verifyPath(currFileExt, reExt); 

console.log(); 


isAbsoluteCheck(currFileName); 
isAbsoluteCheck(currFileExt); 
isAbsoluteCheck(__dirname); 

console.log();

useJoinMethod('_joinMethod'); 









