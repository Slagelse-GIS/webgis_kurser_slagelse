import Reveal from "reveal.js";
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/sky.css'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm'

const deck = new Reveal()

deck.initialize({
  hash: true,
  plugins: [
    RevealNotes
  ]
})