<template>
<div class="qf-home">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <!-- 通知栏 -->
      <van-notice-bar
          left-icon="volume-o"
          mode="closeable"
          background='#B20D07'
          color='#ffffff'
          text="打开京东App，购物更轻松; 京东618，秒杀全场！手快可抢618元大红包！"
      />

      <!-- 搜索框 -->
      <van-search
          show-action
          :placeholder="text.name"
          background="#B20D07"
          disabled
          >
          <template #action>
              <div @click="onLogin">登录</div>
          </template>
      </van-search>

      <!-- 轮播图 -->
      <van-swipe :autoplay="5000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
          </van-swipe-item>
      </van-swipe>

      <!-- 分割线 -->
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >
        为你推荐
      </van-divider>

      <!-- 商品列表 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :offset="20"
        :immediate-check='false'
      >
        <div v-for='i in length'
            :key='i'
            class="row"
            >
          <QfGoodItem :good='goods[2*i-2]' />
          <QfGoodItem :good='goods[2*i-1]' />
        </div>
      </van-list>
    </van-pull-refresh>

    <QfTabbar />
</div>  
</template>

<script>
import { QfTabbar, QfGoodItem } from '@/components/'
import { 
    NoticeBar, 
    Search,
    Swipe, 
    SwipeItem,
    Lazyload,
    Divider,
    PullRefresh,
    List,
    Toast
} from 'vant'
import Vue from 'vue';
Vue.use(Lazyload);

export default {
    name: 'Home',
    data: function() {
        return {
          // 数据来自后端
          images: [
              'https://img.yzcdn.cn/vant/apple-1.jpg',
              'https://img.yzcdn.cn/vant/apple-2.jpg',
          ],
          goods: [],
          // 下拉刷新
          refreshing: false,
          // 触底加载
          loading: false,
          finished: false,
          page: 1,
          searchArr: [{id:1,name:'华为手机'},{id:2,name:'小米电视'},{id:2,name:'苹果电脑'}]
        }
    },
    computed: {
      length: function() {
        return Math.floor(this.goods.length / 2)
      },
      text: function() {
        let arr = this.searchArr
        return arr[Math.floor(Math.random()*arr.length)]
      }
    },
    components: {
        QfTabbar,
        QfGoodItem,
        [NoticeBar.name]: NoticeBar,
        [Search.name]: Search,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Divider.name]: Divider,
        [PullRefresh.name]: PullRefresh,
        [List.name]: List
    },
    mounted() {
      this.getList()
    },
    methods: {
        getList() {
          // 调列表接口
          let params = {
            page: this.page,
            size: 6
          }
          this.$http.fetchGoodList(params).then(res=>{
            console.log('商品列表', res)
            if (res.length===0) Toast.success('没有数据了')
            if(res.length>0) {
              // 下拉刷新
              if(this.refreshing) {
                this.goods = res
              } else {
                // 触底加载
                this.goods = [...this.goods, ...res]
              }
              // 控制触底加载是否reset
              this.loading = false
              // 控制下拉刷新是否reset
              this.refreshing = false
            }
          })
        },
        onLogin() {
            // 跳转到登录页
            // this.$router.push('/login')
        },
        onLoad() {
          console.log('到底了')
          this.page++
          this.getList()
          console.log(this.loading, this.finished)
        },
        // 下拉刷新
        onRefresh() {
          this.page = 1
          this.getList()
        }
    }
}
</script>

<style lang='scss' scoped>
.van-swipe-item {
  img {
    display: block;
    width: 10rem;
    height: 4rem;
  }
}
.row {
  display: flex;
}
</style>