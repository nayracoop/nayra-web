<template>
  <header id="header">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-navbar toggleable="md" class="bg-faded w-100">
            <b-navbar-brand href="#company-info" class="p-0">
              <h1 class="logo">
                <img :src="require('@/assets/img/logo.svg')" alt="Nayra" width="150" height="42" />
              </h1>
            </b-navbar-brand>
            <b-navbar-toggle id="navbar-toggler" target="main-menu"></b-navbar-toggle>
            <label for="navbar-toggler">{{ $t('Open menu') }}</label>
            <b-collapse is-nav id="main-menu">
              <b-navbar-nav class="ml-auto">
                <b-nav-item
                  :class="{ active: highlight === 'about' }"
                  href="#nosotros"
                >{{ $t('Our team') }}</b-nav-item>
                <b-nav-item
                  :class="{ active: highlight === 'works' }"
                  href="#trabajos"
                >{{ $t('Works') }}</b-nav-item>
                <b-nav-item
                  :class="{ active: highlight === 'contact' }"
                  href="#contacto"
                >{{ $t('Contact') }}</b-nav-item>
                <b-nav-item-dropdown class="lang-selector" :text="$i18n.locale" right>
                  <b-dropdown-item
                    v-for="(lang, i) in langs"
                    :to="'/' + ((lang === 'es') ? '' : lang)"
                    :key="`Lang${i}`"
                    :class="{ 'sr-only': (lang === $i18n.locale) }"
                    :value="lang"
                  >{{ lang }}</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  props: {
    highlight: ''
  },
  data () {
    return { langs: ['es', 'en'] }
  }
}
</script>

<style lang="sass" scoped>
</style>
