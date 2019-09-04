<template>
  <label>
    <input type="checkbox" class="sr-only" :checked="value" @change="$emit('input', $event.target.checked)" />
    <b-button variant="secondary" tag="div">
      <font-awesome-icon v-if="!value" :icon="['far', 'square']" />
      <font-awesome-icon v-else :icon="['far', 'check-square']" />
      {{ capitalizedName }}
    </b-button>
  </label>
</template>

<script>
export default {
  props: {
    name: String,
    value: true
  },
  data () {
    return { }
  },
  computed: {
    capitalizedName () {
      return this.name.charAt(0).toUpperCase() + this.name.substr(1).toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
