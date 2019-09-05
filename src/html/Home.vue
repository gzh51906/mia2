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
      <el-col>
        <div style="float:left;margin-left:53px">
          <p class="newadd" v-for="(item,index) in list1" :key="index+'1'">{{item.key}}</p>
        </div>
        <span class="sp1">营销范围</span>
        <img class="img" src="../assets/map.jpg" />
      </el-col>
      <el-col>
        <div style="margin:30px 53px 20px" class="input">
          <h2>操作登记</h2>
          <label>日期</label>
          <el-input v-model="form.date" placeholder="请输入内容" size="mini"></el-input>
          <label>操作人</label>
          <el-input v-model="form.name" placeholder="请输入内容" size="mini"></el-input>
          <label>操作内容</label>
          <el-input
            v-model="form.content"
            placeholder="请输入内容"
            size="mini"
            @keyup.13.native="operating_record()"
          ></el-input>
          <el-button type="success" round size="mini" @click="operating_record()">添加</el-button>
          <p style="margin-bottom:20px"></p>
          <template>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="操作人" width="180"></el-table-column>
              <el-table-column prop="content" label="操作内容"></el-table-column>
            </el-table>
          </template>
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
      form: {
        name: "",
        date: "",
        content: ""
      },
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
      ],
      list1: [
        { key: "新增用户：" },
        { key: "新增订单金额：" },
        { key: "新增商品种类：" }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    operating_record() {
      if (
        !!this.form.date != false &&
        !!this.form.name != false &&
        !!this.form.content != false
      ) {
        let form = {
          name: this.form.name,
          date: this.form.date,
          content: this.form.content
        };
        this.tableData.push(form);
        this.form.date = "";
        this.form.name = "";
        this.form.content = "";
      }
    }
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
.newadd {
  width: 200px;
  height: 40px;
  line-height: 40px;
  background: white;
  border-radius: 4px;
  margin: 20px 0;
  text-indent: 1em;
}
.sp1 {
  background: white;
  border-radius: 4px;
  padding: 10px;
  display: inline-block;
  width: 16px;
  margin-left: 190px;
}
.img {
  vertical-align: middle;
  margin-top: 20px;
  border-radius: 4px;
  width: 400px;
  margin-left: -5px;
}
h2 {
  font-size: 20px;
  margin-bottom: 20px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.input .el-input {
  width: 200px;
}
</style>