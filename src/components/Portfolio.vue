<template>
  <section id="trabajos" class="container-fluid works">
    <div class="container">
      <h2>Nuestro trabajo</h2>
      <p>Desarrollos web, web apps, juegos, desarrollos a medida, capacitaciones, e-commerce, animaciones, asesoramiento, proyectos propios, exposiciones, talleres.</p>
      <ul class="tags-list">
        <li v-for="(category, index) in categories" v-bind:key="index">
          <app-portfolio-category :name="category.name" :id="index" />
        </li>
      </ul>
      <b-row class="portfolio" :class="'web medios arte e-commerce otros'">
        <b-col v-for="(item, index) in portfolio" v-bind:key="index" xs="12" sm="12" md="6" lg="6" xl="4">
          <app-portfolio-card :gallery="item.gallery" :title="item.title" :projectURL="item.url" />
        </b-col>
      </b-row>
    </div>
    <a href="#company-info" class="to-top nav-link">
      <font-awesome-icon icon="arrow-up" />
    </a>
  </section>
</template>

<script>
import AppPortfolioCard from '../components/snippets/PortfolioCard'
import AppPortfolioCategory from '../components/snippets/PortfolioCategory'

export default {
  components: {
    AppPortfolioCard,
    AppPortfolioCategory
  },
  data () {
    return {
      categories: [
        { name: 'Web', slug: 'web', active: false },
        { name: 'E-commerce', slug: 'e-commerce', active: false },
        { name: 'Medios', slug: 'medios', active: false },
        { name: 'Apps', slug: 'apps', active: false },
        { name: 'Arte', slug: 'arte', active: false },
        { name: 'Otros', slug: 'otros', active: false }
      ],
      portfolio: [
        {
          title: 'AMG',
          url: '',
          gallery: [ 'amg-1.jpg', 'amg-2.jpg', 'amg-3.jpg' ],
          categories: [ 'web' ]
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
