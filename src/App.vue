<template>
  <div id="app">
    <Header v-if="$route.name != 'notFound'"></Header>
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  @import './assets/styles/global.css';
</style>