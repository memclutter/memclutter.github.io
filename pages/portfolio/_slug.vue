<template>
  <div>
    Slug: {{ slug }}
    Preview: {{ preview }}
    Title: {{ title }}
    Description: {{ description }}
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return ['flogmall', 'dapcar', 'mobile-pirate', 'ajax-partners', 'rumetr', 'globe-sailor'].includes(params.slug)
  },

  computed: {
    slug () {
      return this.$route.params.slug
    },
    title () {
      return this.$t(`portfolio.${this.slug}.title`)
    },
    preview () {
      return `/imgs/portfolio/${this.slug}/logo.${this.slug === 'flogmall' ? 'svg' : 'png'}`
    },
    description () {
      return this.$t(`portfolio.${this.slug}.description`)
    }
  }
}
</script>

<style scoped>

</style>
