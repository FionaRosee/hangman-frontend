<template>
  <h1>Hangman</h1>
  <body>
  <div class="text">
    <p>Guess the word</p>
    <div id="playerboard"></div>
    <button type="button" class="btn btn-dark">Start</button>
    <button onclick="setLetter('A');">A</button>
    <button onclick="setLetter('B');">B</button>
    <button onclick="setLetter('C');">C</button>
    <button onclick="setLetter('D');">D</button>
    <button onclick="setLetter('E');">E</button>
    <button onclick="setLetter('F');">F</button>
    <button onclick="setLetter('G');">G</button>
    <button onclick="setLetter('H');">H</button>
    <button onclick="setLetter('I');">I</button>
    <button onclick="setLetter('J');">J</button>
    <button onclick="setLetter('K');">K</button>
    <button onclick="setLetter('L');">L</button>
    <button onclick="setLetter('M');">M</button>
    <button onclick="setLetter('N');">N</button>
    <button onclick="setLetter('O');">O</button>
    <button onclick="setLetter('P');">P</button>
    <button onclick="setLetter('Q');">Q</button>
    <button onclick="setLetter('R');">R</button>
    <button onclick="setLetter('S');">S</button>
    <button onclick="setLetter('T');">S</button>
    <button onclick="setLetter('U');">S</button>
    <button onclick="setLetter('V');">S</button>
    <button onclick="setLetter('W');">S</button>
    <button onclick="setLetter('X');">S</button>
    <button onclick="setLetter('Y');">S</button>
    <button onclick="setLetter('Z');">S</button>
    <div id="name"></div>
  </div>
  </body>
</template>

<script>
import { loadWordList } from '@/util'

export default {
  name: 'Game',
  data () {
    return {
      solution: ''
    }
  },
  methods: {
    async random () {
      const wordEntities = await loadWordList()
      this.solution = wordEntities[Math.floor(Math.random() * wordEntities.length)]
    },
    setLetter (letter) {
      document.getElementById('name').innerHTML = document.getElementById('name').innerHTML + letter
    }
  },
  mounted () {
    this.random()
  }
}
</script>

<style scoped>

</style>
