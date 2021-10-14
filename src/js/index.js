document.addEventListener('DOMContentLoaded', function () {
  const sliderItem=document.querySelector('.slider__container'),
  carts=document.querySelectorAll('.cart'),
  button=document.querySelector('.button'),
  container=document.querySelector('.container'),
  theme= document.querySelector('.theme');
  
  let active='first';
  const slider = new ChiefSlider('.slider', {
      loop: true,
      autoplay: true,
        interval: 5000,
        refresh: true
  });
    sliderItem.addEventListener('touchmove',()=>{
      slider._config.autoplay=false;
    })
    carts.forEach((el)=>{
      el.addEventListener('click',(e)=>{
        carts.forEach(el=>el.classList.remove('active'))
        el.classList.add('active')
        active=el.id;
      })
    })  
    button.addEventListener('click',()=>{
        if(active=='first') window.open('https://www.google.com/search?q=1');
        if(active=='second') window.open('https://www.google.com/search?q=2');
        if(active=='third') window.open('https://www.google.com/search?q=3');
    })
   theme.addEventListener('click',()=>{
        container.classList.toggle('dark');
    }) 
});