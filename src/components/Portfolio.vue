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
        <b-col cols="12" align="center" class="show-more" v-if="page * pageLength < filteredPortfolio.length"><b-button @click="showMore"><font-awesome-icon :icon="['fas', 'plus']" /> Ver más</b-button></b-col>
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
          title: 'Sororas',
          url: 'https://www.sororas.com/',
          gallery: [ 'sororas-1.jpg', 'sororas-2.jpg' ],
          tags: [ 'web', 'media', 'art', 'apps' ]
        },
        {
          title: 'AR Simulator',
          gallery: [ 'ar-simulator.gif' ],
          tags: [ 'vr/ar' ]
        },
        {
          title: 'Betterez',
          url: 'https://www.betterez.com/',
          gallery: [ 'betterez-1.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'Planeta Oreo',
          gallery: [ 'oreo.gif' ],
          tags: [ 'games' ]
        },
        {
          title: 'Desplazamientos',
          url: 'http://desplazamientos.surwww.com/',
          gallery: [ 'desplazamientos-1.jpg', 'desplazamientos-2.jpg', 'desplazamientos-3.jpg' ],
          tags: [ 'art' ]
        },
        {
          title: 'Matanza Digital',
          url: 'https://www.matanzadigital.com.ar/',
          gallery: [ 'matanza-digital-1.jpg', 'matanza-digital-2.jpg' ],
          tags: [ 'media' ]
        },
        {
          title: 'Crea tu súper Día del Niño',
          url: 'https://legacy.nayra.coop/creatusuperdiadelnino/',
          gallery: [ 'dia-del-nino-1.jpg', 'dia-del-nino-2.jpg', 'dia-del-nino-3.jpg', 'dia-del-nino-4.jpg' ],
          tags: [ 'media', 'games' ]
        },
        {
          title: 'Estudio Recondo',
          url: 'http://estudiorecondo.com.ar/',
          gallery: [ 'recondo-1.jpg', 'recondo-2.jpg', 'recondo-3.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'Equipamiento SIX',
          url: 'https://legacy.nayra.coop/equipamientosix/es/index.html',
          gallery: [ 'equipamiento-six-1.jpg', 'equipamiento-six-2.jpg', 'equipamiento-six-3.jpg', 'equipamiento-six-4.jpg' ],
          tags: [ 'media' ]
        },
        {
          title: 'Transforma tu aventura',
          url: 'https://legacy.nayra.coop/transformatuaventura/',
          gallery: [ 'transforma-tu-aventura-1.jpg', 'transforma-tu-aventura-2.jpg', 'transforma-tu-aventura-3.jpg' ],
          tags: [ 'media', 'games' ]
        },
        {
          title: 'Two piece mafia',
          url: 'https://www.twopiecemafia.com/',
          gallery: [ 'two-piece-1.jpg', 'two-piece-2.jpg' ],
          tags: [ 'e-commerce' ]
        },
        {
          title: 'Satanizador',
          url: 'https://legacy.nayra.coop/canalaetv/satanizador/',
          gallery: [ 'satanizador-1.jpg', 'satanizador-2.jpg', 'satanizador-3.jpg', 'satanizador-4.jpg' ],
          tags: [ 'media', 'games', 'apps' ]
        },
        {
          title: 'Flowered & Co.',
          url: 'https://www.flowered.us/',
          gallery: [ 'flowered-1.jpg', 'flowered-2.jpg' ],
          tags: [ 'e-commerce' ]
        },
        {
          title: 'AMG',
          url: 'https://www.amg.com.ar/',
          gallery: [ 'amg-1.jpg', 'amg-2.jpg', 'amg-3.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'Böron',
          url: 'https://www.boron-tools.com/',
          gallery: [ 'boron-1.jpg', 'boron-2.jpg', 'boron-3.jpg' ],
          tags: [ 'e-commerce' ]
        },
        {
          title: 'Lucilas alfajores',
          url: 'https://lucilas.com/',
          gallery: [ 'lucilas-1.jpg', 'lucilas-2.jpg' ],
          tags: [ 'e-commerce' ]
        },
        {
          title: 'AMG Energía',
          url: 'http://www.amgenergia.com.ar/',
          gallery: [ 'amg-energia-1.jpg', 'amg-energia-2.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'La selección de la historia',
          url: 'https://legacy.nayra.coop/tuhistory/laselecciondelahistoria/',
          gallery: [ 'seleccion-1.jpg', 'seleccion-2.jpg' ],
          tags: [ 'media', 'games' ]
        }
        // {
        //   title: 'Sun-Fi',
        //   url: '',
        //   gallery: [ 'sun-fi-1.jpg' ],
        //   tags: [ 'e-commerce' ]
        // },
        /*
        {
          title: 'Interturis',
          url: 'https://www.interturis.com.ar/',
          gallery: [ 'interturis-1.jpg', 'interturis-2.jpg', 'interturis-3.jpg' ],
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
          title: 'Andrés & Asociados',
          url: 'http://andresyasociados.com.ar/',
          gallery: [ 'andres-y-asociados-1.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'Code of Life',
          url: 'http://code-of-life.com/',
          gallery: [ 'code-of-life-1.jpg', 'code-of-life-2.jpg', 'code-of-life-3.jpg' ],
          tags: [ 'web' ]
        },
        {
          title: 'El Tenedor Rosa',
          gallery: [ 'el-tenedor-rosa-1.jpg', 'el-tenedor-rosa-2.jpg' ],
          tags: [ 'web' ]
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
        }
        {
          title: 'P2B Estudio',
          gallery: [ 'p2b-1.jpg', 'p2b-2.jpg' ],
          tags: [ 'web' ]
        }, */
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
