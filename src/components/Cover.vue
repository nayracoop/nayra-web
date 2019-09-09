<template>
  <div id="banner" class="impact e3d">
    <div class="anim"></div>
    <div class="text-wrapper e3dlayer" style="transform: translate3d(10.1356px, 2.08px, 0px) rotateY(7.475deg) rotateX(-1.95deg);">
      <p v-html="$t('cover.content')"></p>
      <p><font-awesome-icon icon="map-marker-alt" />{{ $t('companyAddress') }}</p>
    </div>
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
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
</style>
