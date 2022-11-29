import Reveal from "reveal.js";
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/sky.css'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm'
import confetti from 'canvas-confetti'

const deck = new Reveal()

deck.initialize({
  hash: true,
  plugins: [
    RevealNotes
  ]
})

deck.on('slidetransitionend', event => {
  let curSlide = deck.getIndices()
  if (curSlide.h == 4 && curSlide.v == 1) {
    // confetti({
    //   spread: 180,
    //   particleCount: 300
    // });
    var end = Date.now() + (10  * 1000);

    // go Buckeyes!
    var colors = ['#610469', '#ffffff'];

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
  }
})