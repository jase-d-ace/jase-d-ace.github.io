$(document).ready(() => {
  setTimeout(() => {
    $('#name').addClass('magictime vanishIn');
  }, 500);
  $(window).scroll(()=>{
    if($(window).scrollTop() > 700){
      $('.who-am-i').addClass('magictime vanishIn');
    }//end of vanishIn
    if($(window).scrollTop() > 1200){
      $('.skill-showcase').addClass('magictime vanishIn');
    }
    if($(window).scrollTop() > 1700){
      $('#description-one').addClass('magictime puffIn')
    }
    if($(window).scrollTop() > 2000){
      $('#description-two').addClass('magictime puffIn')
    }
    if($(window).scrollTop() > 2300){
      $('#description-three').addClass('magictime puffIn');
    }
    if($(window).scrollTop() > 2600) {
      $('#description-four').addClass('magictime puffIn');
    }
  })//end of scroll listener
}); //end of document.ready
