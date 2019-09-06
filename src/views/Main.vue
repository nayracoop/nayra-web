<template>
  <div id="wrapper">
    <app-header/>
    <app-cover/>
    <app-about/>
    <app-portfolio/>
    <app-contact/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '../components/Header'
import AppCover from '../components/Cover'
import AppAbout from '../components/About'
import AppPortfolio from '../components/Portfolio'
import AppContact from '../components/Contact'
import AppFooter from '../components/Footer'

export default {
  components: {
    AppHeader,
    AppCover,
    AppAbout,
    AppPortfolio,
    AppContact,
    AppFooter
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
</style>
