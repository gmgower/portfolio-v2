// 44: 15
// const menuBar = document.querySelector('.menu-toggler')
// // const menuBar1 = document.querySelector('.menu-toggler')

// menuBar.addEventListener('click', function(event) {
//     console.log(event)
//     this.classList.toggle('open')
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
});
