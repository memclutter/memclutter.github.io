<template>
  <div id="portfolio" class="text-center portfolio">
    <div class="portfolio__content">
      <h2>{{ $t('index.portfolio.header') }}</h2>

      <v-container style="max-width: 1220px">
        <v-row align="center" class="mt-8">
          <v-col cols="12" md="4" class="py-8">
            <portfolio-card
              :title="$t('index.portfolio.cards[0].title')"
              :to="{name: 'portfolio-slug', params: {slug: 'flogmall'}}"
              preview="/imgs/portfolio/flogmall/logo.svg"
            />
          </v-col>
          <v-col cols="12" md="4" class="py-8">
            <portfolio-card
              :title="$t('index.portfolio.cards[1].title')"
              :to="{name: 'portfolio-slug', params: {slug: 'dapcar'}}"
              preview="/imgs/portfolio/dapcar/logo.png"
            />
          </v-col>
          <v-col cols="12" md="4" class="py-8">
            <portfolio-card
              :title="$t('index.portfolio.cards[2].title')"
              :to="{name: 'portfolio-slug', params: {slug: 'mobile-pirate'}}"
              preview="/imgs/portfolio/mobile-pirate/logo.png"
            />
          </v-col>

          <v-col cols="12" md="4" class="py-8">
            <portfolio-card
              :title="$t('index.portfolio.cards[3].title')"
              :to="{name: 'portfolio-slug', params: {slug: 'ajax-partners'}}"
              preview="/imgs/portfolio/ajax-partners/logo.png"
            />
          </v-col>
          <v-col cols="12" md="4" class="py-8">
            <portfolio-card
              :title="$t('index.portfolio.cards[4].title')"
              :to="{name: 'portfolio-slug', params: {slug: 'rumetr'}}"
              preview="/imgs/portfolio/rumetr/logo.png"
            />
          </v-col>
          <v-col cols="12" md="4" class="py-8">
            <portfolio-card
              :title="$t('index.portfolio.cards[5].title')"
              :to="{name: 'portfolio-slug', params: {slug: 'globe-sailor'}}"
              preview="/imgs/portfolio/globe-sailor/logo.png"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import PortfolioCard from './PortfolioCard'

export default {
  components: {
    PortfolioCard
  }
}
</script>

<style lang="scss">
  .portfolio {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
  }
</style>
