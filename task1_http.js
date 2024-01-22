// NPM Core Package - Http 


// Summary: 





// Code: 

// Three core packages required for this code - the three packages explored in Task 1!
const http = require('http');
const fs = require('fs');
const path = require('path'); 

// Initialize variables for the port and the source of images for the website 
const port = 8080;
const imgFolder = './Images/original_images/';

fs.readdir(imgFolder, (error, files) => {

    // Initialize an empty array to store the complete path for each image 
    let imgArray = [];

    // Initialize a variable to store the complete path for an image (using path.join)
    let imgUrl = "";

    // Write an error to the console if the operation fails 
    if (error) {
        console.log("Error - files not located.")
    } else {
        let imgCount = 0; 

    // Read the directory of "imgFolder" - for each file join the imgFolder path and file name in 
    // a single variable "imgUrl" and store it in the imgArray. 
        files.forEach((file) => {
            imgUrl = path.join(imgFolder, file); 
            console.log(`Image ${imgCount}: ${imgUrl}`); 
            imgArray.push(imgUrl);

            imgCount ++; 
        });

       
        let server = http.createServer((req, res) => {
            console.log(`Request made on: ${req.headers.host}`); 
    
            fetchImg(imgArray[2], res);
        })

        server.listen(port, () => {
            console.log(`Image '${imgArray[2]}' displayed on port ${port}.`); 
        }); 
    }

    // Verify that the imgArray has the complete list of file names 
    console.log(imgArray);
});

function fetchImg(path, response) {
    fs.readFile(path, (error, content) => {
        if (error) {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end('500 Internal Error');
        } else {
            response.writeHead(200, { 'Content-Type': 'image/jpeg' });
            response.end(content, 'binary');
        }
    });
}



