// alert('Welcome to my mystical chamber');
// alert("A secret code has been hidden for thousnads of years in the remote Alaska...");
// alert('The great Alexanthor will grant you 10 chances to guess every number of the code...');
// alert('if you fail to retrive message, your soul will belong to the great Alexanthor for eternity...');
// alert('are you up to the challenge?');

var userText = document.getElementById("user-Text");
const choices = [1,2,3,,4,5,6,7,8,9];

// var userWins = document.getElementById("user-Wins");

// var userLosses = document.getElementById("user-Losses");

// var userGL = document.getElementById("user-Gusses-Left");

const psychicFunction = () =>{
    let computer = choices[Math.floor(Math.random() * choices.length)];
    console.log, ("computer", computer);
    
    document.onkeyup = function(event) {
    if ((computer = event.key)) {
        document.write()
    } 
    else {
        guess = alert("oopsies! Try again.");

}
        
    console.log(event);
    userText.innerHTML = event.key;

  
};  
};
psychicFunction();