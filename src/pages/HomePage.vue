<template>
  <div class="home">
    <el-container>
      <el-header>
        <home-header></home-header>
      </el-header>
      <el-main>
        <first-content></first-content>
      </el-main>
      <el-footer>
        <home-footer></home-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import HomeHeader from '../components/HomeHeader'
  import FirstContent from '../components/FirstContent'
  import HomeFooter from '../components/HomeFooter'
  export default {
    data: function () {
      return {

      }
    },
    components:{
      HomeHeader,
      FirstContent,
      HomeFooter,
    }
  }
</script>

<style scoped>
  .el-header{
    padding: 0 !important;
    position: fixed;
    top:0;
    z-index:10000;
  }
  .el-main{
    padding:0;
  }
  .el-footer{

  }
</style>
