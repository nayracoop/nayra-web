<template>
  <div>
    <app-header/>
    <app-cover/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '../components/Header'
import AppCover from '../components/Cover'
import AppFooter from '../components/Footer'

export default {
  components: {
    AppHeader,
    AppCover,
    AppFooter
  },
  data () {
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
</style>
