<template>
  <v-container class="portfolio-description">
    <v-row align="center">
      <v-col v-for="(image, i) in images" :key="i" cols="12" md="4">
        <portfolio-screen-image :image="image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PortfolioScreenImage from '~/components/PortfolioScreenImage'

export default {
  components: {
    PortfolioScreenImage
  },
  props: {
    images: { type: Array, default: () => ([]) }
  }
}
</script>

<style lang="scss">

</style>
