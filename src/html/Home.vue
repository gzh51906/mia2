<template>
  <div class="home">
    <div class="head-home" @click="name()">首页</div>
    <el-row>
      <el-col :offset="1" :span="6">
        <div class="grid-content bg-purple">
          <i class="el-icon-s-custom"></i>
          用户量：{{user}}
        </div>
      </el-col>
      <el-col :offset="2" :span="6">
        <div class="grid-content bg-purple-light">
          <i class="el-icon-coin"></i>
          订单总数：{{order}}
        </div>
      </el-col>
      <el-col :offset="2" :span="6">
        <div class="grid-content bg-purple">
          <i class="el-icon-shopping-bag-1"></i>
          商品种类： {{type}}
        </div>
      </el-col>
      <el-col>
        <div style="float:left;margin-left:53px">
          <p class="newadd">新增用户:{{newuser}}</p>
          <p class="newadd">新增订单:{{neworder}}</p>
          <p class="newadd">新增商品种类:{{newtype}}</p>
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
      user: "",
      order: "",
      type: "",
      newuser: "",
      neworder: "",
      newtype: "",
      form: {
        name: "",
        date: "",
        content: ""
      },
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
    },
    async getData() {
      let result = await this.$home({ method: "get" }); //发起请求
      this.user = result.data[0][0].user;
      this.newuser = result.data[3][0].newuser;

      this.order = result.data[1][0].order;
      this.neworder = result.data[4][0].neworder;

      this.type = result.data[2][0].type;
      result.data[5][0].oldtype;
      this.newtype = result.data[2][0].type - result.data[5][0].oldtype;
    }
  },
  async created() {
    this.getData(); //发起请求
  },
  destroyed() {
    console.log("主页暂且无取消请求功能");
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