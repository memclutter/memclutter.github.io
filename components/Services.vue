<template>
  <div id="services" class="text-center services">
    <div class="services__content">
      <h2>{{ $t('index.servicesHeader') }}</h2>

      <v-container style="max-width: 1220px">
        <v-row align="center" class="mt-8">
          <v-col cols="12" md="4" class="py-8">
            <service-card
              :title="$t('index.services[0].title')"
              :description="$t('index.services[0].description')"
              icon="fa-project-diagram"
            />
          </v-col>

          <v-col cols="12" md="4" class="py-8">
            <service-card
              :title="$t('index.services[1].title')"
              :description="$t('index.services[1].description')"
              icon="fa-terminal"
            />
          </v-col>

          <v-col cols="12" md="4" class="py-8">
            <service-card
              :title="$t('index.services[2].title')"
              :description="$t('index.services[2].description')"
              icon="fa-robot"
            />
          </v-col>

          <v-col cols="12" md="4" class="py-8">
            <service-card
              :title="$t('index.services[3].title')"
              :description="$t('index.services[3].description')"
              icon="fab fa-docker"
            />
          </v-col>

          <v-col cols="12" md="4" class="py-8">
            <service-card
              :title="$t('index.services[4].title')"
              :description="$t('index.services[4].description')"
              icon="fab fa-gitlab"
            />
          </v-col>

          <v-col cols="12" md="4" class="py-8">
            <service-card
              :title="$t('index.services[5].title')"
              :description="$t('index.services[5].description')"
              icon="fa-infinity"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import ServiceCard from '~/components/ServiceCard'

export default {
  components: {
    ServiceCard
  },
  data: () => ({

  })
}
</script>

<style lang="scss">
.services {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  background-color: #f2f2f2;
}
</style>
