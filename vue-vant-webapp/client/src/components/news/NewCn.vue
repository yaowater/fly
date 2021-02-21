<template>
  <div>
    <div v-for='item in list' :key='item.id' @click="skipToDetail(item)">
      <span v-text='item.id'></span>
      <span>-</span>
      <span v-text="item.title"></span>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      list: [
        {id: 1, title: '嵌套的路由/视图表'},
        {id: 2, title: '模块化的、基于组件的路由配置'},
        {id: 3, title: '路由参数、查询、通配符'}
      ]
    }
  },
  mounted() {
    console.log('route', this.$route)
    console.log('router', this.$router)
  },
  methods: {
    skipToDetail(item) {
      // 路由栈(数组栈操作 push pop shift unshift)
      // 编程式路由跳转
      // this.$router.replace('/detail')
      // this.$router.back()
      // this.$router.push('/detail/'+item.id+'/'+item.title)
      // this.$router.push({name:'abc', params: {abc:item.id}})
      this.$router.push('/detail/'+item.id)
     }
  }
  
}
</script>

<style scoped>

</style>
