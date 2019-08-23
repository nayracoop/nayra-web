<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  $img-path: '~/src/assets/img/';
  $backgrounds-path: '~/src/assets/img/bg/';
  $font-path: '~/src/assets/fonts/';

  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
  @import 'assets/scss/main';
</style>
