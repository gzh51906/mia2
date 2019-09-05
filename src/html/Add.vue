<template>
  <div class="add">
    <h3>from:{{text}}</h3>
    <div class="addlist">
      <el-form ref="form" :model="sizeForm" label-width="100px">
        <el-form-item label="商品名称">
          <el-input v-model="sizeForm.name" placeholder="请输入商品名称或商品总分类">{{sizeForm.name}}</el-input>
        </el-form-item>
        <el-form-item label="商品标题">
          <el-input v-model="sizeForm.title" placeholder="请输入商品标题或商品次分类">{{sizeForm.title}}</el-input>
        </el-form-item>
        <el-form-item label="商品图片路径">
          <el-input v-model="sizeForm.url" placeholder="请输入商品图片路径">{{sizeForm.url}}</el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-input
            v-model="sizeForm.type"
            style="width:150px"
            placeholder="请输入商品分类"
          >{{sizeForm.type}}</el-input>
        </el-form-item>
        <el-form-item label="商品ID">
          <el-input v-model="sizeForm.id" style="width:150px" placeholder="请输入商品ID">{{sizeForm.id}}</el-input>
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
        <el-form-item label="库存">
          <el-input
            v-model="sizeForm.kucun"
            style="width:150px"
            placeholder="请输入库存数量"
          >{{sizeForm.kucun}}</el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="sizeForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker
              type="fixed-time"
              placeholder="选择时间"
              v-model="sizeForm.date2"
              style="width: 100%;"
            ></el-time-picker>
          </el-col>
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button type="primary" size="small">提交</el-button>
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
          kucun: "",
          date1: "",
          date2: "",
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
          kucun: "",
          date1: "",
          date2: "",
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
      // console.log("submit!");
    }
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
