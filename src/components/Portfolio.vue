<template>
  <section id="trabajos" class="container-fluid works">
    <div class="container">
      <h2>Nuestro trabajo</h2>
      <p>Desarrollos web, web apps, juegos, desarrollos a medida, capacitaciones, e-commerce, animaciones, asesoramiento, proyectos propios, exposiciones, talleres.</p>
      <ul class="tags-list">
        <li>
          <input type="checkbox" id="web" name="web" class="sr-only" value="web" />
          <label for="web" class="btn btn-secondary">
            <font-awesome-icon :icon="['far', 'check-square']" />
            <font-awesome-icon :icon="['far', 'square']" />
            Web
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="e-commerce"
            name="e-commerce"
            class="sr-only"
            value="e-commerce"
          />
          <label for="e-commerce" class="btn btn-secondary">
            <font-awesome-icon :icon="['far', 'square']" />
            <font-awesome-icon :icon="['far', 'check-square']" />
            E-commerce
          </label>
        </li>
        <li>
          <input type="checkbox" id="medios" name="medios" class="sr-only" value="medios" />
          <label for="medios" class="btn btn-secondary">
            <font-awesome-icon :icon="['far', 'square']" />
            <font-awesome-icon :icon="['far', 'check-square']" />
            Medios
          </label>
        </li>
        <li>
          <input type="checkbox" id="apps" name="apps" class="sr-only" value="apps" />
          <label for="apps" class="btn btn-secondary">
            <font-awesome-icon :icon="['far', 'square']" />
            <font-awesome-icon :icon="['far', 'check-square']" />
            Apps
          </label>
        </li>
        <li>
          <input type="checkbox" id="arte" name="arte" class="sr-only" value="arte" />
          <label for="arte" class="btn btn-secondary">
            <font-awesome-icon :icon="['far', 'square']" />
            <font-awesome-icon :icon="['far', 'check-square']" />
            Arte
          </label>
        </li>
        <li>
          <input type="checkbox" id="otros" name="otros" class="sr-only" value="otros" />
          <label for="otros" class="btn btn-secondary">
            <font-awesome-icon :icon="['far', 'square']" />
            <font-awesome-icon :icon="['far', 'check-square']" />
            Otros
          </label>
        </li>
      </ul>
      <div class="row portfolio web medios arte e-commerce otros">
        <article class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 web">
          <div id="gallery-0" data-ride="carousel" class="carousel fade-carousel slide">
            <div class="carousel-inner">
              <a
                data-fancybox="foto-0"
                href="img/portfolio/xl/amg-1.jpg"
                data-fancybox-title="AMG"
                data-caption="<span>AMG</span><a href=&quot;https://www.amg.com.ar/&quot;>https://www.amg.com.ar/</a>"
                class="carousel-item"
              >
                <img src="img/portfolio/amg-1.jpg" alt="AMG" class="d-block w-100" />
              </a>
              <a
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
              </a>
            </div>
            <font-awesome-icon icon="search-plus" />
          </div>
          <a href="https://www.amg.com.ar/" target="_blank" rel="nofollow" class="info">
            <h3>AMG</h3>
          </a>
        </article>
      </div>
    </div>
    <a href="#company-info" class="to-top nav-link">
      <font-awesome-icon icon="arrow-up" />
    </a>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
</style>
