<template>
  <v-app-bar
    clipped-left
    fixed
    app
    dark
    color="black"
  >
    <v-toolbar-items>
      <v-btn @click="$vuetify.goTo('#cover')">
        Backend/DevOps
      </v-btn>
    </v-toolbar-items>

    <v-spacer />

    <v-toolbar-items>
      <v-btn @click="$vuetify.goTo('#services')">
        {{ $t('menu.services') }}
      </v-btn>
      <v-btn @click="$vuetify.goTo('#portfolio')">
        {{ $t('menu.portfolio') }}
      </v-btn>
      <v-btn @click="$vuetify.goTo('#contacts')">
        {{ $t('menu.contacts') }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
