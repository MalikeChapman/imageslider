import { listenerFunctions } from "./htmlfunctions.js";

// const fs = require('fs');
let path = "./photos/";
let imgStorage = [];
let index = 0;

imgStorage.push(`${path}dog.jpeg`);
imgStorage.push(`${path}images.jpeg`);
imgStorage.push(`${path}test.jpeg`);



const radioBtnsList = document.getElementsByName("photo");
for(let i = 0; i < radioBtnsList.length; i++){
    radioBtnsList[i].addEventListener('click', listenerFunctions.changePhoto);
}

setInterval(function(){
    const img = document.querySelector(".currentPhoto");
    index = index % imgStorage.length;
    img.src = `${imgStorage[index]}`;
        index++;



}, 5000);
