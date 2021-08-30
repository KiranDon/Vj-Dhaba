// navbar_toggler
let toggler = document.querySelector('.navbar_toggler');
toggler.addEventListener('click', toggleNavbar);

document.addEventListener('click', function(e){
    if(e.target.closest('.navbar')){
        toggleNavbar();
    }
});

function toggleNavbar(){
    document.querySelector('.navbar').classList.toggle('active')
}