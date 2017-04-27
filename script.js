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
  })//end of scroll listener

  $('#header-one').hover(()=>{
    $('#description-one').toggleClass('open')
  });
  $('#header-two').hover(()=>{
    $('#description-two').toggleClass('open')
  });
  $('#header-three').hover(()=>{
    $('#description-three').toggleClass('open')
  });
  $('#header-four').hover(()=>{
    $('#description-four').toggleClass('open')
  });

  // $('.project-header').hover(()=>{
    // $('.project-description').toggleClass('open');
  // })
}); //end of document.ready
