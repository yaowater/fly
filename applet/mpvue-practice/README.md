
## 项目创建

原则：优先建议使用 mpvue -> wepy -> taro -> uniapp

```
npm install vue-cli@2.9 -g
vue init mpvue/mpvue-quickstart mpvue-project
cd mpvue-project
cnpm install
npm run dev
```

## 项目调试

只能使用微信开发者工具
在微信开发者工具中，直接导入mpvue-projcet项目目录即可（注意填写appid）

如何关闭ESLint？在项目根目录中 添加 .eslintignore 文件
```
build/*.js
config/*.js
src/*

```


## 实战项目需求说明

1、首页

	自定义顶部导航栏
	筛选组件 picker
	自定义组件（两个商品组件）
	下拉刷新、触底分页

2、商品详情

	自定义顶部导航
	打电话功能
	收藏功能（vuex中缓存这个被收藏的东西）
	自定义分享按钮，分享商品

3、店铺详情+地图页面

	tab组件
	打电话
	去到地图（地理定位授权、map地图使用）
	到了地图页面，还可以打开第三方的地图应用
	自定义分享按钮，分享店铺

	店铺收藏（vuex缓存这些被收藏的东西）

4、个人中心+我的收藏

	获取用户信息
	点击“我的收藏”跳转到收藏页面
	收藏页面中tab切换
	长按事件、取消收藏（vuex)

5、购物车页面：
	商品列表、删除、数量修改
	总价计算
	提交购物车（vuex商品数据清空）


## Git操作

Git文档：https://git-scm.com/book/zh/v2

范式
