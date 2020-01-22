<template>
  <el-container>
    <el-header class="header">
      <vheader />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <navmenu></navmenu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'
export default {
  name: 'Layout',
  components: {
    'navmenu': NavMenu,
    'vheader': Header
  }
}
</script>

<style>
  .header {
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
  }
</style>
