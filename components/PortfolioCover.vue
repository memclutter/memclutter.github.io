<template>
  <v-img :src="src" class="portfolio-cover">
    <div class="portfolio-cover__content">
      <h1 class="white--text display-3 font-weight-bold">
        {{ title }}
      </h1>

      <v-btn icon height="32" width="32" color="white">
        <v-icon size="32">
          fa-chevron-down
        </v-icon>
      </v-btn>
    </div>
  </v-img>
</template>

<script>
export default {
  props: {
    src: { type: String, default: '' },
    title: { type: String, default: '' }
  }
}
</script>

<style lang="scss">
.portfolio-cover {
  height: 100vh;

  &__content {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.58);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
}
</style>
