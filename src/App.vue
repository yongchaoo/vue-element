<template>
    <div id="app">
        <el-row v-if="token">
            <!--<menus class="left-menu">-->
                <!--<h3 class="logo"><a href="/">Admin</a></h3>-->
            <!--</menus>-->
            <el-col :span="21" :gutter="0" :offset="3">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item class="active">列表</el-breadcrumb-item>
                </el-breadcrumb>
                <el-dropdown @command="operate" class="header">
                    <img src="/static/image/head.jpg"/>
                    <el-dropdown-menu slot="dropdown" :click="true">
                        <el-dropdown-item command="/user/profile">基本资料</el-dropdown-item>
                        <el-dropdown-item command="/logout">安全退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <router-view/>
            </el-col>
            <el-col :span="21" :gutter="0" :offset="3" class="footer">Copyright © 2017 Flyerboy All Rights Reserved
            </el-col>
        </el-row>

        <router-view v-if="!token"/>
    </div>
</template>

<script>
    // import Menus from '@/components/Menu'

    export default {
        name: 'App',
        data() {
            return {
                token: false
            }
        },
        mounted: function () {
            this.token = localStorage.getItem('token') ? true : false
        },
        watch: {
            '$route.path': function ($newVal, $oldVal) {
                this.token = localStorage.getItem('token') ? true : false
            }
        },
        methods: {
            operate: function (command) {
                if (command === '/logout') {
                    localStorage.removeItem('token')
                    this.$router.push('login')
                } else {
                    this.$router.push(command)
                }
            }
        },
        components: {
            // Menus
        }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        background-color: #eeeeee;
    }

    .header {
        position: absolute;
        top: 5px;
        right: 20px;
    }

    .header img {
        width: 38px;
        height: 38px;
        border-radius: 20px;
        border: 1px solid #aaaaaa;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .main {
        padding: 20px;
        min-height: 600px;
        margin-bottom: 20px;
    }

    .main table {
        background: #ffffff;
    }

    .left-menu {
        background-color: #33374B;
    }

    .logo {
        padding: 20px 0 15px 20px;
        font-size: 24px;
        border-bottom: 2px solid #3a8ee6;
    }

    .logo a {
        color: #ffffff;
        text-decoration: none;
    }

    .left-menu .el-menu {
        border-right: 0;
    }

    .breadcrumb {
        line-height: 40px;
        padding: 5px 20px;
        background: #ffffff;
    }

    .breadcrumb span {
        color: #069;
        font-weight: normal;
    }

    .breadcrumb .active {
        color: #aaaaaa;
    }

    .page {
        margin: 20px 0 0;
        margin-left: -10px;
    }

    .page .el-pager li.number {
        background-color: #ffffff;
    }

    .el-submenu .el-menu-item {
        padding-left: 60px !important;
    }

    .footer {
        position: fixed;
        bottom: 0;
        right: 0;
        font-size: 12px;
        color: #888888;
        padding: 15px 20px;
        text-align: center;
        background-color: #ffffff;
        margin-top: 40px;
    }
</style>
