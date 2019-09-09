<template>
  <article>
    <div class="carousel">
      <b-carousel :id="'gallery-' + sliderId"
      v-model="slide"
      :interval="4000"
      class="fade-carousel">
        <b-carousel-slide v-for="(img, index) in gallery" v-bind:key="index"
          :img-src="require(`@/assets/img/portfolio/${img}`)">
          <!--a :data-fancybox="encodeURI(title)"
            :href="require(`@/assets/img/portfolio/xl/${img}`)"
            :data-fancybox-title="title"
            :data-caption="`<span>${ title }</span><a href=&quot;${ projectURL }&quot;>${ projectURL }</a>`"
            :class="{ active: index === 0 }"
            class="carousel-item">
            <img :src="require(`@/assets/img/portfolio/${img}`)" alt="AMG" class="d-block w-100" />
          </a-->
        </b-carousel-slide>
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
    projectURL: String
  },
  data () {
    return {
      sliderId: Math.round((Math.random() * 100)),
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    open (e) {
      // fancyBox(e.target, this.gallery);
    }
  },
  mounted () {
    this.gallery = this.gallery.map(url => {
      return { url }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
