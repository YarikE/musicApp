<template>
  <div class="common-layout">
    <el-container>

      <el-header>
        <NavBarVue/>
      </el-header>
      
      <el-main>
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
