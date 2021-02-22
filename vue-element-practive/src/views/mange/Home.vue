<template>
    <div class="home">

        <h1>我的首页管理</h1>
        <el-input v-model="imgText" placeholder="请输入内容"></el-input>
        <el-upload
            class="avatar-uploader"
            action="http://localhost:8090/api/v1/upload/img"
            :show-file-list="false"
            :on-success="imgUpload">
            <img v-if="uploadImg" :src='img.imgBaseUrl+uploadImg' class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-button type="primary" @click='submit'>提交</el-button>
    </div>
</template>

<script>
import img from '@/utils/img'
export default {
    name:'Home',
    data: function() {
        return {
            img,
            imgText: '',
            uploadImg:''
        }
    },
    methods: {
        imgUpload(res) {
            console.log('图片上传成功', res)
            this.uploadImg = res.data.url
        },
        submit() {
            let data = {
                img: this.uploadImg,
                text: this.imgText
            }
            this.$http.fetchAdCreate(data).then(()=>{
                this.$message({
                    message: '恭喜你成功',
                    type: 'success'
                })
                this.imgText = ''
                this.uploadImg = ''
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>