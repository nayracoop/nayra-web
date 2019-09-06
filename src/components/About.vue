<template>
  <section class="about" id="nosotros">
    <b-container>
      <b-row id="info-nosotros">
        <b-col cols="12" sm="12" md="12" lg="9" xl="7" class="content">
          <h2>{{ $t('acerca.titulo') }}</h2>
          <p>{{ $t('acerca.parrafo1') }}</p>
          <p>{{ $t('acerca.parrafo2') }}</p>
          <p>{{ $t('acerca.parrafo3') }}</p>
        </b-col>
        <div class="doodle">
          <div class="tile color-1" style="animation-delay: -4.89214s; animation-duration: 11.4012s; left: -20%; transform: scale(0.25);">
              <div></div>
          </div>
          <div class="tile color-2" style="animation-delay: -12.4009s; animation-duration: 22.9243s; left: -8.57143%; transform: scale(0.5);">
              <div></div>
          </div>
          <div class="tile color-3" style="animation-delay: -14.5456s; animation-duration: 19.9218s; left: 2.85714%; transform: scale(0.1875);">
              <div></div>
          </div>
          <div class="tile color-4" style="animation-delay: -7.14976s; animation-duration: 24.8246s; left: 14.2857%; transform: scale(0.3125);">
              <div></div>
          </div>
          <div class="tile color-5" style="animation-delay: -3.81025s; animation-duration: 6.02999s; left: 25.7143%; transform: scale(0.625);">
              <div></div>
          </div>
          <div class="tile color-6" style="animation-delay: -7.01246s; animation-duration: 24.5057s; left: 37.1429%; transform: scale(1);">
              <div></div>
          </div>
          <div class="tile color-7" style="animation-delay: -5.16349s; animation-duration: 13.2176s; left: 48.5714%; transform: scale(0.375);">
              <div></div>
          </div>
        </div>
      </b-row>
    </b-container>
  </section>
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
