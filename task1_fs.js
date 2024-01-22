// NPM Core Package - Filesystem 


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

       
        let server = http.createServer((req, res) => {
            let consoleImgNum = req.url.length == 1 ? "0" : req.url.slice(1); 
            console.log(`Request made on: ${req.headers.host} for image ${consoleImgNum}`); 

            // Display the img requested by the user using a switch statement 
            switch (req.url) {
                case '/':
                    fetchImg(imgArray[0], res);
                    break;
                case '/0':
                    fetchImg(imgArray[0], res);
                    break;
                case '/1':
                    fetchImg(imgArray[1], res);
                    break;
                case '/2': 
                    fetchImg(imgArray[2], res); 
                    break; 
                case '/3':
                    fetchImg(imgArray[3], res);
                    break;
                case '/4':
                    fetchImg(imgArray[4], res);
                    break;
                default:
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('404 not found');
                    break; 
            };

        }); 

        server.listen(port, () => {
            console.log(`Running on port ${port}`); 
        }); 
    }

    // Verify that the imgArray has the complete list of file names 
    console.log(imgArray);
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
}



