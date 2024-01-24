// NPM Core Package - Filesystem (with a great deal of help from the http package!) 


// Summary: 





// Code: 

// Three core packages required for this code
const http = require('http');
const fs = require('fs');
const path = require('path'); 

// Initialize variables for the port and the source of images for the website 
const port = 8080;
const imgFolder = './Images/original_images/';


// Read the directory of "imgFolder" 
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

    // For each file (in "imgFolder") join the imgFolder path and file name in 
    // a single variable "imgUrl". Store each "imgUrl" in the imgArray. 
        files.forEach((file) => {
            imgUrl = path.join(imgFolder, file); 
            console.log(`Image ${imgCount}: ${imgUrl}`);
            imgArray.push(imgUrl);

            imgCount ++; 
        });

    //    Create a server using the core package 'http' 
        let server = http.createServer((req, res) => {

    // Assign a consoleImgNum to each image - to keep track of requests in the console 
            const consoleImgNum = req.url.length === 1 ? "0" : req.url.slice(1);
            console.log(`Request made on: ${req.headers.host} for image ${consoleImgNum}`);

    // Convert the consoleImgNum to an integer - and use this as the endpoint (imgIndex)
            const imgIndex = parseInt(consoleImgNum);
            if (imgIndex >= 0 && imgIndex < imgArray.length) {
                fetchImg(imgArray[imgIndex], res);
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 not found');
            }
        });

        server.listen(port, () => {
            console.log(`Running on port ${port}`); 
        }); 
    }

    // Verify that the imgArray has the complete list of file names 
    console.log(imgArray);

    // Convert imgArray to JSON data 
    const imagesJson = JSON.stringify(imgArray); 

    // Store the image paths in a txt file using .writeFile - stored as JSON data 
    // Note: will create a new file if it does not exist. It will OVERWRITE the file with current data if it already exists
    fs.writeFile('barcelonaImages_inventory.txt', imagesJson, function(err) {
        if(err) throw err; 
        console.log("Inventory of images saved to barcelonaImages_inventory.txt"); 
    }); 
});

// Function used for each case in the above switch statement. 
// path parameter = imgArray[x] 
// Content-type set to 'image/jpeg' to display the jpg files 
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
}; 



