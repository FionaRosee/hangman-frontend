<template>
  <h1>Wordlist</h1>
  <div class="container-fluid">
    <add-wordlist :wordEntities="this.wordEntities" @created="this.loadWords"></add-wordlist>
  </div>
  <word-description></word-description>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Length</th>
      <th scope="col">Difficulty</th>
      <th scope="col">word</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="wordEntity in wordEntities" :key="wordEntity.id">
      <th scope="row">{{wordEntity.id}}</th>
      <td>{{wordEntity.word.length}}</td>
      <td>{{wordEntity.difficulty}}</td>
      <td>{{wordEntity.word}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import WordDescription from '@/components/WordDescription'
import AddWordlist from '@/components/AddWordList'
import { loadWordList } from '@/util'

export default {
  name: 'Word',
  components: { AddWordlist, WordDescription },
  data () {
    return {
      wordEntities: [

      ]
    }
  },
  mounted () {
    this.loadWords()
  },
  methods: {
    async loadWords () {
      this.wordEntities = await loadWordList()
    }

  }

}
</script>

<style scoped>

</style>
