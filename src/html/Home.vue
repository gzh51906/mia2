<template>
  <div class="home">
    <div class="head-home" @click="name()">首页</div>
    <el-row>
      <el-col v-for="(item,index) in list" :key="index" :offset="item.offset" :span="6">
        <div :class="item.class1">
          <i :class="item.class2"></i>
          {{item.content}}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "home",

      list: [
        {
          offset: 1,
          class1: "grid-content bg-purple",
          class2: "el-icon-s-custom",
          content: "用户量："
        },
        {
          offset: 2,
          class1: "grid-content bg-purple-light",
          class2: "el-icon-coin",
          content: "订单总金额："
        },
        {
          offset: 2,
          class1: "grid-content bg-purple",
          class2: "el-icon-shopping-bag-1",
          content: "商品种类："
        }
      ]
    };
  }
};
</script>
<style scoped>
.head-home {
  background: white;
  font-size: 20px;
  padding: 10px 0;
  text-indent: 2em;
  font-weight: bold;
  border: 1px solid #cccccc;
}
.el-icon-s-custom,
.el-icon-coin,
.el-icon-shopping-bag-1 {
  margin-left: 20px;
  font-size: 20px;
}
.grid-content {
  border-radius: 4px;
  background: white;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  margin-top: 20px;
}
</style>