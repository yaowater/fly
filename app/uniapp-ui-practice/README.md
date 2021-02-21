# 导航和页面

pages.json中配置页面、配置tabbar

编程式导航 uni.navigateTo()

# 事件

tap 这个最常用
touchstart touchmove touchend

# 样式单位

rpx
750rpx = 宽屏
375rpx = 半屏

# 数据共享

App.vue
  globalData: {}

在页面组件中，getApp().globalData 访问和修改

# 生命周期

onLoad
onShow
下拉刷新
触底加载

# 调接口

uni.request()
跨域问题，只有h5才有，在manifest.json配置devServer

内置 websocket，直接用

# 常用组件与api

和微信小程序中的使用方法几乎一致，到时再详情讲。

# 调试

用webapp(谷歌浏览器)来调试
用微信开发者工具进行调试
最好使用真机调试（建议）：
	USB线连接电脑和手机，
	在电脑上安装你手机相应的驱动程序
	在手机打开“开发者选项”并同意调试
	在HbuilderX的"运行"菜单中选择“运行到手机”
	手机上会自动安装一个app，即可开始调试。

uniapp使用场景：常规习惯拿来做android app，或者顺手打包一个微信小程序。


## android打包流程

1、要有一个appid，在DCloud开发者后台中创建这个appid。

2、在电脑安装jdk(java环境),配置jdk环境变量。

3、打开命令行：输入`keytool -genkey -alias xxx -keyalg RSA -keysize 2048 -validity 36500 -keystore yyy.keystore`
	其中，xxx 是“证书别名”，yyy是生成的证书文件名。
	在执行上述命令过程中，需要输入真实的企业信息。还有要输入“证书私钥密码”（请记住这个密码）

4、在HbuiderX中，点击“发行”->“原生App云打包”->添加App的logo、填写必填信息、上传打包->查看打包状态进行下载->得到 .apk 安装包。
