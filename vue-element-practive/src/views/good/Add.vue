<template>
<div class="qf-good-add">
    <h1>商品新增页面</h1>
    <div class="qf-gd-form">

        <!-- 第一行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>商品名称：</span>
            </el-col>
            <el-col :span="20">
                <el-input v-model="info.name" placeholder="请输入商品名称"></el-input>
            </el-col>
        </el-row>

        <!-- 第二行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>商品简介：</span>
            </el-col>
            <el-col :span="20">
                <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入商品简介"
                    v-model="info.desc">
                </el-input>
            </el-col>
        </el-row>

        <!-- 第三行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>商品价格：</span>
            </el-col>
            <el-col :span="20">
                <el-input v-model.number="info.price" placeholder="请输入商品价格"></el-input>
            </el-col>
        </el-row>

        <!-- 第四行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>商品品类：</span>
            </el-col>
            <el-col :span="20">
                <!-- v-model 是 :value 和 @input 的简写 -->
                <CateSelect v-model="info.cate" />
            </el-col>
        </el-row>

        <!-- 第五行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>商品图片：</span>
            </el-col>
            <el-col :span="20">
                <!-- <el-input v-model="info.img" placeholder="请输入商品图片"></el-input> -->
                <el-upload
                    class="avatar-uploader"
                    action="http://localhost:8090/api/v1/upload/img"
                    :show-file-list="false"
                    :on-success="imgUpload">
                    <img v-if="info.img" :src='img.imgBaseUrl+info.img' class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-col>
        </el-row>

        <!-- 第六行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>是否热销：</span>
            </el-col>
            <el-col :span="20">
                <el-switch
                    v-model="info.hot"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
            </el-col>
        </el-row>

        <!-- 第七行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4">
                <span>商品排名：</span>
            </el-col>
            <el-col :span="20">
                <el-input-number 
                    v-model="info.rank" 
                    :min="0" 
                    :max="100000" 
                    label="给商品排序">
                </el-input-number>
            </el-col>
        </el-row>

        <!-- 第八行 -->
        <el-row type='flex' align='middle'>
            <el-col :span="4"></el-col>
            <el-col :span="20">                
                <el-button v-if="$route.params.id!=0" @click="submit" type="primary">修改</el-button>
                <el-button v-else @click="submit" type="primary">添加</el-button>
            </el-col>
        </el-row>


 

    </div>
</div> 
</template>

<script>
import { CateSelect } from '@/components/'
import img from '@/utils/img'
export default {
    components: {
        CateSelect,
    },
    data: function() {
        return {
            img,
            cates: [
                { id: 1, cate_zh: '手机数码1', cate: 'a' },
                { id: 2, cate_zh: '手机数码2', cate: 'b' },
                { id: 3, cate_zh: '手机数码3', cate: 'c' },
                { id: 4, cate_zh: '手机数码4', cate: 'd' },
            ],
            info: {
                name: '',
                desc: '',
                price: '',
                cate: '',
                img: '',
                hot: false,
                rank: 0
            }
        }
    },
    mounted() {
        let id = this.$route.params.id
        if(id==0) id = false
        if(id) {
            // 这是编辑 
            this.$http.fetchGoodDetail({id}).then(res=>{
                this.info = res
            })
        }
    },
    methods: {
        // 图片上传成功时触发
        imgUpload(res) {
            console.log('图片上传成功', res)
            this.info.img = res.data.url
        },
        submit() {
            console.log('提交', this.info)
            // 表单验证
            let id = this.$route.params.id
            if(id==0) id=false
            let data = this.info
            if(id) {
                data.id = id
            }
            this.$http.fetchCreateGood(data).then(()=>{
                this.$message({
                    message: '恭喜你，商品添加成功',
                    type: 'success'
                })
                this.info = {
                    name: '',
                    desc: '',
                    price: '',
                    cate: '',
                    img: '',
                    hot: false,
                    rank: 0
                }
            })
        }
    }
}
</script>

<style lang='scss' scoped>
.qf-good-add {
    padding-bottom: 200px;
}
.qf-gd-form {
    width: 60%;
    margin: 35px auto;
}
.el-row {
    margin-bottom: 25px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>