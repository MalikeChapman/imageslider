import { listenerFunctions } from "./htmlfunctions.js";

const radioBtnsList = document.getElementsByName("photo");
for(let i = 0; i < radioBtnsList.length; i++){
    radioBtnsList[i].addEventListener('click', listenerFunctions.changePhoto);
}

