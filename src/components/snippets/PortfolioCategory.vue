<template>
  <!-- <div>
    <input type="checkbox" :id="encodeURI(name)" :name="encodeURI(name)" class="sr-only" :value="encodeURI(name)" />
          <label :for="encodeURI(name)" class="btn btn-secondary">
            <font-awesome-icon :icon="['far', 'square']" />
            <font-awesome-icon :icon="['far', 'check-square']" />
            {{ name }}
          </label>
  </div> -->
  <label>
    <input type="checkbox" class="sr-only" />
    <b-button variant="secondary">
      <font-awesome-icon :icon="['far', 'square']" />
      <font-awesome-icon :icon="['far', 'check-square']" />
      {{ name }}
    </b-button>
  </label>
</template>

<script>
export default {
  props: {
    name: String
  },
  data () {
    return { }
  }
}
</script>

<style lang="scss" scoped>

</style>
