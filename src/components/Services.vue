<template>
  <section class="services" id="servicios">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h2>{{ $t('services.title') }}</h2>
        </b-col>
      </b-row>
      <b-row class="services-grid">
        <b-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          sm="12"
          md="6"
          lg="6"
          xl="4"
        >
          <article class="service-card">
            <div class="service-card-body">
              <h3>{{ item.title }}</h3>
              <p v-for="(paragraph, pIndex) in item.content" :key="pIndex">
                {{ paragraph }}
              </p>
            </div>
          </article>
        </b-col>
      </b-row>
      <b-row class="engagement-models">
        <b-col cols="12">
          <article
            v-for="(model, index) in models"
            :key="index"
            class="engagement-model"
          >
            <h3>{{ model.title }}</h3>
            <p v-for="(paragraph, pIndex) in model.content" :key="pIndex">
              {{ paragraph }}
            </p>
          </article>
        </b-col>
      </b-row>
    </b-container>
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
  </section>
</template>

<script>
export default {
  computed: {
    messages () {
      const locale = this.$i18n.locale
      const pack = this.$i18n.messages[locale] || this.$i18n.messages.es
      return (pack && pack.services) || {}
    },
    items () {
      return this.messages.items || []
    },
    models () {
      return this.messages.models || []
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
