<template>
  <div class="header">
    <!--标题头-->
    <div class="home_top">
      <a href="#/">
        <img src="../assets/斗鱼.png" alt="">
      </a>
      <el-button>打开APP</el-button>
      <el-button type="warning">充值</el-button>
      <a href="">
        <i class="fa fa-search"></i>
      </a>
    </div>
    <!--分类-->
    <el-row :gutter="20">
        <el-col :span="20">
          <nav>
          <el-menu class="el-menu-demo" mode="horizontal" active-text-color="#ffd04b" router>
            <el-menu-item index="0"><a href="">推荐</a></el-menu-item>
            <el-menu-item :index="'/kinds/'+ kind.name + '?id=' + kind.shortName" v-for="(kind,index) in kindList.data" :key="index">
                {{kind.name}}
            </el-menu-item>
          </el-menu>
          </nav>
        </el-col>
        <el-col :span="3">
          <div class="box_min">
            <el-button type="text" @click="dialogVisible = true" class="fa fa-list"></el-button>
            <el-dialog title="选择分类" :visible.sync="dialogVisible" width="100%">
            <span>
              <msg-box></msg-box>
            </span>
              <span slot="footer" class="dialog-footer"></span>
            </el-dialog>
          </div>
        </el-col>
    </el-row>

  <!--
  <div class="kinds">
        <ul>
          <li><a>推荐</a></li>
            <li v-for="(kind,index) in kindList.data">
              <router-link :to="'/kinds/'+ kind.name + '?id=' + kind.shortName">
                {{kind.name}}
              </router-link>
            </li>
        </ul>
      </div>
      <div class="min_box">
        <el-button type="text" @click="dialogVisible = true" class="fa fa-list"></el-button>
        <el-dialog title="选择分类" :visible.sync="dialogVisible" width="100%">
          <span>
            <msg-box></msg-box>
          </span>
          <span slot="footer" class="dialog-footer"></span>
        </el-dialog>
      </div>
  -->
  </div>
  <!--
	 <ul>
	   <li :class="{active:tab === 'FirstContent'}" @click="tab='FirstContent'"><p>推荐</p></li>
	   <li :class="{active:tab === kind.name}" @click="tab=kind.name" v-for="(kind,index) in kindList.data">
		 <p>{{kind.name}}</p>
	   </li>
	 </ul>
	 <keep-alive>
	 <component :is="tab"></component>
   </keep-alive>
	 -->
</template>
<script>
  // https://m.douyu.com/api/cate/recList?cid=&ct=
  import MsgBox from '../components/MsgBox'
  import axios from 'axios'

  export default {
    data: function () {
      return {
        kindList: [],
        dialogVisible: false
      }
    },
    mounted() {
      axios.get('/douyu/api/cate/recList').then(val => {
        // console.log(val.data);
        this.kindList = val.data;
      }).catch(err => {
        console.log(err);
      })
    },
    components: {
      MsgBox
    }
  }
</script>

<style scoped>
  .header {
    background: white;
    width: 100vw;
  }
  /*
  .header nav{
    border:solid 1px red;
    width:90vw;
    overflow-y: scroll;
  }
  .header nav .el-menu{
    width:200vw;
  }
  */
  /*导航的默认样式*/
  nav{
    position:relative;
    z-index:2000;
    overflow-Y: scroll;
  }
  .box_min .el-button{
    padding: 8px ;
    box-shadow:0 0 5px #ccc;
  }
  .el-menu{
    display: flex;
    padding: 0;
  }
  .el-menu.el-menu--horizontal a{
    text-decoration: none;
  }
  .el-menu--horizontal > .el-menu-item{
    height: 40px;
    line-height:40px;
  }
  .el-menu-item{
    padding: 0 10px;
  }
  .is-active{
    border-bottom-color: rgb(46, 169, 255) !important;
    color: rgb(46, 169, 255) !important;
  }
  .el-row .el-col{
    height:6vh;
  }
  .home_top {
    padding: 15px 10px;
    overflow: hidden;
    width: 100vw;
  }
  .home_top img{
    float: left;
    width: 76px;
    height: 34px;
  }
  .home_top .el-button {
    border-color: orange;
    float: left;
    margin-left: 10px;
    padding: 8px;
  }
  .home_top .el-button:nth-of-type(1) {
    color: orange;
  }
  .home_top .el-button:nth-of-type(2) {
    background: orangered;
  }

  .home_top a:nth-of-type(2){
    float: right;
    font-size: 25px;
    color: #8a8a8a;
    cursor: pointer;
  }
</style>
<style>
  .el-dialog{
    height:60vh !important ;
    margin-top:0 !important;
  }
  .el-dialog__headerbtn {
   left:20px !important;
  }
  .el-dialog__body{
    padding: 0;
    height:40vh !important;
  }
  .el-dialog__header{
    height: 8vh;
    background: white;
  }
</style>
