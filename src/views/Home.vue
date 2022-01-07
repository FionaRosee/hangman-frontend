<template>
  <div class="home">
    <img alt="Vue logo" src="../../index.png" height="166" width="304"/>
    <HelloWorld msg="Hangman"/>
    <form class="w3-container">
      <label>Name</label>
      <input class="w3-input" type="text">
    </form>
  </div>
</template>

<script lang="js">

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}

</script>

<style scoped>

</style>
