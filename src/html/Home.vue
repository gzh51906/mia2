<template>
  <div class="home">
    <div class="head-home">首页</div>
    <p>用户量</p>
    <p>订单总金额</p>
    <p>商品种类</p>
    <p>今日新增订单</p>
    <p>今日新增用户</p>
  </div>
</template>

<script>
export default {
  data() {
    return { name: "home" };
  }
};
</script>
<style scoped>
.home {
  background: #eef5f9;
}
.head-home {
  background: white;
  font-size: 20px;
  padding: 10px 0;
  text-indent: 2em;
  font-weight: bold;
  border: 1px solid #cccccc;
}
</style>