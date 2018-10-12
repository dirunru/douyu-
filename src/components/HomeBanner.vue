<template>
  <div class="banner">
    <el-carousel trigger="click" :interval="2000" height="200px">
      <el-carousel-item v-for="item in 5" :key="item">
        <img :src="img[item-1]" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
    export default {
        name: "HomeBanner",
        data: function () {
            return {
              img: [
                'https://gfs-op.douyucdn.cn/slide/2018/09/26/e6fceb9bdc43e9d3a9993fc9f0bf92e1.jpg',
                'https://gfs-op.douyucdn.cn/slide/2018/09/26/b2edd83807ab187bc3402a3e5b96982d.jpg',
                'https://gfs-op.douyucdn.cn/slide/2018/09/28/475d6985b6d2e4dc0c368abfad7fa9e8.png',
                'https://gfs-op.douyucdn.cn/slide/2018/0831/201808311546468880.jpg',
                'https://gfs-op.douyucdn.cn/slide/2018/09/20/5de34baf1928cefed576c1885783d890.png'
              ],
            }
        }
    }
</script>

<style scoped>
  .banner{
    margin-top: 100px;
  }
  .el-carousel{
    padding: 0 10px;
  }
</style>
