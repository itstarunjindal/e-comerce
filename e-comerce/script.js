const bar = document.getElementById('bar');
const closes = document.getElementById('closes');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(closes){
    closes.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}