<template>
  <div class="common-layout">
    <el-container>

      <el-header class="page-header">
        <NavBarVue/>
      </el-header>
      
      <el-main class="page-main">
        <router-view/>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import NavBarVue from './components/NavBar.vue'
import { RouterView } from 'vue-router'

export default {
  name: "App",
  components: {
    NavBarVue,
    RouterView
  }
}
</script>

<style>
/* .page-header {
  background-color: 
}

.page-main {
  background-color: rgb(66, 88, 146);
} */

.page-content {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>