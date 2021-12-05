<template>
  <div class="home">
    <img alt="Vue logo" src="../../index.png" height="166" width="304"/>
    <HelloWorld msg="Hangman"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
