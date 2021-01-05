<template>
  <section class="contact" id="contacto">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h2>{{ $t('contact.title') }}</h2>
          <p>
            {{ $t('contact.content[0]') }}
            <br />
            {{ $t('contact.content[1]') }}
            <br />
            {{ $t('contact.content[2]') }} <a class="email" href="mailto:info@nayra.coop">{{ $t('vCard.emailAddress') }}</a>
          </p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="10" xl="10">
          <b-form
            action="send.php"
            :class="{ sending, done }"
            method="post"
            @submit.prevent="sendMessage"
          >
            <b-row>
              <b-col cols="12" sm="12" md="6" lg="6" xl="6">
                <label class="sr-only" for="name">{{ $t('Name') }}</label>
                <input
                  required
                  type="text"
                  class="form-control form-control-lg mb-2 mr-sm-2 mb-sm-0"
                  v-model="contactName"
                  name="name"
                  id="name"
                  :placeholder="$t('Your name')"
                />
              </b-col>
              <b-col cols="6">
                <label class="sr-only" for="email">{{ $t('Email') }}</label>
                <input
                  required
                  type="email"
                  class="form-control form-control-lg mb-2 mr-sm-2 mb-sm-0"
                  v-model="contactEmail"
                  name="email"
                  id="email"
                  :placeholder="$t('Your email')"
                />
              </b-col>
              <b-col cols="12">
                <label class="sr-only" for="message">{{ $t('Message') }}</label>
                <textarea
                  required
                  class="form-control form-control-lg"
                  v-model="contactMessage"
                  name="message"
                  id="message"
                  rows="8"
                  cols="80"
                  :placeholder="$t('Your message')"
                ></textarea>
              </b-col>
            </b-row>
            <b-button type="submit" class="btn btn-primary btn-lg">{{ $t('Send') }}</b-button>
            <span id="messages">{{ $t(output) }}</span>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      contactName: '',
      contactSurname: '',
      contactEmail: '',
      contactMessage: '',
      output: '',
      sending: false,
      done: false
    }
  },
  methods: {
    sendMessage () {
      if (!this.done) {
        const formData = new FormData()

        formData.append('name', this.contactName)
        formData.append('surname', this.contactSurname)
        formData.append('email', this.contactEmail)
        formData.append('message', this.contactMessage)
        this.sending = true

        this.$http
          .post('/send.php', formData)
          .then(response => {
            this.sending = false
            console.log(response)
            if (response.data.enviado) {
              this.done = true
              this.output = 'Message sent. Thank you!'
            } else {
              this.output = response.data.mensaje
            }
          })
          .catch(e => {
            this.sending = false
            this.output = 'An error occurred while trying to send your message.'
          })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
