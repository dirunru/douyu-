<template>
  <div class="box">
    <div class="box_header">
      <ul class="game_kinds">
        <li @click="name='all'"><p class="on">全部</p></li>
        <li v-for="(kind,index) in gameList.cate1Info" @click="name=kind.cate1Id">
          {{kind.cate1Name}}
        </li>
      </ul>
    </div>
    <div class="box_content">
      <el-row v-if="">
        <el-col :span="8" v-for="(ceil,ins) in gameList.cate2Info" :key="ins" v-if="ceil.cate1Id==name||name=='all'">
          <el-card :body-style="{ padding: '0px'}">
            <img :src="ceil.icon" class="image">
            <p>{{ceil.cate2Name}}</p>
          </el-card>
        </el-col>
      </el-row>
      <!--
       <ul>
        <li v-for="(ceil,ins) in gameList.cate2Info ">
          <img :src="ceil.icon" alt="">
          <p>{{ceil.cate2Name}}</p>
        </li>
      </ul>
      -->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "MsgBox",
    data: function () {
      return {
        gameList:[],
        name:'all'
      }
    },
    mounted() {
      //https://m.douyu.com/api/cate/list?type=
      axios.get('/douyu/api/cate/list').then(val => {
        this.gameList = val.data.data;
        console.log(this.gameList);
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .box {
    height: 60vh;
  }
  .box_header {
    position: fixed;
    width: 100vw;
    background: white;
    top: 8vh;
    z-index:10000;
  }
  .box_header ul {
    display: flex;
    overflow-y: scroll;
  }
  .box_header .game_kinds li {
    white-space: nowrap;
    background: rgba(178, 170, 234, 0.11);
    /*border:solid 1px red;*/
    line-height: 20px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 16px;
  }
  .box_header .game_kinds li:hover{
    color:red;
  }
  .on {
    color: orangered;
    font-weight: bold;
    border-bottom: solid 2px orangered;
  }
  .box_content {
    padding-top: 8vw;
    height: 52vh;
    overflow-y: scroll;
  }
  .box_content .el-col {
    padding-top: 15px;
    width: 33.32vw;
    height: 33.31vw;
    background: none;
    border-bottom: 1px dashed #8a8a8a;
    border-right: 1px dashed #8a8a8a;
  }
  .box_content .el-col:nth-of-type(3n){
    border-right:none;
  }
  .el-card{
    background: none !important;
    box-shadow: none !important;
    border:none;
  }
  .box_content .el-card img {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
  }
</style>

