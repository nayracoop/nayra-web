<template>
  <article class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 web">
    <div id="gallery-0" data-ride="carousel" class="carousel fade-carousel slide">
      <div class="carousel-inner">
        <a data-fancybox="foto-0"
          href="img/portfolio/xl/amg-1.jpg"
          data-fancybox-title="AMG"
          :data-caption="`<span>${ title }</span><a href=&quot;${ projectURL }&quot;>${ projectURL }</a>`"
          class="carousel-item">
          <img src="img/portfolio/amg-1.jpg" alt="AMG" class="d-block w-100" />
        </a>
              <!-- <a
                data-fancybox="foto-0"
                href="img/portfolio/xl/amg-2.jpg"
                data-fancybox-title="AMG"
                data-caption="<span>AMG</span><a href=&quot;https://www.amg.com.ar/&quot;>https://www.amg.com.ar/</a>"
                class="carousel-item"
              >
                <img src="img/portfolio/amg-2.jpg" alt="AMG" class="d-block w-100" />
              </a>
              <a
                data-fancybox="foto-0"
                href="img/portfolio/xl/amg-3.jpg"
                data-fancybox-title="AMG"
                data-caption="<span>AMG</span><a href=&quot;https://www.amg.com.ar/&quot;>https://www.amg.com.ar/</a>"
                class="carousel-item active"
              >
                <img src="img/portfolio/amg-3.jpg" alt="AMG" class="d-block w-100" />
              </a> -->
      </div>
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="search-plus"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="svg-inline--fa fa-search-plus fa-w-16"
        >
        <path
          fill="currentColor"
          d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"
        />
        </svg>
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
  }
}
</script>

<style lang="scss" scoped>

</style>