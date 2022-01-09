<template>
  <button type="button" class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#add-word-offcanvas">Add Word</button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="add-word-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Word</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas"
              aria-label="Close"></button></div>

    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="add-word-form" novalidate>
        <div class="mb-3">
          <label for="length" class="form-label">Length</label>
          <input type="text" class="form-control" id="length" v-model="length" required>
          <div class="invalid-feedback">
            Please provide the length.
          </div>
        </div>
        <div class="mb-3">
          <label for="difficulty" class="form-label">Difficulty</label>
          <select id="difficulty" class="form-select" v-model="difficulty" required>
            <option value="" selected disabled>Choose...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid difficulty.
          </div>
        </div>
        <div class="mb-3">
          <label for="Word" class="form-label">Word</label>
          <input type="text" class="form-control" id="word" v-model="word" required>
          <div class="invalid-feedback">
            Please provide the word.
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="addWord">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddWordlist',
  data () {
    return {
      id: '',
      length: '',
      difficulty: '',
      word: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async addWord () {
      if (this.validate) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/words'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const word = JSON.stringify({
          id: this.id,
          length: this.length,
          difficulty: this.difficulty,
          word: this.word
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: word,
          redirect: 'follow'
        }

        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        console.log('test2')
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('add-word-list')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}

/*
 validate () {
    let valid= true
      var forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms)
        .forEach(function (form)) {
        form.addEventListener('submit', function (event))
        {
          if (!form.checkValidity()) {
            valid = false
            event.preventDefault() //???
            event.stopImmediatePropagation() //??
          }
          form.classList.add('was-validated')
        }, false)
  })
return valid
},
*/
</script>

<style scoped>
.btn.btn-dark {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
