import Reveal from "reveal.js";
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/night.css'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm'
import confetti from 'canvas-confetti'
import '/node_modules/flag-icons/css/flag-icons.min.css'

const deck = new Reveal()

deck.initialize({
  hash: true,
  plugins: [
    RevealNotes
  ]
})

deck.on('slidetransitionend', event => {
  let curSlide = deck.getIndices()
  if (curSlide.h == 8 && curSlide.v == 1) {
    var end = Date.now() + (10  * 1000);
    var colors = ['#79EBEA', '#53EB4F'];
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  } else if (curSlide.h == 9 && curSlide.v == 0) {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  }
})