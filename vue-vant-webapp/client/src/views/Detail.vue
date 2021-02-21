<template>
<div>
    <h1 v-text='info.name'></h1>
    <img :src="info.img" alt="">
    <h3 v-text='"￥"+info.price'></h3>

    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
            type="danger"
            text="立即购买"
            @click="buy"
        />
    </van-goods-action>
</div>
</template>

<script>
import {
    GoodsAction, GoodsActionIcon, GoodsActionButton, Toast
} from 'vant'

export default {
    data: function() {
        return {
            info: {}
        }
    },
    components: {
        [GoodsAction.name]: GoodsAction,
        [GoodsActionIcon.name]: GoodsActionIcon,
        [GoodsActionButton.name]: GoodsActionButton
    },
    mounted() {
        let id = this.$route.params.id
        let params = {
            good_id: id
        }
        this.$http.fetchGoodDetail(params).then(res=>{
            console.log('商品详情', res)
            this.info = res
        })
    },
    methods: {
        buy() {
            
            let token = localStorage.getItem('token')
            if (!token) {
                this.$router.push('/login')
            } else {
                let data = {
                    good_id: this.info._id
                }
                this.$http.fetchAddToCart(data).then(()=>{
                    Toast.success('添加购物车成功')
                    setTimeout(()=>{
                        this.$router.back()
                    }, 800)
                })
            }
        }
    }
    
}
</script>

<style scoped>

</style>