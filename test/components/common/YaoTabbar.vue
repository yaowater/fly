<template>
  <div class="pub">
    <router-link to="home">
      <div class="box">
        <div class="img">
          <img
            src="../../assets/home_icon_select.png"
            v-if="$route.path == '/home'"
            class="imgSize1"
          />
          <img
            src="../../assets/home_icon_unselect.png"
            v-if="$route.path !== '/home'"
            class="imgSize1"
          />
        </div>

        <p :class="{ select: $route.path == '/home' }">首页</p>
      </div>
    </router-link>
    <router-link to="classify">
      <div class="box">
        <div class="img">
          <img
            src="../../assets/classification_icon_select.png"
            v-if="$route.path == '/classify'"
            class="imgSize2"
          />
          <img
            src="../../assets/classification_icon_unselect.png"
            v-if="$route.path !== '/classify'"
            class="imgSize2"
          />
        </div>

        <p :class="{ select: $route.path == '/classify' }">分类</p>
      </div>
    </router-link>
    <router-link to="cart">
      <div class="box">
        <div class="img">
          <img
            src="../../assets/shopping bag_icon_select.png"
            v-if="$route.path == '/cart'"
            class="imgSize3"
          />
          <img
            src="../../assets/shopping bag_icon__unselect.png"
            v-if="$route.path !== '/cart'"
            class="imgSize3"
          />
        </div>
        <p :class="{ select: $route.path == '/cart' }">购物袋</p>
      </div>
    </router-link>
    <router-link to="user">
      <div :class="{ box: true, box2: $route.path == '/user' && !headImg }">
        <div class="img">
          <img
            :src="
              headImg
                ? headImg
                : 'https://sc-user-file.oss-cn-shenzhen.aliyuncs.com/c208cc86b7764e078499c1168228293c1_5974.png'
            "
            v-show="$route.path == '/user'"
            class="imgSize5"
          />
          <img
            src="../../assets/mine_icon_unselect.png"
            v-if="$route.path !== '/user'"
            class="imgSize4"
          />
        </div>
        <p :class="{ select: $route.path == '/user' }">我的</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      imgSrc: "",
    };
  },
  computed: {
    ...mapState("home", ["headImg"]),
  },
  mounted() {},
  methods: {
    init() {},
  },
};
</script>
<style scoped>
.pub {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.3067rem;
  margin: 0 auto;
  background: #fff;
  /* border-radius: 0.4rem; */
}
.pub .box {
  width: 25%;
  height: 1.306667rem;
  float: left;
  padding-top: 0.2rem;
}
.box .img {
  display: flex;
}
.box img {
  margin: auto;
}
.imgSize1 {
  width: 0.5467rem;
  height: 0.5333rem;
}
.imgSize2 {
  width: 0.5333rem;
  height: 0.5333rem;
}
.imgSize3 {
  width: 0.44rem;
  height: 0.5333rem;
}
.imgSize4 {
  width: 0.4267rem;
  height: 0.5333rem;
}
.imgSize5 {
  width: 0.5333rem;
  height: 0.5333rem;
  border: 0.0133rem solid #f36838;
  border-radius: 50%;
}
.box p {
  font-size: 0.2133rem;
  font-family: PingFang SC;
  font-weight: 800;
  line-height: 0.2933rem;
  color: #000000;
  text-align: center;
  margin-top: 0.08rem;
}
.box p.select {
  color: #f36838;
}
.box .img .imgSrc {
  border-radius: 50%;
}
</style>
