<template>
  <article>
    <div id="gallery-0" data-ride="carousel" class="carousel fade-carousel slide">
      <div v-for="(img, index) in gallery" v-bind:key="index" class="carousel-inner">
        <a :data-fancybox="encodeURI(title)"
          :href="require(`@/assets/img/portfolio/xl/${img}`)"
          :data-fancybox-title="title"
          :data-caption="`<span>${ title }</span><a href=&quot;${ projectURL }&quot;>${ projectURL }</a>`"
          :class="{ active: index === 0 }"
          class="carousel-item">
          <img :src="require(`@/assets/img/portfolio/${img}`)" alt="AMG" class="d-block w-100" />
        </a>
      </div>
      <font-awesome-icon icon="search-plus" />
    </div>
    <a :href="projectURL" target="_blank" rel="nofollow" class="info"><h3>{{ title }}</h3></a>
  </article>
</template>

<script>
export default {
  props: {
    gallery: Array,
    title: String,
    projectURL: String
  },
  data () {
    return { }
  }
}
</script>

<style lang="scss" scoped>

</style>
