const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('-Declaración aceptada- \n\nEs un poco divertida esta manera de declararme, lo sé jaja, pero pienso que hacerlo de esta manera podría considerarse formal y perfecto para nuestra circunstancia. Siempre buscaré lo mejor para ti y para ambos, pues eso nos merecemos. Me gustaría caminar siempre a tu lado. Seremos el uno para el otro y me gustaría serlo por el resto de mi vida. :) <3')
});

const noBtn = document.querySelector('#NoBtn');

noBtn.addEventListener('mouseover',function (){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    NoBtn.style.setProperty('top',randomY+'%');
    NoBtn.style.setProperty('left',randomX+'%');
    NoBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
    
})