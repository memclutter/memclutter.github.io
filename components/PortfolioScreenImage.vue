<template>
  <v-dialog v-model="dialog" content-class="portfolio-screen-image">
    <template v-slot:activator="{on}">
      <v-img :src="image" v-on="on" height="320" max-width="320" style="cursor: pointer" />
    </template>

    <v-card>
      <v-img :src="image" contain>
        <v-btn
          @click="dialog = false"
          icon
          width="32"
          height="32"
          color="black"
          class="portfolio-screen-image__close-btn"
        >
          <v-icon size="32">
            fa-times
          </v-icon>
        </v-btn>
      </v-img>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    image: { type: String, default: () => ([]) }
  },

  data: () => ({
    dialog: false
  })
}
</script>

<style lang="scss">
.portfolio-screen-image {

  &__close-btn {
    position: fixed;
    top: 64px;
    right: 38px;
  }

  &::-webkit-scrollbar {width: 0!important;}
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}
</style>
