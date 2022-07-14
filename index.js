// code your solution here

function superbowlWin(array){
    if(array.find(didWin) === true){
    return array.year
}
}
function didWin(element){
   if(element.result === "W"){
    return true
   }else{
    return undefined
   }

}