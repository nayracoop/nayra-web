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
        <template v-for="(item, index) in filteredPortfolio">
          <b-col v-bind:key="index" xs="12" sm="12" md="6" lg="6" xl="4" v-show="index < page * pageLength">
            <app-portfolio-card :gallery="item.gallery" :title="item.title" :projectURL="item.url" :sliderId="index" />
          </b-col>
        </template>
        <b-col cols="12" align="center" v-if="page * pageLength < filteredPortfolio.length"><b-button @click="showMore"><font-awesome-icon :icon="['fas', 'plus']" /> Ver más</b-button></b-col>
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
          url: 'https://www.amg.com.ar/',
          gallery: [ 'amg-1.jpg', 'amg-2.jpg', 'amg-3.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'AMG Energía',
          url: 'http://www.amgenergia.com.ar/',
          gallery: [ 'amg-energia-1.jpg', 'amg-energia-2.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'Matanza Digital',
          url: 'https://www.matanzadigital.com.ar/',
          gallery: [ 'matanza-digital-1.jpg', 'matanza-digital-2.jpg' ],
          tags: [ 'media' ]
        },
        {
          title: 'Andrés & Asociados',
          url: 'http://andresyasociados.com.ar/',
          gallery: [ 'andres-y-asociados-1.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'El Tenedor Rosa',
          url: 'http://eltenedorrosa.com/',
          gallery: [ 'el-tenedor-rosa-1.jpg', 'el-tenedor-rosa-2.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'P2B Estudio',
          url: 'http://p2b-estudio.com/',
          gallery: [ 'p2b-1.jpg', 'p2b-2.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'Propuestas & Servicios para Casamientos',
          url: 'https://www.propuestasyservicios.com/',
          gallery: [ 'propuestas-1.jpg', 'propuestas-2.jpg', 'propuestas-3.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'A. Rinkel',
          url: 'http://arinkel.com/',
          gallery: [ 'arinkel-1.jpg', 'arinkel-2.jpg', 'arinkel-3.jpg' ],
          tags: [ 'e-commerce' ]
        },
        {
          title: 'Böron',
          url: 'https://www.boron-tools.com/',
          gallery: [ 'boron-1.jpg', 'boron-2.jpg', 'boron-3.jpg' ],
          tags: [ 'e-commerce' ]
        },
        {
          title: 'Code of Life',
          url: 'http://code-of-life.com/',
          gallery: [ 'code-of-life-1.jpg', 'code-of-life-2.jpg', 'code-of-life-3.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'Estudio Recondo',
          url: 'http://estudiorecondo.com.ar/',
          gallery: [ 'recondo-1.jpg', 'recondo-2.jpg', 'recondo-3.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'Interturis',
          url: 'https://www.interturis.com.ar/',
          gallery: [ 'interturis-1.jpg', 'interturis-2.jpg', 'interturis-3.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'Crea tu súper Día del Niño',
          url: 'http://www.cartoonnetwork.com.ar/promo/dia-del-nino',
          gallery: [ 'dia-del-nino-1.jpg', 'dia-del-nino-2.jpg', 'dia-del-nino-3.jpg', 'dia-del-nino-4.jpg' ],
          tags: [ 'media' ]
        },
        {
          title: 'Equipamiento SIX',
          url: 'http://equipamientosix.tuhistory.com/',
          gallery: [ 'equipamiento-six-1.jpg', 'equipamiento-six-2.jpg', 'equipamiento-six-3.jpg', 'equipamiento-six-4.jpg' ],
          tags: [ 'media' ]
        },
        {
          title: 'Satanizador',
          url: 'https://legacy.nayra.coop/canalaetv/satanizador/',
          gallery: [ 'satanizador-1.jpg', 'satanizador-2.jpg', 'satanizador-3.jpg', 'satanizador-4.jpg' ],
          tags: [ 'media' ]
        },
        {
          title: 'Transforma tu aventura',
          url: 'https://legacy.nayra.coop/transformatuaventura/',
          gallery: [ 'transforma-tu-aventura-1.jpg', 'transforma-tu-aventura-2.jpg', 'transforma-tu-aventura-3.jpg' ],
          tags: [ 'media' ]
        },
        {
          title: 'Animaciones OSDE',
          url: 'https://www.youtube.com/watch?v=VXgA-8WrTbo',
          gallery: [ 'osde-1.jpg', 'osde-2.jpg', 'osde-3.jpg', 'osde-4.jpg' ],
          tags: [ 'others' ]
        },
        {
          title: 'Mumi',
          url: 'https://www.mumidesign.com/',
          gallery: [ 'mumi-1.jpg', 'mumi-2.jpg', 'mumi-3.jpg' ],
          tags: [ 'e-commerce' ]
        },
        // {
        //   title: 'Sun-Fi',
        //   url: '',
        //   gallery: [ 'sun-fi-1.jpg' ],
        //   tags: [ 'e-commerce' ]
        // },
        {
          title: 'Desplazamientos',
          url: 'http://desplazamientos.surwww.com/',
          gallery: [ 'desplazamientos-1.jpg', 'desplazamientos-2.jpg', 'desplazamientos-3.jpg' ],
          tags: [ 'art' ]
        }
      ],
      page: 1,
      pageLength: 6
    }
  },
  computed: {
    filtered () {
      return Object.values(this.categories).reduce((current, item) => (current || item), false)
    },
    filteredPortfolio () {
      if (!this.filtered) return [...this.portfolio]
      return this.portfolio.filter(item => {
        return item.tags.reduce((current, item) => (current || this.categories[item]), false)
      })
    }
  },
  methods: {
    showMore () {
      this.page++
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
