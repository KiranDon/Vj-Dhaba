// navbar_toggler
let toggler = document.querySelector('.navbar_toggler');
toggler.addEventListener('click', toggleNavbar);

document.addEventListener('click', function(e){
    if(e.target.closest('.navbar')){
        toggleNavbar();
    }
});

function toggleNavbar(){
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.navbar_toggler').classList.toggle('active');
}

//sticky nav
window.addEventListener('scroll', function(){
    if(this.pageYOffset > 50){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
});

// const header = document.querySelector('header');
// const navHeight = header.getBoundingClientRect().height;

// function stickyNav(entries){
//     const [entry] = entries;
//     console.log(entry);
//     if(!entry.isIntersecting)
//     {
//         document.querySelector('nav').classList.add('sticky');
//     }
//     else
//     {
//         document.querySelector('nav').classList.remove('sticky');
//     }
    
// }

// const headerObserver = new IntersectionObserver(stickyNav, {
//     root: null,
//     threshold: 0
// });
// headerObserver.observe(header);