// 组件封装的意义
// 1、组件的复用
// 2、组件的维护
// 3、细节的隐藏

var app = new Vue({
    el: '#app',
    data: {
        cates: [
            { id: 1, label: '全部', tab: ''},
            { id: 2, label: '精华', tab: 'good'},
            { id: 3, label: '分享', tab: 'share'},
            { id: 4, label: '问答', tab: 'ask'},
            { id: 5, label: '招聘', tab: 'job'}
        ],
        tab: '',
        page: 1,
        list: [],
        show: true
    },
    watch: {
        tab: function() {
            console.log('tab 变化了，我要重新调接口')
            this.page = 1
            this.getList()
        },
        page: function() {
            this.getList()
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        getList: function() {
            // 开始调接口
            this.show = true
            // y
            // console.log('this.tab',this.tab);
            var data = {
                page: this.page,
                tab: this.tab,
                limit: 5,
                mdrender: false
            }
            var that = this
            fetch('/topics', 'GET', data, function(res) {
                console.log('res', res)
                that.list = res
                // 调接口成功
                that.show = false
            })
        }
    }
})