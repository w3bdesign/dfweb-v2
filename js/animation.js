const startScrollMagic = () => {
  // init controller
  const controller = new ScrollMagic.Controller();
  // build scene
  const revealElements = document.getElementsByClassName('reveal');
  for (let i = 0; i < revealElements.length; i++) {
    // create a scene for each element
    const myOffset = i === 7 ? -100 : 100;
    new ScrollMagic.Scene({
      triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
      offset: myOffset, // default = 100
      reverse: false, // only do once
      triggerHook: 0.9
    })
      .setClassToggle(revealElements[i], 'visible') // add class toggle
      .addTo(controller);
  }
};

const startAnimation = () => {
  // Lag en timeline instans
  const timeline = gsap.timeline();

  // Main nav
  timeline.from('.main-nav-hjem', { duration: 0.4, x: -2500 });
  timeline.from('.main-nav-ommeg', { duration: 0.4, x: -2500 });
  timeline.from('.main-nav-cv', { duration: 0.4, x: -2500 });
  timeline.from('.main-nav-kontakt', { duration: 0.4, x: -2500 });
};

startAnimation();
startScrollMagic();
