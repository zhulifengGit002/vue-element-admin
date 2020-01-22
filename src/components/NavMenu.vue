<template>
  <el-row class="tac">
    <el-col :span="24" >
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      unique-opened
      router
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="overflow: hidden;">
        <el-submenu index="1">
          <template slot="title">
            <span>博客</span>
          </template>
          <el-menu-item-group >
            <el-menu-item index="/blog/post">文章</el-menu-item>
            <el-menu-item index="/blog/writepost">添加文章</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <span>导航二</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
