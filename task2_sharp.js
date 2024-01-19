const sharp = require('sharp');

let sagrat_cor = {sagrat_cor: './Images/original_images/sagrat_cor.jpg'};
let city_view = {city_view: './Images/original_images/city_view.jpg'}; 


async function resizeSagratImg(img) {

    const imgUrl = Object.values(img)[0]; 
    console.log(`Image Original Url: ${imgUrl}`); 

    const imgName = Object.keys(img)[0]; 
    console.log(`Image Original Key: ${imgName}`); 
  
    try {
        const resizedImage = await sharp(imgUrl)
        .resize({
            width: 400,
            height: 600
        })
        .toFormat("jpeg", { mozjpeg: true})
        .toFile(`./Images/edited_images/${imgName}.jpg`);
        console.log(`Image resized to width: ${resizedImage.width} and height: ${resizedImage.height} `); 
    } catch (error) {
        console.log(error); 
    }

}; 

resizeSagratImg(sagrat_cor);
resizeSagratImg(city_view); 