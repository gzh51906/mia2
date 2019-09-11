<template>
  <div class="list">
    <div class="button">
      <el-button type="primary" size="small" @click="handleClick()">添加</el-button>
    </div>
    <div class="tabellist">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <!-- <el-table-column type="index" width="50"></el-table-column> -->
        <el-table-column prop="id" label="商品ID" width="80" align="center"></el-table-column>
        <el-table-column prop="type" label="分类" width="90" align="center"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="200" show-overflow-tooltip></el-table-column>
        <el-table-column prop="url" label="商品图片路径" width="220" show-overflow-tooltip></el-table-column>
        <el-table-column prop="marketPrice" label="市场价格" width="90" align="center"></el-table-column>
        <el-table-column prop="soldPrice" label="销售价格" width="90" align="center"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleClick(scope.row)">编辑</el-button>
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
        :page-size="7"
        layout="prev, pager, next, jumper"
        :total="total"
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
      total: null,
      tableData3: [],
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
    async handleCurrentChange(val) {
      //监听页面的改变
      let res = await this.$list({
        method: "get",
        params: { number: val, type: "list" }
      });
      this.tableData3 = res.data[0];
      this.total = res.data[1][0].list;
    },
    handleClick(row = {}) {
      //row当前行数据,是一个对象,跳转到添加页，把数据带过去
      let data = {
        id: row.id,
        type: row.type,
        name: row.name,
        url: row.url,
        marketPrice: row.marketPrice,
        soldPrice: row.soldPrice
      };
      this.$router.push({
        path: "/nav_head/add",
        query: { name: "list", data }
      });
    },
    deleteRow(index, rows, row) {
      rows.splice(index, 1); //删除当前行 index索引值 rows 所有的数据 row 当前行数据
      this.$list({
        method: "delete",
        params: { id: row.id, type: "list" }
      });
    }
  },
  created() {
    this.handleCurrentChange(1);
  },
  destroyed() {
    console.log("listdouble暂无取消请求功能");
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
  margin-left: 190px;
  position: absolute;
  top: 50px;
  left: 130px;
}
.block {
  position: absolute;
  bottom: 20px;
  right: 150px;
}
</style>