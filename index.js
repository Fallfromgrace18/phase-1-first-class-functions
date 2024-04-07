

function receivesAFunction (callBackFunction){
   
    callBackFunction()
    return "whatever"
 };
//function callBackfunction(parameter){
   // console.log("anything")
    //return "anything"
function returnsANamedFunction(){
    return function callBackFunction(){

    }
}
function returnsAnAnonymousFunction(){
    return function(){
        
    }
}