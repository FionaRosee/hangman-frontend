<template>
  <h1>Wordlist</h1>
  <div class="container-fluid">
    <add-wordlist :wordEntities="this.wordEntities" @created="this.loadWords"></add-wordlist>
  </div>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">length</th>
      <th scope="col">difficulty</th>
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
import AddWordlist from '@/components/AddWordList'
import { loadWordList } from '@/util'

export default {
  name: 'WordList',
  components: { AddWordlist },
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
      this.wordEntities = (await loadWordList()).sort((a, b) => a.id - b.id)
    }

  }

}
</script>

<style scoped>

</style>
