<template>
  <div class="list">
    <div class="button">
      <el-button type="primary" size="small">添加</el-button>
    </div>
    <div class="tabellist">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        size="normal"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="id" label="商品ID" width="80"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="120"></el-table-column>
        <el-table-column prop="url" label="商品图片路径" width="220" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="市场价格" width="120"></el-table-column>
        <el-table-column prop="name" label="销售价格" width="120"></el-table-column>
        <el-table-column label="操作" width="200">
          <template>
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style scoped>
.list {
  position: relative;
  height: 600px;
}
.el-button {
  margin: 10px 0 0 20px;
}
.tabellist {
  /* margin-left: 190px; */
  position: absolute;
  top: 50px;
  left: 170px;
}
.block {
  position: absolute;
  bottom: 20px;
  right: 150px;
}
</style>