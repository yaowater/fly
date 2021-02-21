<template>
<div class="qf-find">
    <!-- 品类列表 -->
    <div class="qf-find-left">
        <div 
            v-for='(item,index) in cates'
            :key='item._id'
            v-text='item.cate_zh'
            @touchstart='touch(index,item)'
            :class='{"on": curIdx==index}'
        >
        </div>
    </div>

    <!-- 商品品类 -->
    <div class="qf-find-right">
        <van-grid :column-num="3">
            <van-grid-item v-for="item in goodArr" :key="item._id">
                <van-image :src="item.img" />
                <div v-text='item.name'></div>
            </van-grid-item>
        </van-grid>
    </div>

    <QfTabbar />
</div>  
</template>

<script>
import { QfTabbar } from '@/components/'
// mapState，用读取缓存系统中的数据
// mapMutations，向缓存系统中添加新缓存数据
import { mapMutations, mapState } from 'vuex'
import {
    Grid, 
    GridItem,
    Image
} from 'vant'

export default {
    name: 'Find',
    data: function() {
        return {
            curIdx: 0,
            cates: [],
            goodArr: [] // 如果在缓存系统中没有数据，要调获取。如果在缓存系统中有数据，直接使用，不调接口。
        }
    },
    computed: {
        ...mapState('good', ['find']),
    },
    components: {
        QfTabbar,
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [Image.name]: Image
    },
    mounted() {
        this.init()
    },
    beforeDestroy() {
        console.log('before - destory')
        this.clearFind()
    },
    methods: {
        ...mapMutations('good', ['updateFind', 'clearFind']),
        async init() {
            let arr = await this.$http.fetchAllCates({})
            this.cates = arr
            let params = { cate: arr[0].cate }
            this.$http.fetchGoodsOfCate(params).then(res=>{
                // goodArr用来渲染页面
                this.goodArr = res
                // 把请求到的缓存在状态管理工具中
                this.updateFind({idx:0,list:res})
            })
        },
        touch(idx, item) {
            console.log('item', item)
            this.curIdx = idx
            // 还要调取接口，查询当前品类下面的商品列表
            let params = { cate: item.cate }
            // 缓存实现
            // 当前品类在状态管理中有数据
            if(this.find[idx] && this.find[idx].length) {
                // 不调接口，直接使用缓存中的数据
                this.goodArr = this.find[idx]
            } else {
                // 如果缓存系统中没有，要调接口
                this.$http.fetchGoodsOfCate(params).then(res=>{                        
                    // 更新goodArr
                    this.goodArr = res
                    this.updateFind({idx,list:res})
                })
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.qf-find {
    position: relative;
    height: 100%;
    width: 100%;
    .qf-find-left {
        position: absolute;
        width: 2.266667rem;
        left: 0;
        top: 0;
        bottom: 1.333333rem;
        background: rgb(248,248,248);
        overflow: auto;
        &>div {
            font-size: 0.4rem;
            text-align: center;
            line-height: 1.333333rem;
        }
        &>div.on {
            background: white;
            color: rgb(239, 116, 117);
        }
    }
    .qf-find-right {
        position: absolute;
        left: 2.266667rem;
        top: 0;
        bottom: 1.333333rem;
        right: 0;
        overflow: auto;
        .van-grid-item {
            font-size: 0.4rem;
            line-height: 0.666667rem;
            text-align: center;
            .van-image {
                width: 1.866667rem;
                height: 1.866667rem;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        
    }
}
</style>