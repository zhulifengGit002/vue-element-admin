<template>
  <div>
    <el-row>
      <el-col :span="12" class="editor-title">
        <el-input placeholder="输入文章标题" v-model="editor.title"></el-input>
      </el-col>
      <el-col :span="12" >
        <el-row type="flex" class="row-bg" justify="end">
          <el-dropdown trigger="click" :hide-on-click="false">
            <el-button type="text">
              发布<i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">
                <el-button size="mini">后端</el-button> <el-button size="mini">前端</el-button> <el-button size="mini">开发工具</el-button>
              </el-dropdown-item>
              <el-dropdown-item class="clearfix">
                <el-button size="mini">代码人生</el-button><el-button size="mini">阅读</el-button>
              </el-dropdown-item>
              <el-dropdown-item class="clearfix">
                <el-button type="primary" plain size="mini" @click="submintPost">发布</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>

          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <mavon-editor ref=md v-model="editor.content" @imgAdd="$imgAdd" ></mavon-editor>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import $ from 'jquery'
export default {
  name: 'WriterPost',
  data () {
    return {
      editor: {
        _id: '',
        title: '',
        sort: '',
        label: '',
        content: '',
        timestamp: ''
      }
    }
  },
  watch: {
    editor (val) {
      console.log(val)
    }
  },
  methods: {
    submintPost () {
      var that = this
      var postData = {
        title: that.editor.title,
        sort: that.editor.sort,
        label: that.editor.label,
        content: that.editor.content
      }
      that.$axios('post', 'blog/addPost', postData).then(res => {
        if (res.code === 0) {
          that.$message({
            message: '文章发布成功',
            type: 'success'
          })
        } else {
          that.$message(res.message)
        }
      })
    },
    $imgAdd (pos, file) {
      var that = this
      var formdata = new FormData()
      console.log(pos)
      console.log(file)
      formdata.append('imgFile', file)
      console.log(formdata)
      console.log(formdata.getAll('imgFile'))
      var postData = {
        formdata: formdata
      }
      that.$axios('filePost', '/upload', formdata).then(res => {
        console.log(res.url)
        that.$refs.md.$img2Url(pos, res.url)
      })
    },
    getPostData (id) {
      var that = this
      var postId = id
      var postData = {
        postId: postId
      }
      that.$axios('post', 'blog/searchPost', postData).then(res => {
        console.log(res.message[0])
        that.editor = res.message[0]
      })
    }
  },
  mounted () {
    var that = this
    console.log(that.$route.query.postId)
    that.getPostData(that.$route.query.postId)
  }
}
</script>

<style>
  .editor-title{
    margin-bottom: 20px;
  }
</style>
