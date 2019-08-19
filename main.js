// 44: 15
// const menuBar = document.querySelector('.menu-toggler')
// const navLinks = document.querySelector('.nav-list')
// const links = document.querySelector('.nav-list li')

// menuBar.addEventListener('click', function(event) {
//     console.log(event)
//     navLinks.classList.toggle('open');
//     links.forEach(link => {
//       link.classList.toggle('open')
//     })
//     // menuBar1.toggle('open')
// })

// menuBar1.addEventListener('click', function(event){
//     this.classList.toggle('open')
// })


$(document).ready(function() {
  $('.menu-toggler').on('click', function() {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

$('.top-nav .nav-link').on('click', function () {
  $('.menu-toggler').removeClass('open');
  $('.top-nav').removeClass('open');
});

$('nav a[href*="#"]').on('click', function() {
  $('html, body').animate(keyframes: {
    scrollTop: $($(this).attr('href')).offset().top -100
  }, 2000)
});

$('#up').on('click', function() {
  $('html, body').animate(keyframes: {
    scrollTop: 0
  }, 2000)
});

});

