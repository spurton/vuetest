<template>
  <div id="app">
    <DateHeader/>
    <TopStories/>
  </div>
</template>

<script>
import DateHeader from './components/DateHeader'
import TopStories from './components/TopStories'
import store from './store/store.js'

export default {
  name: 'App',
  components: {
    DateHeader,
    TopStories,
  },
  beforeCreate: function() {
    store.dispatch('fetchTopStories');
  },
  store,
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
