<template>
<div class="cate-select">
    <el-select placeholder="请选择品类" :value='value' @change='cateChange'>
        <el-option
            v-for="item in cates"
            :key="item.id"
            :label="item.cate_zh"
            :value="item.cate">
        </el-option>
    </el-select>
</div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            require: true
        }
    },
    data: function() {
        return {
            cates: []
        }
    },
    mounted() {
        this.$http.fetchCates({}).then(res=>{
            // console.log('品类列表', res)
            this.cates = res.list
        })
    },
    methods: {
        cateChange(val) {
            this.$emit('input', val)
        }
    }
}
</script>

<style lang='scss' scoped>

</style>

