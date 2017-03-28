$(document).ready(function() {
  console.log('bitches');
  setTimeout(function() {
    $('#name').addClass('magictime vanishIn');
  }, 500);
  const controller = new ScrollMagic.Controller();
  const scene = new ScrollMagic.Scene({
    triggerElement: '#name',
    offset: 700, //start next section after 700px of scrolling
    duration: 100
  }).setPin('.about-me')
  controller.addScene(scene);
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: '.about-me',
    offset: 300,
    duration: 100
  }).setPin('.skills');
  controller.addScene(sceneTwo);
}); //end of document.ready
