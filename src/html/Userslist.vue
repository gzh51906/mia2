<template>
  <div class="list">
    <div class="tabellist">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="用户名" width="100" align="center"></el-table-column>
        <el-table-column label="注册时间" width="150" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="city" label="城市" width="130" align="center"></el-table-column>
        <el-table-column prop="score" label="评分" width="130" align="center"></el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="deleteRow(scope.$index, tableData3,scope.row)"
            >删除</el-button>
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
          city: "广州",
          score: "98"
        },
        {
          date: "2016-05-02",
          name: "王大虎",
          city: "深圳",
          score: "100"
        },
        {
          date: "2016-05-04",
          name: "王虎虎",
          city: "长沙",
          score: "60"
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
    },
    deleteRow(index, rows, row) {
      console.log(row); //当前行数据,是一个对象,有id等值以此可以删除数据库的东西
      rows.splice(index, 1); //删除当前行 index索引值 rows 所有的数据 row 当前行数据
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
  left: 250px;
  box-sizing: border-box;
}
.block {
  position: absolute;
  bottom: 20px;
  right: 150px;
}
</style>