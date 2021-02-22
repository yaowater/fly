<template>
<div class="qf-good-item">
    <img :src="good.img" alt="" @touchstart='skipToDetail'>
    <div v-text='good.name'></div>
    <div>
        <span v-text='good.price'></span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        good: {
            type: Object,
            required: true
        }
    },
    methods: {
        skipToDetail() {
            // 跳转到详情页
            this.$router.push('/detail/'+this.good._id)
        }
    }
    
}
</script>

<style lang='scss' scope>
.qf-good-item {
    width: 5rem;
    flex: 1;
    box-sizing: border-box;
    border: 1px solid #eee;
    font-size: 0.4rem;
    &>img {
        display: block;
        width: 5rem;
        height: 5rem;
    }
}
</style>