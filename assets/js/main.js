openNav = document.getElementById('menu_nav'); 
navItems = document.getElementById('nav_items');
closeMenu = document.getElementById('close_nav');



openNav.addEventListener('click', () =>{
    navItems.style.display="block";
    openNav.style.display="none";
    closeMenu.style.display="inline-block";
})

const closeNav =  ()=>{ 
    navItems.style.display="none";
    openNav.style.display ="inline-block"
    closeMenu.style.display ="none";
}

closeMenu.addEventListener('click', closeNav);

navLinks = document.querySelectorAll('.nav_link a');

if (window.innerWidth < 1024){ 

    navLinks.forEach(nav => {
            nav.addEventListener('click', ()=>{ 
                closeNav();
            })
            
        });
}

//change header style on mouse move

window.addEventListener('scroll', ()=> 
{
    document.querySelector('.move-scroll').classList.toggle('window-scroll', 
    scrollY > 0);   
})


//cart slides
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-img'); 

const totalSlides = slides.length; 

document.getElementById('nextSlide').addEventListener("click", 
    function() { 
        nextSlide()
        ;
    }); 

document.getElementById('prevSlide').addEventListener("click", 
    function(){
        prevSlide() ;
    });


function updateSlidePosition(){ 
    for (let slide of slides){ 
        slide.classList.remove('img--visible');
        slide.classList.add('img--hidden');
    }
    slides[slidePosition].classList.add('img--visible');
}

function nextSlide(){ 
    
    if( slidePosition === totalSlides - 1) { 
        slidePosition = 0; 
    }else { 
        slidePosition++; 
    }
    updateSlidePosition();
}


function prevSlide(){ 
    
    if(slidePosition === 0){ 
        slidePosition = totalSlides - 1;
    } else{ 
        slidePosition--;
    }
    updateSlidePosition();
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
