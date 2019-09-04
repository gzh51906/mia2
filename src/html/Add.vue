<template>
  <div class="add">
    <div class="addlist">
      <el-form ref="form" :model="sizeForm" label-width="80px">
        <el-form-item label="商品名称">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品标题">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select v-model="sizeForm.region" placeholder="请选择商品分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品ID">
          <el-input v-model="sizeForm.id" style="width:150px" placeholder="请输入商品价格"></el-input>
        </el-form-item>
        <el-form-item label="市场价格">
          <el-input v-model="sizeForm.price" style="width:150px" placeholder="请输入商品价格"></el-input>
        </el-form-item>
        <el-form-item label="销售价格">
          <el-input v-model="sizeForm.saleprice" style="width:150px" placeholder="请输入商品价格"></el-input>
        </el-form-item>
        <el-form-item label="库存">
          <el-input v-model="sizeForm.kucun" style="width:150px" placeholder="请输入库存数量"></el-input>
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
        <el-button type="primary" size="small">添加</el-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      sizeForm: {
        name: "",
        region: "",
        price: "",
        saleprice: "",
        id: "",
        kucun: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style scoped>
.addlist {
  position: absolute;
  top: 50px;
  left: 250px;
}
.add {
  position: relative;
}
</style>
