<template>
  <div>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题">
        </el-table-column>
        <el-table-column label="操作" width="90">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="ediPost(scope.row)">
              <span>编辑</span>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="90">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="delPost(scope.row)">
              <span>删除</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    getPost () {
      var that = this
      var postData = {
        pageSize: 0
      }
      that.$axios('post', 'blog/searchPost', postData).then(res => {
        console.log(res)
        if (res.code === 0) {
          that.tableData = res.message
          console.log(that.tableData)
        }
      })
    },
    ediPost (obj) {
      console.log(obj)
      var that = this
      that.$router.push({path: '/blog/writepost', query: {postId: obj._id}})
    },
    delPost (obj) {
      var that = this
      console.log(obj)
      var postData = {
        postId: obj._id
      }
      that.$axios('post', 'blog/deletePost', postData).then(res => {
        console.log(res)
        if (res.code === 0) {
          that.$message({
            message: '文章删除成功',
            type: 'success'
          })
        }
      })
    }
  },
  mounted () {
    var that = this
    that.getPost()
  }
}
</script>

<style>
</style>
