<template>
  <article :class="{ 'has-overlay': hasOverlay }">
    <div class="carousel">
      <b-carousel :id="'gallery-' + sliderId"
      :interval="4000"
      class="fade-carousel">
        <template v-for="(img, index) in gallery">
          <b-carousel-slide :img-src="require(`@/assets/img/portfolio/${img}`)" v-bind:key="index">
          </b-carousel-slide>
        </template>
      </b-carousel>
      <font-awesome-icon icon="search-plus" />
      <div v-if="hasOverlay" class="project-overlay">
        <p v-if="role" class="project-role">{{ role }}</p>
        <p
          v-for="(paragraph, index) in shortDescription"
          :key="index"
          class="project-description"
        >{{ paragraph }}</p>
        <p v-if="technologies && technologies.length" class="project-tech">
          <span>{{ techLabel }}</span>
          {{ technologies.join(', ') }}
        </p>
      </div>
    </div>
    <a v-if="projectURL" :href="projectURL" target="_blank" rel="nofollow" class="info"><h3>{{ title }}</h3></a>
    <div v-else class="info"><h3>{{ title }}</h3></div>
  </article>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Array,
      default: () => []
    },
    title: String,
    projectURL: String,
    sliderId: Number,
    role: {
      type: String,
      default: ''
    },
    description: {
      type: Array,
      default: () => []
    },
    technologies: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    hasOverlay () {
      return !!(this.role || (this.description && this.description.length) || (this.technologies && this.technologies.length))
    },
    shortDescription () {
      // Keep hover readable: first paragraph only
      return (this.description || []).slice(0, 1)
    },
    techLabel () {
      return this.$t('Technologies used')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
