
let header = document.body.firstElementChild;
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.documentElement.scrollTop > 10) {
    header.style.transition = '0.5s'
    header.style.backgroundColor = 'white'
  } else {
    header.style.backgroundColor = '#faf8f5'
  }
}

burgerMenu = document.getElementsByClassName('burgermenu')[0];
burgerMenu.onclick = function () {
  this.classList.toggle('change')
}
$('.burgermenu').click(function () {
  $('.dropdown').slideToggle('normal');
})
$('.fa.fa-power-off').click('on', function () {
  $(this).css('fontSize', '50px');

  $('.connecting').css({
    'visibility': 'visible',
    'transitionDelay': '0.2s'
  })
  $('.fir').css({
    'visibility': 'visible',
    'transitionDelay': '0.4s'
  })
  $('.sec').css({
    'visibility': 'visible',
    'transitionDelay': '0.7s'
  })
  $('.thir').css({
    'visibility': 'visible',
    'transitionDelay': '0.9s'
  })
  $('.fa.fa-wifi').css({
    'visibility': 'visible',
    'transitionDelay': '1.1s',
    'fontSize': '30px'
  })
  $('.coding').css({
    'visibility': 'visible',
    'transitionDelay': '1.3s'
  })
  $('.fir1').css({
    'visibility': 'visible',
    'transitionDelay': '1.5s'
  })
  $('.sec1').css({
    'visibility': 'visible',
    'transitionDelay': '1.8s'
  })
  $('.thir1').css({
    'visibility': 'visible',
    'transitionDelay': '2.1s'
  })
  $('.fa.fa-code').css({
    'visibility': 'visible',
    'transitionDelay': '2.3s',
    'fontSize': '30px'
  })
  $('.return').css({
    'visibility': 'visible',
    'transitionDelay': '2.6s',
    'fontWeight': 'bold'
  })
  $('.R').css({
    'visibility': 'visible',
    'transitionDelay': '2.8s',
    'color': '#212530'
  })
  $('.e').css({
    'visibility': 'visible',
    'transitionDelay': '3s',
  })
  $('.s').css({
    'visibility': 'visible',
    'transitionDelay': '3.2s',
  })
  $('.u').css({
    'visibility': 'visible',
    'transitionDelay': '3.4s',
  })
  $('.l').css({
    'visibility': 'visible',
    'transitionDelay': '3.6s',
  })
  $('.t').css({
    'visibility': 'visible',
    'transitionDelay': '3.8s',
  })
  $('.fa.fa-smile-o').css({
    'visibility': 'visible',
    'transitionDelay': '4.2s',
    'color': 'yellow',
    'fontSize': '30px'
  })



})
// window.onload = function () {
//   this.alert('Welcome to my page :)')
// }
// setTimeout(function () {
//   $('main').removeClass('black');
// }, 3000)
// $('.sloganText').css('zIndex', '-2')
// $('.animated-area').css('zIndex', '-2')
// $('.quote span').css('zIndex', '-2')
// setTimeout(function () {
//   $('.sloganText, .animated-area ').css('zIndex', '1');
//   $('.quote span').css('zIndex', '1')

// }, 3200)

// setTimeout(function () {
//   $('#imageLogo').remove();
// }, 3000)
// setTimeout(function () {
//   $('#dbl').remove();
// }, 3000)

// setTimeout(function () {
//   $('.preloader').slideUp();
// }, 6000)

$(window).on('load', function(){
  $('.preloader').addClass('complete');
})
// $(window).on('load', function(){
//   $('.loader').fadeOut('slow');
// })



let slogantext = document.body.getElementsByClassName('sloganText')[0];
let bb = slogantext.querySelector('h1').textContent;


let rect = document.getElementsByClassName('rectangel1')[0];
let footer = document.querySelector('footer')
let info = footer.getElementsByClassName('icon')[1];
let pop = document.body.getElementsByClassName('popUp')[0];
let scroll0 = document.getElementById('mtavari')
imgscroll = document.getElementById('imgscroll');
console.log(imgscroll)
$('.fa.fa-arrow-circle-right').click(function () {
  $('.popUp').toggleClass('active')
})



let footerLast = footer.nextElementSibling;
let up = footerLast.children[1];

up.onclick = function () {
  window.scrollTo(0, 0)
}
scroll0.onclick = function () {
  window.scrollTo(0, 0)
}
imgscroll.onclick = function () {
  window.scrollTo(0, 0)
}


let phone = document.getElementById('phoneid');
let tel = document.getElementById('tel');
phone.onmouseover = function () {
  this.style.opacity = '0.6';
  tel.style.marginLeft = '20px';
  tel.style.textDecoration = 'underline';
  tel.style.color = 'tomato';

}

phone.onmouseout = function () {
  this.style.opacity = '1';
  tel.style.marginLeft = '0px';
  tel.style.color = '#f2f2f2';
  tel.style.textDecoration = 'none';
}

let arrow = document.getElementById('arrow');
let impinfo = document.getElementById('impinfo');
arrow.onmouseover = function () {
  this.style.opacity = '0.6';
  impinfo.style.marginLeft = '20px';
  impinfo.style.textDecoration = 'underline';
  impinfo.style.color = 'tomato';

}

arrow.onmouseout = function () {
  this.style.opacity = '1';
  impinfo.style.marginLeft = '0px';
  impinfo.style.color = '#f2f2f2';
  impinfo.style.textDecoration = 'none';
}
