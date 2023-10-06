/* eslint-disable */


window.onload = function() {
  //write your code here
  let who = ['Peter', 'Lois', 'Stewy', 'Chris', 'Brian'];
  let action = ['took', 'ran off with', 'ripped up', 'puked on', 'lost'];
  let what = ['my car', 'my laptop', 'the keys', 'my homework', 'my clothes'];
  let when = ['yesterday', 'today', 'last night', 'an hour ago', '5 minutes ago'];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];


  let excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + "!";
  document.getElementById("excuse").textContent = excuse;


  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    randomWho = who[Math.floor(Math.random() * who.length)];
    randomAction = action[Math.floor(Math.random() * action.length)];
    randomWhat = what[Math.floor(Math.random() * what.length)];
    randomWhen = when[Math.floor(Math.random() * when.length)];

    excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + "!";
    document.getElementById("excuse").textContent = excuse;
  
  });
};
