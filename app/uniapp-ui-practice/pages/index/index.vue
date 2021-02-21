<template>
	<view class="index">

		<uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar>

		<view class="in-user">
			<input v-model='username' />
		</view>
		<button type="primary" @tap='getUserName'>按钮</button>
		<view class='count' v-text='count'></view>
		<button @tap='changeCount("add")'>加</button>
		<button @tap='changeCount("sub")'>减</button>

		<view>
			<view v-for="item in list" :key='item._id'>
				<qf-good :good='item' />
			</view>
			<view class="clear"></view>
		</view>

	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import { QfGood } from '@/qfcomponents/'
	import { fetchGoodList } from '@/utils/api'
	export default {
		name: 'Index',
		data() {
			return {
				username: '',
				count: getApp().globalData.count,
				list: [],
				filter: {
					page: 1,
					size: 10,
					cate: ''
				}
			}
		},
		components: {
			uniNavBar,
			QfGood
		},
		onLoad() {
			this.getList()
		},
		onPullDownRefresh() {
			console.log('refresh')
			this.filter.page = 1
			this.getList()
		},
		// 触底加载、分页
		onReachBottom() {
			console.log('到底了，我要下一页')
			this.filter.page++
			this.getList()
		},
		methods: {
			getList() {
				let data = this.filter
				fetchGoodList(data, (res)=>{
					console.log('res', res)
					this.list = [...this.list, ...res.list]
					if(res.list.length<10) {
						uni.showToast({
							title: '数据已加载完成',
							duration: 1500
						})
					}
					uni.stopPullDownRefresh()
				})
			},
			getUserName() {
				console.log('username', this.username)
			},
			changeCount(arg) {
				console.log('arg', arg)
				if(arg==='add') {
					getApp().globalData.count++
				} else {
					getApp().globalData.count--
				}
				this.count = getApp().globalData.count
			},

		}
	}
</script>

<style>
	.index {
	}
	.in-user {
		width: 375rpx;
		height: 120rpx;
		line-height: 120rpx;
		border: 1rpx solid red;
		background-color: blue;
	}
	.count {
		font-size: 100rpx;
		text-align: center;
	}
	.clear {
		clear: both;
	}
</style>
