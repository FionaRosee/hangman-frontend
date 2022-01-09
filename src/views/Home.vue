<template>
  <form class="form-name">
    <div class="text-center mb-4">
      <img class="mb-4" :src="logo" alt="logo">
      <h1 class="h3 mb-3 font-weight-normal">Hangman</h1>
      <p>My personal attempt at programming the game classic "Hangman".</p>
    </div>
    <div class="form-label-group">
      <input v-model="name" type="text" id="name" class="form-control text-center" placeholder="Name" required autofocus>
      <label for="name">Name</label>
    </div>
    <router-link to="Game">
      <button class="btn btn-lg btn-dark btn-block" type="submit" @click="saveName">Start</button>
    </router-link>
    <p class="mt-5 mb-3 text-muted text-center">Created with ❤️ by Alicia Sternkopf & Fiona Fischer</p>
  </form>
</template>

<script lang="js">
import logo from '@/assets/logo.png'

export default {
  name: 'Home',
  props: {
    currentName: String
  },
  data () {
    return {
      logo: logo,
      name: ''
    }
  },
  methods: {
    saveName () {
      this.$emit('name', this.name)
    }
  },
  mounted () {
    if (this.currentName !== '') { this.name = this.currentName }
  }
}

</script>

<style scoped>

.form-name {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  height: 3.125rem;
  padding: .75rem;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }

  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }

  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>
