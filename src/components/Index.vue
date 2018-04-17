<template>
    <div class="main">
        <el-table
                stripe
                v-loading="loading"
                element-loading-background="#dddddd"
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="ID">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称">
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                class="page"
                @current-change="pageList">
        </el-pagination>
    </div>
</template>

<script>
import $http from '@/api/'

export default {
  data () {
    return {
      tableData: [],
      total: 0,
      loading: false
    }
  },
  mounted: function () {
    this.getList()
  },
  methods: {
    pageList: function (page) {
      this.search.page = page
      this.getList()
    },
    getList: function () {
      var _this = this
      _this.loading = true
      $http.index().then(function (res) {
        if (res.status === 200) {
          _this.tableData = res.data.data.lists
          _this.total = res.data.data.total
        }
        _this.loading = false
      })
    }
  }
}
</script>