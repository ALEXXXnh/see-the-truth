const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});





const ghost1 = document.getElementById('g1')
window.addEventListener('mousemove', (e)=> {
    ghost1.style.left = e.clientX + 'px';
    ghost1.style.top = e.clientY + 'px';
});

const ghost2 = document.getElementById('g2')
window.addEventListener('mousemove', (e)=>{
    ghost2.style.left = e.clientX + 'px';
    ghost2.style.top = e.clientY + 'px';
});

const ghost3 = document.getElementById('g3')
window.addEventListener('mousemove', (e)=>{
    ghost3.style.left = e.clientX + 'px';
    ghost3.style.top = e.clientY + 'px';
});
const ghost4 = document.getElementById('g4')
window.addEventListener('mousemove', (e)=>{
    ghost4.style.left = e.clientX + 'px';
    ghost4.style.top = e.clientY + 'px';
});

const ghost5 = document.getElementById('g5')
window.addEventListener('mousemove', (e)=>{
    ghost5.style.left = e.clientX + 'px';
    ghost5.style.top = e.clientY + 'px';
});

const ghost6 = document.getElementById('g6')
window.addEventListener('mousemove', (e)=>{
    ghost6.style.left = e.clientX + 'px';
    ghost6.style.top = e.clientY + 'px';
});
const ghost7 = document.getElementById('g7')
window.addEventListener('mousemove', (e)=>{
    ghost7.style.left = e.clientX + 'px';
    ghost7.style.top = e.clientY + 'px';
});

const bt1 = document.querySelector('.img')
bt1.addEventListener('click', function()  {
    document.querySelector('.gozt').style.display = 'none';
    document.querySelector('.page2').style.display = 'flex';
});
const bt2 = document.querySelector('.B')
bt2.addEventListener('click', function(){
    document.querySelector('.page2').style.display = 'none';
    document.querySelector('.page3').style.display = 'flex';
});
const bt3 = document.querySelector('.said')
bt3.addEventListener('click', function(){
    document.querySelector('.page3').style.display = 'none';
    document.querySelector('.gozt').style.display = 'flex';
});
const bt4 = document.querySelector('.trick')
bt4.addEventListener('click', function(){
    document.querySelector('.gozt').style.display = 'none';
    document.querySelector('.game').style.display = 'flex';
});
const bt5 = document.querySelector('.back')
bt5.addEventListener('click', function(){
    document.querySelector('.game').style.display = 'none';
    document.querySelector('.gozt').style.display = 'flex';
});



