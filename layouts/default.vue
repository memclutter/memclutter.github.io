<template>
  <v-app>
    <app-bar />
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      fixed
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from '~/components/AppBar'

export default {
  components: {
    AppBar
  }
}
</script>
