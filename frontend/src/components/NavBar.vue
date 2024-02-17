<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
        >
            <el-menu-item index="0">
                <template #title><RouterLink to="/">Home</RouterLink></template>
            </el-menu-item>

            <div class="flex-grow" />

            <el-menu-item index="1">
                <template #title><RouterLink to="/favorites/">Favorites</RouterLink></template>
            </el-menu-item>
        
            <el-menu-item index="2">
                <template #title><RouterLink to="/add-new/">Add New</RouterLink></template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "NavBar",
    components: { RouterLink },
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>