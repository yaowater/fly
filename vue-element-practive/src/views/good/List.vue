<template>
<div class="qf-good-list">
    <h1>商品列表页</h1>
    <div>
        <el-row type="flex" align="middle">
            <el-col :span="2">品类筛选</el-col>
            <el-col :span="4">
                <CateSelect v-model='cate' />
            </el-col>
        </el-row>
    </div>
    <div>
        <el-table
            :data="list"
            style="width: 100%">

            <el-table-column
            align='center'
            label="商品"
            width="180">
            <template slot-scope="scope">
                <img class="qf-good-img" :src="img.imgBaseUrl+scope.row.img">
                <div v-text="scope.row.name">商品名称</div>
            </template>
            </el-table-column>

            <el-table-column
                label="商品描述"
                align='center'
                prop='desc'
                width="180">
            </el-table-column>

            <el-table-column
                label="价格"
                align='center'
                prop='price'
                width="100">
            </el-table-column>

            <el-table-column
                label="品类"
                align='center'
                prop='cate'
                width="80">
            </el-table-column>

            <el-table-column
                label="是否热销"
                align='center'
                prop='hot'
                width="60">
            </el-table-column>

            <el-table-column
                label="商品排名"
                align='center'
                prop='rank'
                width="60">
            </el-table-column>

            <el-table-column
                label="创建时间"
                align='center'
                prop='create_time'
                width="100">
            </el-table-column>

            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="skipToAdd(scope.row)"
                >编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                >删除</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
    <div class="qf-gl-page">
        <el-pagination
            layout="prev, pager, next"
            :page-size='2'
            @current-change='pageChange'
            :total="total">
        </el-pagination>
    </div>
</div>
</template>

<script>
import { CateSelect } from '@/components/'
import img from '@/utils/img'

export default {
    components: {
        CateSelect
    },
    data: function() {
        return {
            img,
            cate: '',
            page: 1,
            list: [],
            total: 0
        }
    },
    watch: {
        cate() {
            this.page = 1
            this.init()
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            let params = {
                cate: this.cate,
                page: this.page
            }
            this.$http.fetchGoodList(params).then(res=>{
                console.log('商品列表', res)
                this.list = res.list
                this.total = res.total
            })
        },
        pageChange(page) {
            this.page = page
            this.init()
        },
        skipToAdd(row) {
            this.$router.push('/goodadd/'+row._id)
        }
    }
    
}
</script>

<style lang='scss' scoped>
.qf-good-list {
    padding-bottom: 100px;
}
.qf-good-img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
}
.qf-gl-page {
    padding: 30px;
    overflow: hidden;
}
.el-pagination {
    float: right;
}
</style>