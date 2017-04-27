$(document).ready(function() {
  console.log('bitches');
  setTimeout(function() {
    $('#name').addClass('magictime vanishIn');
  }, 500);
  $(window).scroll(()=>{
    if($(window).scrollTop() > 700){
      $('.who-am-i').addClass('magictime vanishIn');
    }//end of vanishIn
    if($(window).scrollTop() > 1200){
      $('.skills').addClass('magictime vanishIn');
    }
  })//end of scroll listener

  $('.project-header').mouseenter(()=>{
    $('.project-description').removeClass('closed');
    $('.project-description').addClass('open');
  }).mouseout(()=>{
    $('.project-description').addClass('closed');
    $('.project-description').removeClass('open');
  })
}); //end of document.ready
