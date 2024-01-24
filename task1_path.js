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
function useJoinMethod(...joinParameter) {
    // Get the absolute path for the the 'Images' folder using .resolve() 
    let imagesPath = path.resolve('Images'); 

    // Join inputs given by the user to 'imagesPath'. The user may give 1 or many inputs (using rest parameters)
    let addToImagesPath = path.join(imagesPath, ...joinParameter); 
    console.log(`Your input has created the path: \n ${addToImagesPath}`); 
}; 



// Verify if the current file name and extension match the regular expression created 
verifyPath(currFileName, reName); 
verifyPath(currFileExt, reExt); 

console.log(); 

// Check if the inputs below are an absolute path 
isAbsoluteCheck(currFileName); 
isAbsoluteCheck(currFileExt); 
isAbsoluteCheck(__dirname); 

console.log();

// Create a path by adding to the /Images directory. 

useJoinMethod('seville_images', 'alcazar_img1.jpg'); 
useJoinMethod('icons', 'black&white'); 









