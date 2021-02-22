<template>
    <dir class="login">
        <div class="box">
            <div class="title">欢迎登录系统</div>

            <div>
                <el-input 
                    v-model="username" 
                    placeholder="用户名"
                    @keyup.enter.native='login'
                ></el-input>
            </div>
            <div>
                <el-input 
                    v-model="password" 
                    placeholder="密码" 
                    type="password"
                    @keyup.enter.native='login'
                ></el-input>
            </div>
            <div>
                <el-button 
                    type="primary" 
                    @click="login"
                >登录</el-button>
            </div>
        </div>
    </dir>
</template>

<script>
export default {
    name:'Login',
    data(){
        return {
            username:'',
            password:'',
        }
    },
    methods:{
        login(){
            let data={
                username:this.username,
                password:this.password
            }
            this.$http.fetchLogin(data).then(res=>{
                console.log('登录成功',res);
                localStorage.setItem('token',res.data.token)
                this.$router.push('/home')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .login{
        background-color: #2A3949;
        width: 100%;
        height:100%;
        position: relative;
        .box{
            width: 400px;
            padding-top:100px;
            position: absolute;
            top:0;
            left:0;
            right: 0;
            bottom: 0;
            margin: auto;
            .title{
                font-size: 40px;
                text-align: center;
                line-height: 100px;
                width: inherit;
                height: inherit;
                color: #fff;
            }
            div{
                margin:10px 0;
                text-align: center;
                &:last-child{
                    .el-button{
                        width: 100%;
                        background-color:#379BFF;
                    }
                }
            }
        }
    }
</style>