
console.log("this is main app.js");













function changeBg() {

  const section = document.querySelectorAll('section');
  let windowScroll = window.scrollY;

    if(windowScroll > (750 - 10)) {
      section[0].style.backgroundColor = 'white';
    }
    
    if(windowScroll > (1512 - 10)) {
      section[1].style.backgroundColor = 'white';
    }

    if(windowScroll > (2268 - 10)) {
      section[2].style.backgroundColor = 'white';
    }

    if(windowScroll > (3024 - 10)) {
      section[3].style.backgroundColor = 'white';
    }

    if(windowScroll > (3780 - 10)) {
      section[4].style.backgroundColor = 'white';
    }
    console.log('hello', section);
  
}

// window.addEventListener('scroll', changeBg)







