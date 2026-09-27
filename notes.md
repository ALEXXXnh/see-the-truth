const music = document.querySelector('.bgmusic')
const play = document.querySelector('.play')
play.addEventListener('click', ()=>{
    music.play();
    music.loop = "true";
});