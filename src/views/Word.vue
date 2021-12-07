<template>
  <h1>Wordlist</h1>
  <button class="btn btn-primary" type="add">add</button>
  <button class="btn btn-primary" type="delete">delete</button>
  <button class="btn btn-primary" type="change">change</button>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">Numbering</th>
      <th scope="col">Difficulty</th>
      <th scope="col">Length</th>
      <th scope="col">Word</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1</td>
      <td>3</td>
      <td>dog</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>1</td>
      <td>3</td>
      <td>cat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>4</td>
      <td>9</td>
      <td>cheesecake</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Word'
}
</script>

<style scoped>

</style>
