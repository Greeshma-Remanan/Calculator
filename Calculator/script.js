function display(num){
    root.value+=num; //root is id .+ for concatination
}

function clearscreen(){
    root.value=""
    
}

function backspace(){
    let result=root.value.slice(0,-1);
    root.value=result

}
function solve(){       //for =
    let current=root.value
    result=eval(current) //eval():Evaluates JavaScript code and executes it.(perform mathematical operations)
    root.value=result

}