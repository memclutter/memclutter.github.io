<template>
  <v-container class="portfolio-description">
    <div v-html="description" class="display-1 font-weight-thin" />
  </v-container>
</template>

<script>
export default {
  props: {
    description: { type: String, default: '' }
  }
}
</script>

<style lang="scss">
.portfolio-description {
  max-width: 1100px;
  height: 100vh;
}
</style>
