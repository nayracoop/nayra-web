<template>
<div></div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    setLocale (locale) {
      import(`../translations/${locale}.json`).then(msgs => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
