<template>
  <div class="game_page">
    <el-container>
      <el-header>
        <a href="#/">
          <img src="../assets/斗鱼.png" alt="">
        </a>
        <el-button>打开APP</el-button>
        <el-button type="warning">充值</el-button>
        <a>
          <el type="text" @click="dialogVisible = true" class="fa fa-list"></el>
          <el-dialog title="选择分类" :visible.sync="dialogVisible" width="100%">
        <span>
          <msg-box></msg-box>
        </span>
            <span slot="footer" class="dialog-footer"></span>
          </el-dialog>
        </a>
      </el-header>
      <el-main>
        <ul class="sec" v-for="(box,ins) in gameDatas">
          <p v-if="ins<1">
            <i><img src="../assets/111.png"/></i>
            {{box.tabName}}
          </p>
          <li v-for="(imag,index) in box.list">
            <img :src="imag.roomSrc" alt="">
            <span class="room -online">{{imag.hn}}</span>
            <span>{{imag.nickname}}</span>
            <span>{{imag.roomName}}</span>
          </li>
        </ul>
      </el-main>
      <el-footer>
        <el-button @click="page+=1">加载更多</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios'
  import MsgBox from '../components/MsgBox'
  export default {
    name: "GamePage",
    data: function () {
      return {
        dialogVisible: false,
        gameDatas:[],
        page:1,
        router:this.$route.query.id
      }
    },
    mounted() {
      /*axios.get('/home/gapi/rkc/home/list').then(val=>{
        this.gameDatas=val.data.data.chans[0];
        console.log(this.gameDatas);
      }).catch(err=>{
        console.log(err);
      })*/
    },
    created(){
      this.firstGet();
    },
    methods:{
      firstGet:function () {
        //https://m.douyu.com/api/room/mixList?page=2&type=jdqs
        axios.get('/douyu/api/room/mixList',{
          params:{
            page:this.page,
            type:this.router,
          }
        }).then(val=>{
          this.gameDatas.push(val.data.data);
          console.log(this.gameDatas);
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    components:{
      MsgBox
    },
    watch:{
      'page':function () {
        this.firstGet();
      }
    }
  }
</script>

<style scoped>
  .el-header {
    padding: 15px 10px;
    overflow: hidden;
    width: 100vw;
    /*border: solid 1px red;*/
  }
  .el-header img {
    float: left;
    width: 76px;
    height: 34px;
  }
  .el-header >.el-button {
    border-color: orange;
    float: left;
    margin-left: 10px;
  }
  .el-header .el-button:nth-of-type(1) {
    color: orange;
    padding: 8px;
  }
  .el-header .el-button:nth-of-type(2) {
    background: orangered;
    padding: 8px;
  }
  .el-header a:nth-of-type(2) {
    float: right;
    font-size: 16px;
    color: #8a8a8a;
    cursor: pointer;
    padding: 5px;
    box-shadow: 0 0 5px #8a8a8a;
  }
  .el-main p{
    padding:10px;
    text-align: left;
    /*border: solid 1px red;*/
  }
  .el-main p i img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .el-main img{
    width: 45vw;
    height:37vw;
    border-radius:10px;
  }
  .el-main ul{
    width: 95vw;
  }
  .el-main ul li{
    position:relative;
    display:inline-block;
    /*border:solid 1px red;*/
    width: 45vw;
    height:45vw;
    margin-right:10px;
  }
  .el-main ul li span{
    position: absolute;
    /*border:solid 1px red;*/
    display: block;
    font-size:12px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-main ul li span:nth-of-type(1){
    display: inline-block;
    z-index: 2;
    top:5px;
    right: 10px;
    color: #fff;
    font-size: 12px;
    background: rgba(0,0,0,0.3);
    border-radius:15px;
  }
  .el-main ul li span:nth-of-type(1)::before{
    content: " ";
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 3px;
    width: 11px;
    height: 11px;
    background:url("../assets/火.png") no-repeat;
    background-size: 100% 100%;
  }
  .el-main ul li span:nth-of-type(2){
    display: inline-block;
    z-index: 2;
    bottom:9vw;
    left: 10px;
    color: #fff;
    font-size: 12px;
    background: rgba(0,0,0,0.3);
    border-radius:15px;
  }
  .el-main ul li span:nth-of-type(2)::before{
    content: " ";
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 3px;
    width: 11px;
    height: 11px;
    background:url("../assets/人.png") no-repeat;
    background-size: 100% 100%;
  }
  .el-footer .el-button{
    width: 90vw;
  }
</style>
<style>
  .el-main{
    padding: 10px !important;
  }
</style>
