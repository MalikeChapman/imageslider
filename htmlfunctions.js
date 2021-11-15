export const listenerFunctions =
 (function (){
    function changePhoto(){
        const mainDiv = document.getElementById("main");
        let answer = document.getElementsByName("photo");

        for(let i = 0; i < answer.length; i++){
            if(answer[i].checked){
                mainDiv.style.background = `url('${answer[i].value}')`;
                mainDiv.style.backgroundSize = "cover";
                break;
            }
        }

        
    }
    return {changePhoto};
})(document)