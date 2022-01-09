<template>
  <h1>Hangman</h1>
  <div>
    <p>Guess the word</p>
    <button class="btn btn-dark mx-1" :disabled="gameFinished || guessedLetters.indexOf(letter) !== -1" v-for="letter in alphabet" :key="letter" @click="setLetter(letter);">{{ letter.toUpperCase() }}</button>
    <p class="fs-3 my-3">{{guessingWord.join(" ")}}</p>
    <div id="name"></div>
    <img :src="hangmanImages[incorrectGuesses]" alt="hangman"/>
    <p v-show="gameLost">Game Over</p>
    <p v-show="gameWon">You won!</p>
    <button id="restart" @click="restart" type="button" class="btn btn-dark mt-3">Restart</button>
  </div>
</template>

<script>
import { loadWordList } from '@/util'
import picture0 from '@/assets/hangman/0.png'
import picture1 from '@/assets/hangman/1.png'
import picture2 from '@/assets/hangman/2.png'
import picture3 from '@/assets/hangman/3.png'
import picture4 from '@/assets/hangman/4.png'
import picture5 from '@/assets/hangman/5.png'
import picture6 from '@/assets/hangman/6.png'
import picture7 from '@/assets/hangman/7.png'
import picture8 from '@/assets/hangman/8.png'

export default {
  name: 'Game',
  data () {
    return {
      solution: '',
      guessedLetters: [],
      incorrectGuesses: 0,
      gameWon: false,
      gameLost: false,
      alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'],
      guessingWord: [],
      hangmanImages: [
        picture0,
        picture1,
        picture2,
        picture3,
        picture4,
        picture5,
        picture6,
        picture7,
        picture8
      ]
    }
  },
  computed: {
    gameFinished () {
      return this.gameWon || this.gameLost
    }
  },
  methods: {
    // get words
    async random () {
      const wordEntities = await loadWordList()
      this.solution = wordEntities[Math.floor(Math.random() * wordEntities.length)].word
      this.guessingWord = new Array(this.solution.length).fill('_')
      console.log(this.solution.length)
    },
    // letters
    setLetter (letter) {
      // Check if word contains letter
      if (this.solution.indexOf(letter) !== -1) {
        for (let i = 0; i < this.solution.length; i++) {
          if (letter === this.solution[i]) {
            this.guessingWord[i] = letter
          }
        }
        if (this.gameLost !== true && this.guessingWord.indexOf('_') === -1) {
          this.gameWon = true
        }
      } else {
        this.incorrectGuesses++
        if (this.incorrectGuesses === this.hangmanImages.length - 1) {
          console.log('Game Over')
          this.gameLost = true
        }
      }
      this.guessedLetters.push(letter)
    },
    async restart () {
      this.incorrectGuesses = 0
      this.gameWon = false
      this.gameLost = false
      this.guessedLetters = []
      await this.random()
    }
  }, // load the word in the backround
  mounted () {
    this.random()
  }

}
</script>

<style scoped>
img {
  width: 300px
}

button#restart {
  display: block;
  margin: 0 auto;
}
</style>
