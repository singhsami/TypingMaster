window.addEventListener('load',init)
const levels={
easy:5,
medium:3,
hard:1
}

const currentLevel = levels.easy;
let time=currentLevel;
let isplaying;
let score=0;
const wordInput=document.querySelector("#word-input");
const currentword=document.querySelector("#currentword")
const scoreDisplay=document.querySelector("#score") 
const timeDisplay=document.querySelector("#time")
const message=document.querySelector("#message")

//Array of words
const words=[
'hat',
'river',
'lucky',
'statue',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'established',
'hero',
'javascript',
'nutrition',
'recover',
'echo',
'siblings',
'investigate',
'horrendous',
'symptom',
'laughter',
'magic',
'space',
'defination'
];
function init(){
showWord(words)
wordInput.addEventListener('input',startMatch)
}
function showWord(words){
    const randomIndex=Math.floor(Math.random()* words.length);
   // console.log(words[randomIndex])
   currentword.innerHTML = words[randomIndex]
}
setInterval(countdown,1000)
setInterval(checkStatus,50)
function checkStatus(){
    if(!isplaying&&time==0)
    message.innerHTML="GAME OVER!!!"
}
function countdown(){
if(time>0){
    time--;
}
else if(time==0){
    time=0;
    isplaying=false
}
timeDisplay.innerHTML=time
}

function startMatch(){
if(matchWords()){
    showWord(words);
    time=currentLevel+1;
wordInput.value="";
isplaying=true;
showWord(words)
score++;
}
scoreDisplay.innerHTML=score;
}

function matchWords(){
    if(wordInput.value===currentword.innerHTML){
    message.innerHTML="correct";
    return true;
}
    else{
    message.innerHTML="incorrect"
    return false;}
}