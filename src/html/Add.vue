<template>
  <div class="add">
    <h3>from:{{text}}</h3>
    <div class="addlist">
      <el-form ref="form" :model="sizeForm" label-width="120px">
        <el-form-item label="商品ID">
          <el-input v-model="sizeForm.id" style="width:150px" placeholder="请输入商品ID">{{sizeForm.id}}</el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-input
            v-model="sizeForm.type"
            style="width:150px"
            placeholder="请输入商品分类"
          >{{sizeForm.type}}</el-input>
        </el-form-item>
        <el-form-item label="商品名称/总分类">
          <el-input
            v-model="sizeForm.name"
            placeholder="请输入商品名称或商品总分类"
            style="width:500px"
          >{{sizeForm.name}}</el-input>
        </el-form-item>
        <el-form-item label="商品图片路径">
          <el-input
            v-model="sizeForm.url"
            placeholder="请输入商品图片路径"
            style="width:500px"
          >{{sizeForm.url}}</el-input>
        </el-form-item>
        <el-form-item label="市场价格">
          <el-input
            v-model="sizeForm.marketPrice"
            style="width:150px"
            placeholder="请输入市场价格"
          >{{sizeForm.marketPrice}}</el-input>
        </el-form-item>
        <el-form-item label="销售价格">
          <el-input
            v-model="sizeForm.soldPrice"
            style="width:150px"
            placeholder="请输入销售价格"
          >{{sizeForm.soldPrice}}</el-input>
        </el-form-item>

        <el-form-item label="商品次分类">
          <el-input
            v-model="sizeForm.title"
            placeholder="商品次分类"
            style="width:500px"
          >{{sizeForm.title}}</el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input
            v-model="sizeForm.date"
            style="width:150px"
            placeholder="添加商品分类必写"
          >{{sizeForm.date}}</el-input>
        </el-form-item>
      </el-form>
      <!-- <el-form-item label="库存">
          <el-input
            v-model="sizeForm.kucun"
            style="width:150px"
            placeholder="请输入库存数量"
          >{{sizeForm.kucun}}</el-input>
      </el-form-item>-->
      <div class="button">
        <el-button type="primary" size="small" @click="onSubmit()" style="margin-left:35px">提交</el-button>
        <el-button size="small" @click="goback()" v-show="this.$route.query.data">返回</el-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    if (this.$route.query.data) {
      return {
        sizeForm: {
          name: this.$route.query.data.name,
          title: this.$route.query.data.title,
          type: this.$route.query.data.type,
          url: this.$route.query.data.url,
          marketPrice: this.$route.query.data.marketPrice,
          soldPrice: this.$route.query.data.soldPrice,
          id: this.$route.query.data.id,
          // kucun: "",
          date: this.$route.query.data.date,
          delivery: false,
          resource: "",
          desc: ""
        },
        text: this.$route.query.name
      };
    } else {
      return {
        sizeForm: {
          name: "",
          title: "",
          type: "",
          url: "",
          marketPrice: "",
          soldPrice: "",
          id: "",
          // kucun: "",
          date: "",
          delivery: false,
          resource: "",
          desc: ""
        },
        text: "add"
      };
    }
  },
  methods: {
    onSubmit() {
      if (
        !!this.$route.query.name == true &&
        !!this.$route.query.data.name == false
      ) {
        //里面写添加的代码post
        this.$add({
          method: "post",
          data: { data: this.sizeForm, type: this.$route.query.name }
        });
      }
      if (this.$route.query.data.name) {
        //里面写修改的代码 patch
        this.$add({
          method: "patch",
          data: { data: this.sizeForm, type: this.$route.query.name }
        });
      }
    },
    goback() {
      //返回上一个页面
      if (this.$route.query.data) {
        this.$router.go(-1);
      }
    }
  },
  destroyed() {
    console.log("add无取消响应功能");
  }
};
</script>
<style scoped>
.addlist {
  position: absolute;
  top: 0;
  left: 250px;
}
.add {
  position: relative;
}
h3 {
  margin-left: 20px;
  font-size: 20px;
}
</style>
