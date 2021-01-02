var app = new Vue({
    el: '#app',
    data: {
        task: '',
        data: {}
    },
    mounted() {
        this.init()
    },
    methods: {
        // 初始化（刷新）
        init: function() {
            var that = this
            fetch('/todo/getMyTodos', 'GET', {}, function(res){
                console.log('res', res)
                that.data = res
            })
        },
        add: function() {
            var that = this
            fetch('/todo/addTodo', 'POST', {task: this.task}, function(res) {
                console.log('添加任务 成功')
                that.task = ''
                that.init()
            })
        },
        transform: function(id, type) {
            var that = this
            var status = type ? "0" : "1"
            fetch('/todo/changeTodoStatus', 'GET', {id: id, status: status}, function(res) {
                console.log('状态切换成功')
                that.init()
            })
        },
        remove: function(id) {
            var that = this
            fetch('/todo/deleteTodo', 'GET', {id: id}, function(res) {
                console.log('删除成功')
                that.init()
            })
        },
        inputChange: function(item) {
            console.log('item', item)
            var that = this
            fetch('/todo/editTodo', 'POST', {id: item._id, task: item.task}, function(){
                console.log('修改成功')
                that.init()
            })
        }
    }
})

