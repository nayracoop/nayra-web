<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyD6RPZYYQKri5aFVRzqVESsUaU9BnNzV_0"
  >
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from './GoogleMapLoader'
import GoogleMapMarker from './GoogleMapMarker'
import { mapSettings } from '@/constants/mapSettings'

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker
  },

  data () {
    return {
      markers: [
        {
          id: 'a',
          position: { lat: -34.6012831, lng: -58.5594484 }
        }
      ]
    }
  },

  computed: {
    mapConfig () {
      return {
        ...mapSettings
      }
    }
  }
}
</script>
