<template>
  <v-app-bar
    clipped-left
    fixed
    app
    dark
    color="black"
  >
    <v-toolbar-title>
      Backend/DevOps
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-btn>
        {{ $t('menu.services') }}
      </v-btn>
      <v-btn>
        {{ $t('menu.portfolio') }}
      </v-btn>
      <v-btn>
        {{ $t('menu.contacts') }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
