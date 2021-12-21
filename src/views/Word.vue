<template>
  <h1>Wordlist</h1>
  <div class="container-fluid">
    <word-list :wordEntities="this.wordEntities"></word-list>
  </div>
  <add-word-list></add-word-list>
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
/* import Wordlist from '@/components/Wordlist'
import AddWordList from '@/components/AddWordList' */
export default {
  name: 'Word',
  data () {
    return {
      wordEntities: [

      ]
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/words'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(word => {
        this.wordEntities.push(word)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
