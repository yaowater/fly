## 项目

webapp：运行在移动端的看上去像App的web H5应用

像素密度：dpr（devicePixelRatio）= 屏幕像素总数 / 屏幕物理尺寸

正是因为手机硬件的不统一性，导致前端在做移动端web，必须考虑兼容器。

常用的适配方案：rem，vw/vh, flixable。我们考虑移动端布局的真实原因，要避免使用px做单位。

工作中，常用的还是　rem　布局。

px：绝对的单位。
em：以最近一个font-size为基准的单位。
rem（root em）：以html元素的font-size为基准的单位。

UI稿，750px = 满屏　= 10 * (root font-zie)


## Sass

cnpm install sass-loader -D
cnpm install sass -D   （node-sass）
```
<style lang='scss' scoped>
</style>
```

##　Vant

有赞出品
Vant，是一个专注于移动的Vue UI组件库

cnpm install vant -S
cnpm install babel-plugin-import -D

配置babel.config.js
```
plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
]
```
重启项目

在组件上，使用vant的组件：
```
import { Button } from 'vant'

{
    components: {
        [Button.name]: Button
    }
}
````

## 埋点
/jd/browserGood  {id:,text:'keyworl'}


## 项目总结

项目开发流程：
    －　需求来源　
    －　需求调研与分析　
    －　产品设计　
    －　立项
    －　等UI稿：搭建工程项目架构、同时研究产品搞，把里问题罗列出并和产品经理进行沟通。
    －　UI稿出来，前端一定要参与审稿，尽量把界面设计的难度降到最低。
    －　写静态和基础交互，对产品稿二次理解，发现问题及时与产品经理沟通。
    －　接口联调：最好要求给个专业接口文档，对数据，会占据你60%的开发时间。
    －　提交测试
    －　反反复复地修改地改bug、迭代需求，这个时间没法衡量。
