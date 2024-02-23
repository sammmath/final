const nav=document.getElementById('nav')
window.addEventListener('scroll',function(){
    let scrollpos=window.screenY || this.document.documentElement.scrollTop;
    if (scrollpos>48){
        nav.style.backgroundColor='white';
    }else{
        nav.style.backgroundColor='transparent';
    }
      
})


let cardBoxEl=document.querySelector('.cardbox')
let next =document.querySelector('#rightbtn')
let prev =document.querySelector('#leftbtn')
next.addEventListener('click',function(){
    cardBoxEl.scrollLeft += 300;
})
prev.addEventListener('click',function(){
    cardBoxEl.scrollLeft -= 300;
})
const maxScrollLeft=cardBoxEl.scrollWidth-cardBoxEl.clientWidth
function auto(){
    if(cardBoxEl.scrollLeft> (maxScrollLeft)){
        console.log('hi')
        cardBoxEl.scrollLeft +=maxScrollLeft
    }else{
        cardBoxEl.scrollLeft-=300
    }
}
let play=setInterval(autoplay,5000)