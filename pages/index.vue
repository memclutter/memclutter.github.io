<template>
  <div>
    <cover />
    <services />
    <portfolio />
    <contacts />
  </div>
</template>

<script>
import Portfolio from '~/components/Portfolio'
import Cover from '~/components/Cover'
import Services from '~/components/Services'
import Contacts from '~/components/Contacts'

export default {
  components: {
    Contacts,
    Portfolio,
    Cover,
    Services
  }
}
</script>
