<template>
  <v-app>
    <app-bar />
    <v-content>
      <v-container style="max-width: 1220px">
        <nuxt />
      </v-container>
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
