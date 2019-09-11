<template>
  <el-container>
    <el-header>
      <h3>后台管理系统</h3>
      <h5>欢迎您-管理者</h5>
    </el-header>
    <el-container>
      <el-aside>
        <el-col>
          <el-menu default-active="2" class="el-menu-vertical-demo" active-text-color="#ffd04b">
            <el-menu-item index="1" @click="goto('/nav_head/home')" class="is-active">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>管理数据页</span>
              </template>
              <el-submenu index="1-1">
                <template slot="title">商品</template>
                <el-menu-item index="1-1-1" @click="goto('/nav_head/homelist')">首页商品</el-menu-item>
                <el-menu-item index="1-1-2" @click="goto('/nav_head/detaillist')">详情页商品</el-menu-item>
                <el-menu-item index="1-1-3" @click="goto('/nav_head/list')">列表页商品</el-menu-item>
                <el-menu-item index="1-1-4" @click="goto('/nav_head/kind')">商品分类</el-menu-item>
                <el-menu-item index="1-1-5" @click="goto('/nav_head/add')">添加</el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">用户</template>
                <el-menu-item index="1-2-1" @click="goto('/nav_head/userslist')">用户列表</el-menu-item>
              </el-submenu>
              <el-submenu index="1-3">
                <template slot="title">订单</template>
                <el-menu-item index="1-3-1" @click="goto('/nav_head/order')">用户订单</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" @click="logout()">
              <i class="el-icon-s-custom"></i>
              <span slot="title">退出登录</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>



<script>
export default {
  data() {
    return {};
  },
  methods: {
    async logout() {
      // this.$store.commit("changeflag", "false");
      let statu = await this.$login({
        //设置登陆状态为0
        method: "patch",
        data: { status: "0" }
      });
      statu = JSON.parse(statu.config.data).status;
      this.$router.push("/login");
      // if (statu == "0") {
      //   this.$router.push("/login");
      // }
    },
    goto(path) {
      path == this.$route.path ? "return" : this.$router.push(path);
    }
  }
};
</script>



<style >
.el-header {
  line-height: 60px;
  height: 60px;
  background-color: black;
  color: white;
}
.el-header h3 {
  float: left;
  font-size: 22px;
}
.el-header h5 {
  margin-right: 20px;
  float: right;
}

.el-aside {
  color: #333;
  width: 250px !important;
  line-height: 200px;
  overflow: hidden;
  min-height: 690px;
  border-right: solid 1px #cccccc;
}

.el-main {
  padding-bottom: 40px;
  background-color: #eef5f9;
  color: #333;
}
</style>