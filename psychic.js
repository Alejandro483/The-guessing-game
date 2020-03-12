// alert('Welcome to my mystical chamber');
// alert("A secret message has been hidden for thousnads of years in the remote Alaska...");
// alert('The great Alexanthor will grant you 10 chances to guess every letter of the message...');
// alert('if you fail to retrive message, your soul will belong to the great Alexanthor for eternity...');
// alert('are you up to the challenge?');

// var answer = 3;
// var guess = prompt("Tell me you guess");


// for (let i = 0; i < 10; i++) {
    
// if (answer == guess){
//     document.write("Wise guess!");
//     break;
// }    
// else {
//     guess = prompt("oopsies! Try again.");

   
// }

// }

var userText = document.getElementById("user-Text");

document.onkeyup = function(event) {
    console.log(event)
    userText.innerHTML = event.key;
};