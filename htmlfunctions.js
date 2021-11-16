export const listenerFunctions =
 (function (){
    function changePhoto(){
        const mainDiv = document.getElementById("main");
        let answer = document.getElementsByName("photo");
        const img = document.querySelector(".currentPhoto");

        for(let i = 0; i < answer.length; i++){
            if(answer[i].checked){
                img.src = `${answer[i].value}`;
                break;
            }
        }

        
    }
    return {changePhoto};
})(document)