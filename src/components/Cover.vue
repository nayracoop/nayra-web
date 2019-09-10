<template>
  <div id="banner" class="impact e3d">
    <div class="anim"></div>
    <div class="text-wrapper e3dlayer" :style="{ transform }">
      <p v-html="$t('cover.content')"></p>
      <p><font-awesome-icon icon="map-marker-alt" /> {{ $t('companyAddress') }}</p>
    </div>
    <b-container @mousemove="onMouseMove" id="company-info" class="company-info">
      <b-row>
        <b-col cols="12">
          <div class="quick-contact">
            <dl>
              <dt class="sr-only">{{ $t('Phone') }}</dt>
              <dd> <font-awesome-icon icon="mobile-alt" /> {{ $t('cover.phone') }}</dd>
              <dt class="sr-only">{{ $t('Address') }}</dt>
              <dd><font-awesome-icon icon="map-marker-alt" /> {{ $t ('companyShortAddress') }}</dd>
            </dl>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transform: ''
    }
  },
  methods: {
    onMouseMove (e) {
      const p = 1.5
      let posX = e.pageX - (window.innerWidth / 2)
      let posY = e.pageY - (window.innerHeight / 2)
      this.transform = `translate3d(${posX / (59 * p)}px,${posY / (75 * p)}px,0) rotateY(${posX / (80 * p)}deg) rotateX(${posY / -(80 * p)}deg)`
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
