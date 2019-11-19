<template>
  <div class="text-center">
    <v-icon size="64" color="black">
      {{ icon }}
    </v-icon>
    <h4 class="mt-8">
      {{ title }}
    </h4>
    <div class="mt-8">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' }
  }
}
</script>
