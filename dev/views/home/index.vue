<template lang="html">
    <div class="home-index">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo top-nav" mode="horizontal">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu class="auth" index="2">
                <template slot="title">{{ todoUser.username || "howard" }}</template>
                <el-menu-item index="2-1">
                    <router-link to="/auth/info" replace>个人信息</router-link>
                </el-menu-item>
                <el-menu-item index="2-2" @click="handleLogout">登出</el-menu-item>
            </el-submenu>
        </el-menu>
        <el-row class="tac">
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {
    mapGetters,
} from 'vuex';
import authService from '@/services/authService';

export default {
    data() {
        return {
            activeIndex: '1',
        };
    },
    computed: mapGetters([
        'todoUser',
    ]),
    methods: {
        // handleSelect(key, keyPath) {
        //     console.log(key, keyPath);
        // },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleLogout() {
            // authService.logout().then(() => {
            //     this.$store.dispatch('logout');
            //     this.$router.replace('/auth/login');
            // });
            this.$store.dispatch('logout');
            this.$router.replace('/auth/login');
        },
    },
};
</script>

<style lang="scss" scoped>
.el-menu {
    border-radius: 0;
}

.tac {
    width: 21%;

    .el-menu {
        height: 100vh;
    }
}

.auth {
    float: right;

    a {
        text-decoration: none;
    }
}

</style>
