<template>
  <section id="trabajos" class="container-fluid works">
    <div class="container">
      <h2>{{ $t('portfolio.titulo') }}</h2>
      <p>{{ $t('portfolio.bajada') }}</p>
      <ul class="tags-list">
        <li v-for="(value, category, index) in categories" v-bind:key="index">
          <app-portfolio-category :name="category" v-model="categories[category]" />
        </li>
      </ul>
      <b-row class="portfolio">
        <template v-for="(item, index) in portfolio">
          <b-col v-bind:key="index" xs="12" sm="12" md="6" lg="6" xl="4" v-if="!filtered || item.tags.reduce((current, item) => (current || categories[item]), false)">
            <app-portfolio-card :gallery="item.gallery" :title="item.title" :projectURL="item.url" />
          </b-col>
        </template>
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
      categories: {},
      portfolio: [
        {
          title: 'AMG 1',
          url: '',
          gallery: [ 'amg-1.jpg', 'amg-2.jpg', 'amg-3.jpg' ],
          tags: [ 'web', 'e-commerce' ]
        },
        {
          title: 'AMG 2',
          url: '',
          gallery: [ 'amg-1.jpg', 'amg-2.jpg', 'amg-3.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'AMG 3',
          url: '',
          gallery: [ 'amg-1.jpg', 'amg-2.jpg', 'amg-3.jpg' ],
          tags: [ 'arte' ]
        }
      ]
    }
  },
  computed: {
    filtered () {
      return Object.values(this.categories).reduce((current, item) => (current || item), false)
    }
  },
  mounted () {
    this.categories = [...(new Set(this.portfolio.map(item => item.tags.join('|')).join('|').split('|')))].reduce((current, item) => {
      current[item] = false
      return current
    }, {})
  }
}
</script>

<style lang="sass" scoped>
</style>
