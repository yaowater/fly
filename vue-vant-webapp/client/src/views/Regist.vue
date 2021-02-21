<template>
<div class="qf-regist">
    <h1>登录</h1>
    <input v-model.trim="username" type="text">
    <input v-model.trim="password" type="password">
    <input v-model.trim="password2" type="password">
    <button @touchstart='confirm'>注册</button>
</div> 
</template>

<script>
export default {
    data: function() {
        return {
            username: '',
            password: '',
            password2: ''
        }
    },
    methods: {
        confirm() {
            // 表单验证
            let data = {
                username: this.username,
                password: this.password,
                password2: this.password2
            }
            this.$http.fetchRegist(data).then(()=>{
                setTimeout(()=>{
                    this.$router.push('/login')
                }, 1500)
            })
        }
    }
}
</script>

<style lang='scss' scoped>

</style>