<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
        >
            <el-menu-item index="0" class="menu-item">
                <template #title>
                    <RouterLink to="/" style="text-decoration: none;">
                        <h3 class="menu-item-text">Главная</h3>
                    </RouterLink>
                </template>
            </el-menu-item>

            <div class="flex-grow" />

            <el-menu-item index="1" class="menu-item">
                <template #title>
                    <RouterLink to="/favorites/" style="text-decoration: none;">
                        <h3 class="menu-item-text">Избранное</h3>
                    </RouterLink>
                </template>
            </el-menu-item>
        
            <el-menu-item index="2" class="menu-item">
                <template #title>
                    <RouterLink to="/add-new/" style="text-decoration: none;">
                        <h3 class="menu-item-text">Добавить новую песню</h3>
                    </RouterLink>
                </template>
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

/* .el-menu {} */

/* .menu-item-text {
    color:white;
    text-decoration: none
} */
</style>
