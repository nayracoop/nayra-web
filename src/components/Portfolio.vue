<template>
  <section id="trabajos" class="works">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h2>{{ $t('portfolio.title') }}</h2>
          <p>{{ $t('portfolio.content') }}</p>
          <ul class="tags-list">
            <li v-for="(value, category, index) in categories" v-bind:key="index">
              <app-portfolio-category :name="category" v-model="categories[category]" />
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="portfolio">
        <template v-for="(item, index) in portfolio">
          <b-col v-bind:key="index" xs="12" sm="12" md="6" lg="6" xl="4" v-if="!filtered || item.tags.reduce((current, item) => (current || categories[item]), false)">
            <app-portfolio-card :gallery="item.gallery" :title="item.title" :projectURL="item.url" />
          </b-col>
        </template>
      </b-row>
    </b-container>
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
          title: 'AMG',
          url: '',
          gallery: [ 'amg-1.jpg', 'amg-2.jpg', 'amg-3.jpg' ],
          tags: [ 'web', 'e-commerce' ]
        },
        {
          title: 'AMG Energía',
          url: '',
          gallery: [ 'amg-energia-1.jpg', 'amg-energia-2.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'Matanza Digital',
          url: '',
<<<<<<< HEAD
          gallery: [ 'amg-1.jpg', 'amg-2.jpg', 'amg-3.jpg' ],
          tags: [ 'art' ]
=======
          gallery: [ 'matanza-digital-1.jpg', 'matanza-digital-2.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Andrés & Asociados',
          url: '',
          gallery: [ 'andres-y-asociados-1.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'El Tenedor Rosa',
          url: '',
          gallery: [ 'el-tenedor-rosa-1.jpg', 'el-tenedor-rosa-2.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'P2B Estudio',
          url: '',
          gallery: [ 'p2b-1.jpg', 'p2b-2.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Propuestas & Servicios para Casamientos',
          url: '',
          gallery: [ 'propuestas-1.jpg', 'propuestas-2.jpg', 'propuestas-3.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'A. Rinkel',
          url: '',
          gallery: [ 'arinkel-1.jpg', 'arinkel-2.jpg', 'arinkel-3.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Böron',
          url: '',
          gallery: [ 'boron-1.jpg', 'boron-2.jpg', 'boron-3.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Code of Life',
          url: '',
          gallery: [ 'code-of-life-1.jpg', 'code-of-life-2.jpg', 'code-of-life-3.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Estudio Recondo',
          url: '',
          gallery: [ 'recondo-1.jpg', 'recondo-2.jpg', 'recondo-3.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Interturis',
          url: '',
          gallery: [ 'interturis-1.jpg', 'interturis-2.jpg', 'interturis-3.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Crea tu súper Día del Niño',
          url: '',
          gallery: [ 'dia-del-nino-1.jpg', 'dia-del-nino-2.jpg', 'dia-del-nino-3.jpg', 'dia-del-nino-4.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Equipamiento SIX',
          url: '',
          gallery: [ 'equipamiento-six-1.jpg', 'equipamiento-six-2.jpg', 'equipamiento-six-3.jpg', 'equipamiento-six-4.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Satanizador',
          url: '',
          gallery: [ 'satanizador-1.jpg', 'satanizador-2.jpg', 'satanizador-3.jpg', 'satanizador-4.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Transforma tu aventura',
          url: '',
          gallery: [ 'transforma-tu-aventura-1.jpg', 'transforma-tu-aventura-2.jpg', 'transforma-tu-aventura-3.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Animaciones OSDE',
          url: '',
          gallery: [ 'osde-1.jpg', 'osde-2.jpg', 'osde-3.jpg', 'osde-4.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Mumi',
          url: '',
          gallery: [ 'mumi-1.jpg', 'mumi-2.jpg', 'mumi-3.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Sun-Fi',
          url: '',
          gallery: [ 'sun-fi-1.jpg' ],
          tags: [ 'arte' ]
        },
        {
          title: 'Desplazamientos',
          url: '',
          gallery: [ 'desplazamientos-1.jpg', 'desplazamientos-2.jpg', 'desplazamientos-3.jpg' ],
          tags: [ 'arte' ]
>>>>>>> 8e1a54c82fbcc1125f4639169bc3b8dafc436cb1
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
