let runningTotal=0;
let buffer="0";
let previousOpertator=null;
const screen =document.querySelector(".screen")

document.querySelector('.calc-button').addEventListener("click", function(event){
    buttonClick(event.target.innerText);
})

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSysmbol(value);

    } else{
          handleNumber(value);
    }
    rerender();
}

function handleNumber(value){
    if(buffer ==="0"){
         buffer = value;
    } else{
        buffer+=value;
    }
}
function handleSysmbol(value){
    switch(value){
        case  'C': 
        buffer=0;
        runningTotal=0;
        previousOpertator=null;
        case '=':
            if(previousOpertator===null){
              return;
            }
            flushOpertation(parseInt(buffer));
            previousOpertator=null;
            buffer= "" + runningTotal;
            runningTotal=0;
            break;
            case "BA":
                if(buffer.length===1){
                    buffer="0";

                } else{
                   buffer = buffer.substring(0,buffer.length-1); 
                }
                break;
                default:
                    handleMath(value);
                    break;
    }

}
 function handleMath(value){
     const inBuffer= parseInt(buffer);
     if(runningTotal===0){
         runningTotal=inBuffer;
     } else{
         flushOpertation(inBuffer);
     }
     previousOpertator=value;
     console.log("previousOperation",previousOpertator);
     buffer="0";
 }

 function flushOpertation(inBuffer){
     if(previousOpertator==="+"){
         runningTotal+=inBuffer;
     }else if(previousOpertator==="-"){
         runningTotal-=inBuffer;
     }
     else if(previousOpertator==="*"){
        runningTotal*=inBuffer;
    }else {
        runningTotal/=inBuffer;
    }
 }

function rerender(){
    screen.innerText = buffer;
}