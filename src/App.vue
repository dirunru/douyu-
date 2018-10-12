<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  import $ from './assets/jquery.js'
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul li{
    list-style-type: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
