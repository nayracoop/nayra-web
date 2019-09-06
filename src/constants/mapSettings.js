import colorPalette from '@/constants/colorPalette'

const {
  COLOR_LANDSCAPE,
  COLOR_BORDERS,
  COLOR_WATER,
  COLOR_LINE,
  COLOR_POINT_FILL,
  COLOR_SELECTED_POINT
} = colorPalette

const COLORS = {
  BORDERS: COLOR_BORDERS,
  LANDSCAPE: COLOR_LANDSCAPE,
  LINE: COLOR_LINE,
  POINT: COLOR_SELECTED_POINT,
  POINT_FILL: COLOR_POINT_FILL,
  WATER: COLOR_WATER
}

const POINT_MARKER_ICON_CONFIG = {
  strokeOpacity: 1,
  strokeWeight: 4,
  strokeColor: COLORS.POINT,
  fillColor: COLORS.POINT_FILL,
  fillOpacity: 1,
  scale: 0.5,
  position: this.center
}

const mapSettings = {
  mapTypeId: 'roadmap',
  title: 'Nayra Cooperativa',
  center: { lat: -34.6012831, lng: -58.5594484 },
  zoom: 15,
  clickableIcons: false,
  streetViewControl: false,
  panControlOptions: false,
  gestureHandling: 'cooperative',
  mapTypeControl: false,
  zoomControlOptions: {
    style: 'SMALL'
  },
  styles: [
    {
      featureType: 'landscape'
    },
    {
      featureType: 'poi',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'transit',
      stylers: [{ visibility: 'on' }]
    }
  ]
}

export { mapSettings, POINT_MARKER_ICON_CONFIG }
