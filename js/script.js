const nav=document.getElementById('nav')
window.addEventListener('scroll',function(){
    let scrollpos=window.screenY || this.document.documentElement.scrollTop;
    if (scrollpos>48){
        nav.style.backgroundColor='white';
    }else{
        nav.style.backgroundColor='transparent';
    }
      
})
