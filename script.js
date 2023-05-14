//---MAIN MOVING---


let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let back = document.getElementById('back');
let front = document.getElementById('front');



window.addEventListener('scroll', function () {
    let value = window.scrollY;

    
    back.style.top = value * 0.3 + 'px';
    cloud1.style.top = value * -0.5 + 'px';
    cloud1.style.left = value * -0.5 + 'px';
    cloud2.style.top = value * 0.3 + 'px';
    
    
});
