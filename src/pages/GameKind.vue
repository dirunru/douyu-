<template>
  <div class="game_kind">
    <home-header></home-header>
    <!--
    <h1>{{name.id}}页面</h1>
    <h4>{{kindData}}</h4>
    <h4>{{router}}</h4>
    -->
    <el-container>
      <el-header>
        <p>
          <i><img src="../assets/111.png"/></i>
          {{name.id}}
        </p>
      </el-header>
      <el-main>
        <el-row v-for="(item,ins) in kindData" :key="ins">
          <el-col :span="12" v-for="(lis,index) in item.list" :key="index">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="lis.roomSrc" class="image">
              <span>{{lis.hn}}</span>
              <span>{{lis.nickname}}</span>
              <span>{{lis.roomName}}</span>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-button @click="page+=1">加载更多</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios';
  import HomeHeader from '../components/HomeHeader'

  export default {
    name: "GameKind",
    data: function () {
      return {
        page:1,
        kindData:[],
        name: this.$route.params,
        router:this.$route.query.id,
        currentDate: new Date()
      }
    },
    components: {
      HomeHeader
    },
    created(){
      this.getData();
    },
    methods: {
      // https://m.douyu.com/api/room/list?page=1&type=LOL
      getData:function () {
        axios.get('/douyu/api/room/list', {
          params: {
            page:this.page,
            type:this.router,
          }
        }).then(val=>{
          this.kindData.push(val.data.data);
          console.log(this.kindData);
        }).catch(err=>{
          console.log(err);
        })
      },
    },
    watch: {
      'page':function () {
        this.getData();
      },
      "$route": function (newValue, oldValue) {
        // console.log(newValue);
        this.name = newValue.params;
        this.router=newValue.query.id;
        this.kindData=[];
        this.getData();
      }
    }
  }
</script>

<style scoped>
  .el-header p{
    text-align: left;
    /*border: solid 1px red;*/
  }
  .el-header p i img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .el-footer .el-button{
    width: 90vw;
  }
  .el-card img{
    width: 100%;
    height: 100%;
    border-radius:10px;
  }
  .el-card{
    position:relative;
  }
  .el-card span{
    position: absolute;
    display: block;
    font-size:12px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-card span:nth-of-type(1){
    display: inline-block;
    z-index: 2;
    top:5px;
    right: 10px;
    color: #fff;
    font-size: 12px;
    background: rgba(0,0,0,0.3);
    border-radius:15px;
  }
  .el-card span:nth-of-type(1)::before{
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
  .el-card span:nth-of-type(2){
    display: inline-block;
    z-index: 2;
    bottom:8vw;
    left: 10px;
    color: #fff;
    font-size: 12px;
    background: rgba(0,0,0,0.3);
    border-radius:15px;
  }
  .el-card span:nth-of-type(2)::before{
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
  .el-card span:nth-of-type(3){
    display: inline-block;
    z-index: 2;
    left: 10px;
    color: #404040;
    font-size: 12px;
  }
</style>
<style>
  .el-header{
    height: 6vh!important;
  }
  .el-header,.el-main{
    padding: 10px !important;
    width: 100vw;
    /*border:solid 1px red;*/
  }
  .el-card{
    padding:0 5px 20px;
    background: none !important;
    box-shadow: none !important;
    border:none;
  }
  .el-col{
    /*border:solid 1px red;*/
    height:35vw;
  }
</style>
