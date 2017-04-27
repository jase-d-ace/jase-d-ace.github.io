$(document).ready(() => {
  setTimeout(() => {
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

  $('#header-one').hover(()=>{
    $('#description-one').toggleClass('open')
  });

  // $('.project-header').hover(()=>{
    // $('.project-description').toggleClass('open');
  // })
}); //end of document.ready
