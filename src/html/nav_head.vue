<template>
  <div class="head_nav">
    <div class="head">
      <h3>后台管理系统</h3>
      <h5>欢迎您-管理者</h5>
    </div>
    <el-col :span="4">
      <el-menu default-active="2" class="el-menu-vertical-demo" active-text-color="#ffd04b">
        <el-menu-item index="1" active="true">
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>管理数据页</span>
          </template>
          <el-submenu index="1-1">
            <template slot="title">商品</template>
            <el-menu-item index="1-1-1">首页商品</el-menu-item>
            <el-menu-item index="1-1-2">详情页商品</el-menu-item>
            <el-menu-item index="1-1-3">列表页商品</el-menu-item>
            <el-menu-item index="1-1-4">添加</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">用户</template>
            <el-menu-item index="1-2-1">用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="1-3">
            <template slot="title">订单</template>
            <el-menu-item index="1-3-1">用户订单</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" @click="logout()">
          <i class="el-icon-s-custom"></i>
          <span slot="title">退出登录</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <router-view></router-view>
  </div>
</template>



<script>
export default {
  methods: {
    logout() {
      this.$store.commit("changeflag", "false");
      this.$router.push("/login");
    }
  }
};
</script><style>
* {
  margin: 0;
  padding: 0;
}
.head_nav .head {
  width: 100%;
  padding: 8px 0;
  height: 50px;
  line-height: 50px;
  background-color: black;
  color: white;
}
.head_nav .head h3 {
  font-size: 22px;
  text-indent: 3em;
  float: left;
}
.head_nav .head h5 {
  margin-right: 20px;
  float: right;
}

.head_nav {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 66px;
}
.head_nav .el-col {
  height: 100%;
}
.head_nav .el-menu {
  height: 100%;
  overflow: hidden;
}
</style>