<template>
  <v-app>
    <v-content>
      <app-home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Landing'
export default {
  components: {
    appHome: Home
  }
}
</script>

<style>
</style>
