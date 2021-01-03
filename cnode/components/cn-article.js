Vue.component('cn-article', {
    props: {
        row: {
            type: Object,
            required: true
        }
    },
    computed: {
        time: function() {
            var t = (Date.now() - Date.parse(this.row.last_reply_at))/(1000*60*60*24)
            return t>1 ? Math.round(t)+'天前' : (t*24>1 ? Math.round(t*24)+'小时前' : Math.round(t*24*60)+'分钟前')
        },
        label: function() {
            var cates =  [
                { id: 1, label: '全部', tab: ''},
                { id: 2, label: '精华', tab: 'good'},
                { id: 3, label: '分享', tab: 'share'},
                { id: 4, label: '问答', tab: 'ask'},
                { id: 5, label: '招聘', tab: 'job'}
            ]
            var ele = cates.find(ele=>ele.tab == this.row.tab)  
            return ele ? ele.label : '置顶'
        }
    },
    template: `
    <div class='article'>
        <img :src='row.author.avatar_url' />
        <div class='num'>
            <span v-text='row.reply_count'></span>
            <span>/</span>
            <span v-text='row.visit_count'></span>
        </div>
        <span class='label' v-text='label'></span>
        <span class='title' v-text='row.title'></span>
        <span class='time' v-text='time'></span>
    </div>
    `
})