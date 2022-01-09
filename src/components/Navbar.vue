<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="nav-link" :to="{ name: 'Instructions' }">Instructions</router-link>
          <router-link class="nav-link" :to="{ name: 'WordList' }">Word List</router-link>
        </div>
      </div>
      <div v-if="name">
        <span>Welcome, {{ name }}!</span>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  props: {
    name: String
  }
}
</script>

<style scoped>
span {
  color: rgba(255, 255, 255, 0.55);
}
</style>
