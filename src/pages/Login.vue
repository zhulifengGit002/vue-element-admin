<template>
  <el-container>
    <el-header></el-header>
    <el-main class="main">
      <h1>V3 Admin</h1>
      <el-form ref="form" :model="form" class="z-depth-2">
        <el-form-item>
          <el-input v-model="form.username" placeholder="email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="password" type="password"></el-input>
        </el-form-item>
        <el-form-item style="text-align:right;">
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      var that = this
      var postData = {
        userName: that.form.username,
        pwd: that.form.password
      }
      that.$axios('post', 'login', postData).then(res => {
        console.log(res)
        if (res.code === 0) {
          that.$router.push('/home')
        } else {
          that.$message(res.message)
        }
      })
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
    color: #606266;
  }

  form {
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 2px;
  }

  .main {
    width: 400px;
    margin: 0px auto;
  }
</style>
