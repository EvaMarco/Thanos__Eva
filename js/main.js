'use strict';

const main = document.querySelector('.page__main');
let decision = {
  'live': ''
};
function getRandomNumber(){
  let randNum = Math.floor(Math.random()*2);
  return randNum;
}
function live(){
  const newItem = document.createElement('h2');
  const newContent = document.createTextNode('Thanos ha decidido que tu vida es demasiado importante.');
  newItem.appendChild(newContent);
  main.appendChild(newItem);
}
function die(){
  const newItem = document.createElement('h2');
  const newContent = document.createTextNode('Thanos te ha matado. Por el bien del universo.');
  newItem.appendChild(newContent);
  main.appendChild(newItem); 
}
function init(){
  if(JSON.parse(localStorage.getItem('decision')) !== null){
    const savedDecision = JSON.parse(localStorage.getItem('decision'));
    if(savedDecision.live === true){
      live();
    }
    else{
      die();
    }
  }else{
    const num = getRandomNumber();
    if (num === 1){
      die();
      decision = { 'live' : false};
      localStorage.setItem('decision', JSON.stringify(decision));
    }
    else{
      live();
      decision = { 'live' : true};
      localStorage.setItem('decision', JSON.stringify(decision));
    }
  }
}

init();