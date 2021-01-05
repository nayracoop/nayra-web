<template>
  <div id="banner" class="impact e3d">
    <!-- <iframe src="http://jardin-japones.surwww.com" style="width:100%; height:100%; display:block;"></iframe> -->
    <div class="anim"></div>
    <div class="text-wrapper e3dlayer" :style="{ transform }">
      <p v-html="$t('cover.content')"></p>
      <!--p><font-awesome-icon icon="map-marker-alt" /> {{ $t('companyAddress') }}</p-->
    </div><!--
    <b-container id="company-info" class="company-info">
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
    </b-container>-->
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
      let posY = (e.pageY > window.innerHeight) ? window.innerHeight : e.pageY
      this.transform = `translate3d(${posX / (59 * p)}px,${posY / (75 * p)}px,0) rotateY(${posX / (80 * p)}deg) rotateX(${posY / -(40 * p)}deg)`
    }
  },
  created () {
    window.addEventListener('mousemove', this.onMouseMove)
  },
  destroyed () {
    window.removeEventListener('mousemove', this.onMouseMove)
  }
}
</script>

<style lang="sass" scoped>
</style>
