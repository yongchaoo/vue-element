<template>
    <div class="login">
        <el-form name="aa" :inline="true" label-position="right" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item label=" ">
                <el-button type="primary" @click="login()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import $http from '@/api/'
import config from '@/config'

export default {
  data () {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  },
  mounted: function () {
    var token = localStorage.getItem('token')
    if (token) {
      this.$router.push('/index')
    }
  },

  methods: {
    login: function () {
      var data = {
        grant_type: 'password',
        client_id: config.oauth_client_id,
        client_secret: config.oauth_secret,
        username: this.user.name,
        password: this.user.password
      }
      var _this = this
      $http.login(data).then(function (res) {
        if (res.status === 200) {
          $http.setToken(res.data.access_token)
          _this.$message({
            showClose: false,
            message: '登录成功',
            type: 'success'
          })
          _this.$router.push('/index')
        } else {
          _this.$message({
            showClose: false,
            message: '登录失败',
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style>
    .login{
        width: 300px;
        margin: 100px auto;
        background-color: #ffffff;
        padding: 30px 30px 5px;
        border-radius: 5px;
    }
</style>