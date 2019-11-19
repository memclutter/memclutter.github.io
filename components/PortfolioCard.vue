<template>
  <v-hover v-slot:default="{ hover }">
    <nuxt-link :to="localePath(to, $i18n.locale)">
      <v-img :src="preview" class="portfolio-card" max-width="350" max-height="350">
        <div v-if="hover" class="portfolio-card__hover">
          {{ title }}
        </div>
      </v-img>
    </nuxt-link>
  </v-hover>
</template>

<script>
export default {
  props: {
    preview: { type: String, default: '' },
    title: { type: String, default: '' },
    to: { type: [Object, String], default: '' }
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
