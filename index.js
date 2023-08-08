var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById('btn').addEventListener('click',function(){
var guess=parseInt(document.getElementById('guessInput').value);
 attempts++;
 if(guess===randomNumber){
    displayMessage("congratulations!you guess the number in"+attempts+"attempts");
    document.getElementById('btn').disabled=true;
 }
 else if(guess<randomNumber){
    displayMessage("too low! try a higher number");
    
 }
 else{
    displayMessage("too high! try a lower number");
 }


});
function displayMessage(Message){
    document.getElementById('msg').textContent=Message;
}