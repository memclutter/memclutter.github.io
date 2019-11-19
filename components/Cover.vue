<template>
  <v-row align="center" class="cover" id="cover">
    <v-col cols="12" md="6">
      <v-img src="/imgs/cover.jpg" />
    </v-col>
    <v-spacer />
    <v-col cols="12" md="5" class="text-center">
      <h1 class="display-2 font-weight-bold mb-4">
        {{ $t('index.header') }}
      </h1>
      <div class="font-weight-light mb-6">
        {{ $t('index.caption') }}
      </div>
      <v-divider inset />
      <div class="font-weight-light mt-4">
        {{ $t('index.description') }}
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.cover {
  height: 100vh;
}
</style>
