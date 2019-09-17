<template>
  <article>
    <div class="carousel">
      <b-carousel :id="'gallery-' + sliderId"
      :interval="4000"
      class="fade-carousel">
        <template v-for="(img, index) in gallery">
          <b-carousel-slide :img-src="require(`@/assets/img/portfolio/${img}`)" v-bind:key="index">
            <!--a :data-fancybox="encodeURI(title)"
              :href="require(`@/assets/img/portfolio/xl/${img}`)"
              :data-fancybox-title="title"
              :data-caption="`<span>${ title }</span><a href=&quot;${ projectURL }&quot;>${ projectURL }</a>`"
              :class="{ active: index === 0 }"
              class="carousel-item">
              <img :src="require(`@/assets/img/portfolio/${img}`)" alt="AMG" class="d-block w-100" />
            </a-->
          </b-carousel-slide>
        </template>
      </b-carousel>
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
    projectURL: String,
    sliderId: Number
  }
}
</script>

<style lang="scss" scoped>
</style>
