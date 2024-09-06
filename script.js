let play = document.getElementById('play');
let setting = document.getElementById('settings');
let aboutus = document.getElementById('aboutus');
let game1=document.getElementById('game1');
let game2=document.getElementById('game2');
let body=document.getElementById('body');
play.addEventListener('click', function  () {
  play.style.transform = "translateY(-300%)";
  setting.style.transform = "translateX(-200%)";
  aboutus.style.transform = "translateX(200%)";
  
  body.style.minHeight="100vmin";
  aboutus.addEventListener("transitionend",function (){
    aboutus.style.display="none";
    play.style.display="none";
    setting.style.display="none";
    game1.style.transform="translateX(-0%)";
  game2.style.transform="translateX(0%)";

  });

});
