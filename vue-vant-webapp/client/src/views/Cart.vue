<template>
<div class="qf-cart">
    <!-- 顶部NavBar -->
    <van-nav-bar 
        title="购物车" 
        left-text="返回" 
        left-arrow 
        fixed
        @click-left='back'
    >
        <template #right>
            <van-icon name="search" size="18" />
        </template>
    </van-nav-bar>


    <div v-for='(item,index) in cartArr' :key='item._id' class="card-row">
        <!-- 实现左右滑动 -->
        <van-swipe-cell>
            <van-row type="flex" justify="center" align='center'>
                <van-col span="4">
                    <van-checkbox v-model="item.checked" @change='rowChange'></van-checkbox>
                </van-col>
                <van-col span="20">                
                    <van-card
                        :num="item.num"
                        :price="item.good.price"
                        :desc="item.good.desc"
                        :title="item.good.name"
                        :thumb="item.good.img"
                    >
                        <template #footer>
                            <van-button @click='changeNum(index,item,"sub")' size="mini">-</van-button>
                            <van-button @click='changeNum(index,item,"add")' size="mini">+</van-button>
                        </template>
                    </van-card>
                </van-col>
            </van-row>
            <template #right>
                <van-button @click='remove(index,item)' square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
    </div>


    <!-- 提交 -->
    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked" @click="fullClick">全选</van-checkbox>
        <template #tip>
            你的收货地址不支持同城送, <span @click="skipToAddr">修改地址</span>
        </template>
    </van-submit-bar>

</div>  
</template>

<script>
import {
    NavBar,
    Icon,
    SubmitBar,
    Checkbox,
    Card,
    Button,
    SwipeCell,
    Col,   // 栅格系统
    Row,
    Toast
} from 'vant'

export default {
    // 局部路由守卫
    // 在局部路由守卫中，是没有this的，因为组件还没有被实例化
    // beforeRouteEnter(to, from, next) {
    //     let token = localStorage.getItem('token')
    //     console.log('this', this)
    //     if(token) {
    //         next()
    //     } else {
    //         next('/login')
    //     }
    // },
    name: 'Cart',
    data: function() {
        return {
            checked: false,
            cartArr: []
        }
    },
    computed: {
        total: function() {
            let t = 0
            this.cartArr.map(ele=>{
                if(ele.checked) {
                    t += ele.num * ele.good.price
                }
            })
            return t*100
        }
    },
    watch: {
        // checked: function() {
        //     // let arr = this.cartArr.filter(ele=>ele.checked===false)
        //     // return arr.length===0 ? true : false
        // }
    },
    components: {
        [NavBar.name]: NavBar,
        [Icon.name]: Icon,
        [SubmitBar.name]: SubmitBar,
        [Checkbox.name]: Checkbox,
        [Card.name]: Card,
        [Button.name]: Button,
        [SwipeCell.name]: SwipeCell,
        [Col.name]: Col,
        [Row.name]: Row
    },
    
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.$http.fetchCartList({}).then(res=>{
                console.log('购物车列表', res)
                res.map((ele, idx)=>{
                    // 自定义一个布尔属性
                    res[idx].checked = false
                })
                this.cartArr = res
            })
        },
        updateCartItem(idx, key, value) {
            console.log(idx, key, value)
            this.cartArr[idx][key] = value
        },
        // 返回上一页
        back() {
            this.$router.back()
        },
        // 改变商品数据
        changeNum(idx,item,type) {
            let data = {
                id: item._id,
                num: item.num
            }
            if (type==='add') {
                data.num++
            } else {
                // 数量不能小于１
                if (data.num===1) return
                data.num--
            }
            this.$http.fetchUpdateNum(data).then(()=>{
                // this.init()
                this.updateCartItem(idx,'num', data.num)
            })
        },
        remove(idx,item) {
            let params = { id: item._id }
            this.$http.fetchDeleteGood(params).then(()=>{
                // this.init()
                this.cartArr.splice(idx, 1)
            })
        },
        // 行的checkbox
        rowChange() {
            let arr = this.cartArr.filter(ele=>ele.checked===true)
            this.checked = (arr.length === this.cartArr.length)
        },
        // 全选按钮
        fullClick() {
            this.cartArr.map((ele,idx)=>{
                this.cartArr[idx].checked = this.checked
            })
        },
        // 提交购物车
        onSubmit() {
            let idstr = ''
            this.cartArr.map(ele=>{
                if(ele.checked) {
                    idstr +=  (';'+ele._id)
                }
            })
            this.$http.fetchCartSubmit({goods:idstr}).then(()=>{
                Toast.success('提交成功')
                this.init()
            })
        },
        // 跳转到地址修改页面
        skipToAddr() {
            // this.$router.push('/addr')
        }
    }
}
</script>

<style lang='scss' scoped>
.qf-cart {
    padding-top: 1.333333rem;
    padding-bottom: 2.5rem;
}
.card-row {
    border-bottom: 1px solid #ccc;
    // padding: 10px 0;
}
.van-card {
    margin: 0;
    background-color: white;
    padding-left: 0;
    .van-button {
        padding: 0 0.266667rem;
    }
}
.delete-button {
    height: 100%;
}
</style>