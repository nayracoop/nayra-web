<template>
  <footer>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h2 class="sr-only">{{ $t('Follow us') }}</h2>
          <ul class="social-networks">
            <li><a target="_blank" href="https://www.facebook.com/nayracoop/" title="Facebook"><font-awesome-icon :icon="['fab', 'facebook-square']" /><span class="sr-only">Facebook</span></a></li>
            <li><a target="_blank" href="https://www.instagram.com/nayracoop/" title="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /><span class="sr-only">Instagram</span></a></li>
            <li><a target="_blank" href="https://twitter.com/nayracoop" title="Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /><span class="sr-only">Twitter</span></a></li>
            <li><a target="_blank" href="https://open.spotify.com/user/nayracoop" title="Spotify"><font-awesome-icon :icon="['fab', 'spotify']" /><span class="sr-only">Spotify</span></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/company/nayra" title="Linkedin"><font-awesome-icon :icon="['fab', 'linkedin']" /><span class="sr-only">Linkedin</span></a></li>
            <li><a target="_blank" href="https://github.com/nayracoop" title="Github"><font-awesome-icon :icon="['fab', 'github']" /><span class="sr-only">Github</span></a></li>
          </ul>
          <p>{{ $t('companyLegalName') }}<br />{{ $t('CUIT') }}</p>
          <img class="data" :src="require('@/assets/img/dataweb.jpg')" :alt="$t('Data Fiscal')" />
          <p><span>{{ $t('We are part of') }}</span> <abbr :title="$t('FACTTIC')"></abbr><a href="http://www.facttic.org.ar/"><img :src="require('@/assets/img/facttic.png')" alt="FACTTIC" width="150" height="63" /></a></p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
</style>
