//---MAIN MOVING---

let text = document.getElementById('text');
let vulture = document.getElementById('vulture');
let back1 = document.getElementById('back1');
let front1 = document.getElementById('front1');
let nav = document.getElementById('nav');


window.addEventListener('scroll', function () {
    let value = window.scrollY;

    text.style.top = 70 + value * -0.22 + '%';
    back.style.top = value * 0.3 + 'px';
    cloud1.style.top = value * -0.5 + 'px';
    cloud1.style.left = value * -0.5 + 'px';
    cloud2.style.top = value * 0.3 + 'px';
    
    
});
