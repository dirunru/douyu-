<template>
  <div class="first">
    <!--轮播图-->
      <home-banner></home-banner>
      <el-main>
        <section v-for="(item,index) in datas">
          <!--标题-->
          <div class="ti">
            <el-row :gutter="20">
              <el-col :span="2">
                <img :src="item.icon" alt="">
              </el-col>
              <el-col :span="6">{{item.cn}}</el-col>
              <el-col :span="6" :offset="10">
                <router-link :to=" '/game/' + item.sn +'?id=' + item.sn">
                  <strong style="cursor: pointer">
                    更多
                    <i class="fa fa-play-circle-o"></i>
                  </strong>
                </router-link>
              </el-col>
            </el-row>
          </div>
          <!--图片卡片-->
          <div class="sec">
            <el-row >
              <el-col :span="12" v-for="(pic,index) in item.rl" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="pic.rs16" alt="">
                  <span class="room -online">{{(pic.hn/10000).toFixed(1)}}万</span>
                  <span>{{pic.nn}}</span>
                  <span>{{pic.rn}}</span>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </section>
      </el-main>
      <!--
        <div class="min_header">
      <ul class="min_header_list">
        <li v-for="(item,index) in datas.chans">
          <div class="min_header_list_ti">
            <img :src="item.icon" alt="">
            <p>{{item.cn}}</p>
            <span v-for="(it,ins) in item.submenu" v-if="ins<2">{{it.name}}</span>
            <router-link :to=" '/game/' + item.sn +'?id=' + item.sn">
              <strong style="cursor: pointer">
                更多
                <i class="fa fa-play-circle-o"></i>
              </strong>
            </router-link>
          </div>
          <div class="min_header_list_content">
            <ul class="sec">
              <li v-for="(pic,index) in item.rl" class="sec">
                <img :src="pic.rs16" alt="">
                <span class="room -online">{{(pic.hn/10000).toFixed(1)}}万</span>
                <span>{{pic.nn}}</span>
                <span>{{pic.rn}}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
      -->
  </div>
</template>

<script>
  import axios from 'axios'
  import HomeBanner from '../components/HomeBanner'
  export default {
    name: "FirstContent",
    data: function () {
      return {
        datas:[]
      }
    },
    mounted(){
      //https://www.douyu.com/gapi/rkc/home/list?tdsourcetag=s_pctim_aiomsg
      axios.get('/home/gapi/rkc/home/list').then(val=>{
        // console.log(val.data.data);
        this.datas=val.data.data.chans;
      }).catch(err=>{
        console.log(err);
      })
    },
    components:{
      HomeBanner
    }
  }
</script>

<style scoped>
  a{
    text-decoration:none;
  }
  .el-main section .ti .el-row{
    line-height: 40px;
  }
  .el-main section .ti .el-row .el-col img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .el-main section .ti .el-row .el-col a strong{
    color:#8a8a8a;
    font-weight: normal;
  }
  .el-main section .ti .el-row .el-col a strong:hover{
    color:orangered;
  }
  .el-main section .sec .el-row .el-col .el-card img{
    width: 43vw;
    height: 30vw;
    border-radius:10px;
  }
  .el-main section .sec .el-row .el-col .el-card{
    position:relative;
    width: 45vw;
    height:40vw;
  }
  .el-card{
    background: none !important;
    box-shadow: none !important;
    border:none;
  }
  .el-main section .sec .el-row .el-col .el-card span{
    position: absolute;
    /*border:solid 1px red;*/
    display: block;
    font-size:12px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-main section .sec .el-row .el-col .el-card span:nth-of-type(1){
    display: inline-block;
    z-index: 2;
    top:5px;
    right: 10px;
    color: #fff;
    font-size: 12px;
    background: rgba(0,0,0,0.3);
    border-radius:15px;
  }
  .el-main section .sec .el-row .el-col .el-card span:nth-of-type(1)::before{
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
  .el-main section .sec .el-row .el-col .el-card span:nth-of-type(2){
    display: inline-block;
    z-index: 2;
    bottom:11vw;
    left: 10px;
    color: #fff;
    font-size: 12px;
    background: rgba(0,0,0,0.3);
    border-radius:15px;
  }
  .el-main section .sec .el-row .el-col .el-card span:nth-of-type(2)::before{
    content: " ";
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 3px;
    width: 11px;
    height: 11px;
    background:url("../assets/人.png") no-repeat;
    background-size: 100% 100%;
  }
  .el-main section .sec .el-row .el-col .el-card span:nth-of-type(3){
    width: 42vw;
    text-align:left;
  }

</style>
<style>

</style>
