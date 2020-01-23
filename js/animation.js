const startScrollMagic = () => {
  // init controller
  var controller = new ScrollMagic.Controller();
  // build scene
  new ScrollMagic.Scene({
    triggerElement: '#reveal1',
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: '80%', // hide 10% before exiting view (80% + 10% from bottom)
    offset: 300 // move trigger to center of element
  })
    .setClassToggle('#reveal1', 'visible') // add class to reveal
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#reveal2',
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: '80%', // hide 10% before exiting view (80% + 10% from bottom)
    offset: 300 // move trigger to center of element
  })
    .setClassToggle('#reveal2', 'visible') // add class to reveal
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#reveal3',
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: '80%', // hide 10% before exiting view (80% + 10% from bottom)
    offset: 100 // move trigger to center of element
  })
    .setClassToggle('#reveal3', 'visible') // add class to reveal
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#reveal4',
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: '80%', // hide 10% before exiting view (80% + 10% from bottom)
    offset: -100 // move trigger to center of element
  })
    .setClassToggle('#reveal4', 'visible') // add class to reveal
    .addTo(controller);
};

const startAnimation = () => {
  // Lag en timeline instans
  const timeline = gsap.timeline();

  // Main nav
  //timeline.from('.main-nav', { duration: 0.5 });
  timeline.from('.main-nav-hjem', { duration: 0.4, x: -2500 });
  timeline.from('.main-nav-ommeg', { duration: 0.4, x: -2500 });
  timeline.from('.main-nav-cv', { duration: 0.4, x: -2500 });
  timeline.from('.main-nav-kontakt', { duration: 0.4, x: -2500 });
};

startAnimation();
startScrollMagic();
