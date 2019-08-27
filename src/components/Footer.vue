<template>
  <footer>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h2 class="sr-only">Seguinos en:</h2>
          <ul class="social-networks">
            <li><a target="_blank" href="https://www.facebook.com/nayracoop/" title="Facebook"><font-awesome-icon :icon="['fab', 'facebook-square']" /><span class="sr-only">Facebook</span></a></li>
            <li><a target="_blank" href="https://www.instagram.com/nayracoop/" title="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /><span class="sr-only">Instagram</span></a></li>
            <li><a target="_blank" href="https://twitter.com/nayracoop" title="Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /><span class="sr-only">Twitter</span></a></li>
            <li><a target="_blank" href="https://open.spotify.com/user/nayracoop" title="Spotify"><font-awesome-icon :icon="['fab', 'spotify']" /><span class="sr-only">Spotify</span></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/company/nayra" title="Linkedin"><font-awesome-icon :icon="['fab', 'linkedin']" /><span class="sr-only">Linkedin</span></a></li>
          </ul>
          <p>Cooperativa de trabajo Crear Arte y Tecnología LTDA. <br />CUIT: 30-71460053-9</p>
          <img class="data" src="../assets/img/dataweb.jpg" alt="Data Fiscal" />
          <p><span>Somos parte de</span> <abbr title="Federación Argentina de Cooperativas de Trabajo de Tecnología Innovación y Conocimiento"></abbr><a href="http://www.facttic.org.ar/"><img src="../assets/img/facttic.png" alt="FACTTIC" width="150" height="63" /></a></p>
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
