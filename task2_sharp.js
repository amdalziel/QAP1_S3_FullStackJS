const sharp = require('sharp');


// Image Objects - key(image name) and value (path)
let sagrat_cor = {sagrat_cor: './Images/original_images/sagrat_cor.jpg'};
let city_view = {city_view: './Images/original_images/city_view.jpg'}; 
let gaudi_evening = {gaudi_evening: './Images/original_images/gaudi_evening.jpg'}; 
let gaudi_facade = {gaudi_facade: './Images/original_images/gaudi_facade.jpg'}; 
let sagrada_front = {sagrada_front: './Images/original_images/sagrada_front.jpg'}; 





// Function to resize (change the width and height) and compress the image 
async function resizeAndCompressImage(img, w, h) {


// Variable 'imgUrl' is name of image (image object - value)
const imgUrl = Object.values(img)[0]; 
// Variable 'imgName' is name of image (image object - key)
const imgName = Object.keys(img)[0]; 

  
    try {
        const resizedImage = await sharp(imgUrl)
        .resize({
            width: w,
            height: h
        })
        .toFormat("jpeg", { mozjpeg: true})
        .toFile(`./Images/edited_images/${imgName}.jpg`);

        console.log(`Image name: ${imgName}`);
        console.log(`Image resized to width: ${resizedImage.width} and height: ${resizedImage.height} `); 
        console.log(`Edited image number of bytes: ${resizedImage.size}`); 
        console.log(`Image saved in './Images/edited_images`);
        console.log();  

    } catch (error) {
        console.log(error); 
    }

}; 

// Function to alter the tint of an image (and compress the image)
async function changeImageColor(img, rValue, gValue, bValue) {

// Variable 'imgUrl' is name of image (image object - value)
const imgUrl = Object.values(img)[0]; 
// Variable 'imgName' is name of image (image object - key)
const imgName = Object.keys(img)[0]; 

try {
    const colorEditedImage = await sharp(imgUrl)
    .tint({ r: rValue, g: gValue, b: bValue })
    .toFormat("jpeg", { mozjpeg: true})
    .toFile(`./Images/edited_images/${imgName}.jpg`);

    console.log(`Image name: ${imgName}`);
    console.log(`Image color: r: ${rValue}, g: ${gValue}, b: ${bValue}`);
    console.log(`Edited image number of bytes: ${colorEditedImage.size}`); 
    console.log(`Image saved in './Images/edited_images`);
    console.log();  
    
} catch (error) {
    console.log(error); 
    
}

}; 


// Resized/Compressed Images: 
resizeAndCompressImage(sagrat_cor, 400, 600);
resizeAndCompressImage(city_view, 500, 800); 

// Changed Tint/Compressed Images: 
changeImageColor(sagrada_front, 0, 150, 225); 
changeImageColor(gaudi_facade, 100, 45, 45); 