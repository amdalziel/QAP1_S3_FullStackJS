const sharp = require('sharp');


// Image Objects - key(image name) and value (path)

let sagrat_cor = {sagrat_cor: './Images/original_images/sagrat_cor.jpg'};
let city_view = {city_view: './Images/original_images/city_view.jpg'}; 


async function resizeImage(img) {

    // Variable 'imgUrl' is full path of image (image object - value)
    const imgUrl = Object.values(img)[0]; 

    // Variable 'imgName' is name of image (image object - key)
    const imgName = Object.keys(img)[0]; 
  
    try {
        const resizedImage = await sharp(imgUrl)
        .resize({
            width: 400,
            height: 600
        })
        .toFormat("jpeg", { mozjpeg: true})
        .toFile(`./Images/edited_images/${imgName}.jpg`);

        console.log(`Image name: ${imgName}`);
        console.log(`Image resized to width: ${resizedImage.width} and height: ${resizedImage.height} `); 
        console.log(`Edited image number of bytes: ${resizedImage.size}`); 
        console.log(); 

    } catch (error) {
        console.log(error); 
    }

}; 

resizeImage(sagrat_cor);
resizeImage(city_view); 