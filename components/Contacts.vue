<template>
  <div id="contacts" class="contacts text-center">
    <div class="contacts__content">
      <h2 class="display-2 font-weight-bold">
        {{ $t('index.contacts.header') }}
      </h2>
      <div class="headline font-weight-thin mt-4">
        {{ $t('index.contacts.phone') }}
      </div>
      <div class="headline font-weight-thin mt-4">
        {{ $t('index.contacts.email') }}
      </div>

      <v-row class="mt-8" align="center" justify="center">
        <v-col cols="auto">
          <v-btn
            icon
            height="64"
            width="64"
            color="black"
            href="tel:89384345568"
            target="_blank"
          >
            <v-icon size="64">
              fa-phone
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            icon
            height="64"
            width="64"
            color="black"
            href="mailto:memclutter@gmail.com"
            target="_blank"
          >
            <v-icon size="64">
              fa-envelope
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            icon
            height="64"
            width="64"
            color="black"
            href="https://t.me/memclutter"
            target="_blank"
          >
            <v-icon size="64">
              fab fa-telegram
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            icon
            height="64"
            width="64"
            color="black"
            href="https://github.com/memclutter"
            target="_blank"
          >
            <v-icon size="64">
              fab fa-github
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            icon
            height="64"
            width="64"
            color="black"
            href="https://www.linkedin.com/in/anatoly-garkusha-b48708a4/"
            target="_blank"
          >
            <v-icon size="64">
              fab fa-linkedin
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss">
.contacts {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
}
</style>
