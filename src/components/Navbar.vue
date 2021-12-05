<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Start</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/word">Word</router-link>
          <router-link class="nav-link" to="/impressum">Impressum</router-link>
<!--          <a class="nav-link active" aria-current="page" href="#">Home</a>-->
<!--          <a class="nav-link" href="#">Highscore</a>-->
<!--          <a class="nav-link" href="#">Word</a>-->
<!--          <a class="nav-link disabled">Impressum</a>-->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
