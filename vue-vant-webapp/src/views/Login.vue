<template>
<div class="qf-regist">
    <h1>登录页</h1>
    <input v-model.trim="username" type="text">
    <input v-model.trim="password" type="password">
    <button @touchstart='confirm'>登录</button>
</div> 
</template>

<script>
export default {
    data: function() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        confirm() {
            // 表单验证
            let data = {
                username: this.username,
                password: this.password
            }
            this.$http.fetchLogin(data).then(res=>{
                localStorage.setItem('token', res.token)
                this.$router.back()
            })
        }
    }
}
</script>

<style lang='scss' scoped>

</style>