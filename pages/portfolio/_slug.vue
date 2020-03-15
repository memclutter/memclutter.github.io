<template>
  <div>
    <portfolio-cover :src="preview" :title="title" />
    <portfolio-description :description="description" />
    <portfolio-screens :images="images" />
  </div>
</template>

<script>
import PortfolioCover from '~/components/PortfolioCover'
import PortfolioDescription from '~/components/PortfolioDescription'
import PortfolioScreens from '~/components/PortfolioScreens'

export default {
  components: {
    PortfolioScreens,
    PortfolioDescription,
    PortfolioCover
  },

  validate ({ params }) {
    return ['flogmall', 'mobile-pirate', 'ajax-partners', 'rumetr', 'globe-sailor'].includes(params.slug)
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
    },
    images () {
      switch (this.slug) {
        case 'flogmall':
          return [
            `/imgs/portfolio/${this.slug}/screen-1.png`,
            `/imgs/portfolio/${this.slug}/screen-2.png`,
            `/imgs/portfolio/${this.slug}/screen-3.png`
          ]
        default:
          return []
      }
    }
  }
}
</script>

<style lang="scss">

</style>
