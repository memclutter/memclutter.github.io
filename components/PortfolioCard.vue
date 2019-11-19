<template>
  <v-hover v-slot:default="{ hover }">
    <nuxt-link :to="localePath(to, $i18n.locale)">
      <v-img :src="preview" class="portfolio-card" max-width="350" max-height="350">
        <div class="portfolio-card__hover" v-if="hover">
          {{ title }}
        </div>
      </v-img>
    </nuxt-link>
  </v-hover>
</template>

<script>
export default {
  props: {
    preview: String,
    title: String,
    to: [Object, String]
  }
}
</script>

<style lang="scss">
.portfolio-card {

  &__hover {
    background-color: rgba(0, 0, 0, 0.58);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
