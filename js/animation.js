// init controller
var controller = new ScrollMagic.Controller();
// build scene
new ScrollMagic.Scene({
    triggerElement: "#reveal1",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#reveal1", "visible") // add class to reveal
//.addIndicators() // add indicators (requires plugin)
.addTo(controller);



const startAnimation = () => {
  // Lag en timeline instans
  const timeline = gsap.timeline();

  // Main nav
  //timeline.from('.main-nav', { duration: 0.5 });
  timeline.from('.main-nav-hjem', { duration: 0.4, x: -2500 });
  timeline.from('.main-nav-ommeg', { duration: 0.4, x: -2500 });
  timeline.from('.main-nav-cv', { duration: 0.4, x: -2500 });
  timeline.from('.main-nav-kontakt', { duration: 0.4, x: -2500 });

  // Bokser
  /*
timeline.from('.showcase', { duration: 0.4, x: 2500 });
timeline.from('.top-box-a', { duration: 0.4, x: 2500 });
timeline.from('.bokser .boks', { duration: 0.4, opacity: 0 });

// Portefølje
timeline.from('.portfolio-header', { duration: 1, opacity: 0 });

timeline.from('.port-1', { duration: 0.4, opacity: 0 });
timeline.from('.port-2', { duration: 0.4, opacity: 0 });
timeline.from('.port-3', { duration: 0.4, opacity: 0 });

/*
timeline.from('.port-4', { duration: 0.4, opacity: 0 });
timeline.from('.port-5', { duration: 0.4, opacity: 0 });
timeline.from('.port-6', { duration: 0.4, opacity: 0 });
*/

  // Footer
  //timeline.from('footer', { duration: 1, opacity: 0 });
};

startAnimation();
