<template>
  <v-app>
    <app-bar />
    <v-content>
      <nuxt />
      <contacts />
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
import Contacts from '~/components/Contacts'

export default {
  components: {
    AppBar,
    Contacts
  }
}
</script>
