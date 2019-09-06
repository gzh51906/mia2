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
        <el-table-column prop="id" label="商品ID" width="80"></el-table-column>
        <el-table-column prop="name" label="商品总分类" width="130"></el-table-column>
        <el-table-column prop="title" label="商品次分类" width="130"></el-table-column>
        <el-table-column prop="type" label="商品具体分类" width="130"></el-table-column>
        <el-table-column prop="url" label="商品图片路径" width="300" align="center" show-overflow-tooltip></el-table-column>
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
          id: "0",
          name: "数码产品",
          title: "单反",
          type: "尼康",
          url:
            "https://img01.miyabaobei.com/d1/p5/2018/09/25/cc/88/cc88ed2e69599690f11f9aafb5c00e35691177022.jpg"
        },
        {
          id: "1",
          name: "数码产品",
          title: "手机",
          type: "华为",
          url:
            "https://img02.miyabaobei.com/d1/p5/2018/09/25/cc/88/54f5s4dfsdfsdf456sd4f56sf4s5f4s5df4dcsd2.jpg"
        },
        {
          id: "2",
          name: "家用电器",
          title: "微波炉",
          type: "未知",
          url:
            "https://img03.miyabaobei.com/d1/p5/2018/09/55/cc/84/cc8d5d5df5fdsdfhr8e81vd95f45sdfs55sd691177022.jpg"
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
    handleClick(row = {}) {
      //row当前行数据,是一个对象,跳转到添加页，把数据带过去
      let data = {
        id: row.id,
        name: row.name,
        title: row.title,
        type: row.type,
        url: row.url
      };
      this.$router.push({
        path: "/nav_head/add",
        query: { name: "kind", data }
      });
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
  left: 130px;
}
.block {
  position: absolute;
  bottom: 20px;
  right: 150px;
}
</style>