<template>
  <div class="header">
    <div class="header-box">
      <img src="../../assets/white_return_icon2.png" alt="" @click="iconBack" />
      <span v-text="headerContent.span"></span>
    </div>
    <em v-text="headerContent.em"></em>
  </div>
</template>

<script>
export default {
  props: {
    headerContent: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    iconBack() {
      if (this.headerContent.path) {
        this.$router.push(this.headerContent.path);
      } else {
        this.$router.back();
      }
    },
  },
};
</script>

<style scoped>
.header {
  height: 1.173333rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.666667rem;
  padding-right: 0.733333rem;
  justify-content: space-between;
  /* background: #f36838; */
}
.header .header-box {
  display: flex;
  align-items: center;
}
.header .header-box img:nth-of-type(1) {
  width: 0.266667rem;
  height: 0.506667rem;
}

.header .header-box span {
  font-size: 0.48rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.84rem;
  color: #000000;
  margin-left: 0.666667rem;
}
.header em {
  font-size: 0.346667rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.493333rem;
  color: #f36838;
}
</style>