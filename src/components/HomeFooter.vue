<template>
  <div class="footer">
    <!--
     <el-row>
      <el-col :span="24">
        <span>
          <i class="icon"></i>
          <a href="#" style="cursor: pointer;color:#8a8a8a;text-decoration: none">返回顶部</a>
        </span>
      </el-col>
    </el-row>
    -->
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <i class="icon"></i>
        <a href="#" style="cursor: pointer;color:#8a8a8a;text-decoration: none">返回顶部</a>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button>下载客户端</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <p>
          客服热线：027-87750710
          <br>
          武汉斗鱼网络科技有限公司
          <br>
          湖北省武汉市东湖开发区光谷软件园F4栋
          <br>
          版权所有 © www.douyu.com 鄂ICP备15011961号-1
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "HomeFooter",
    data: function () {
      return {}
    },
    components: {}
  }
</script>
<style scoped>
  .footer {
    margin: 10px auto 40px;
  }
  .footer .el-row:nth-of-type(1) .el-col{
    margin-bottom: 20px;
  }
  .icon {
    display: inline-block;
    vertical-align: middle;
    background: url('../assets/list.png') no-repeat;
    background-size: 245px 20px;
    height: 16px;
    width: 15px;
    background-position: -190px 0;
  }

  .el-button {
    background: darkorange;
    width: 320px;
    height: 45px;
    font-size: 16px;
    color: white;
    margin-bottom: 20px;
  }

  p {
    color: #8a8a8a;
    font-size: 11px;
    line-height: 20px;
  }
</style>
<style>

</style>
