<template>
  <div id="app">
    <!-- <router-view></router-view> -->

    <!-- <keep-alive :include="include"> -->
      <keep-alive>
      <router-view v-if="$route.meta.keepAlive"> </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  // created() {
  //   //在页面加载时读取sessionStorage里的状态信息
  //   if (sessionStorage.getItem("store")) {
  //     this.$store.replaceState(
  //       Object.assign(
  //         {},
  //         this.$store.state,
  //         JSON.parse(sessionStorage.getItem("store"))
  //       )
  //     );
  //   }

  //   //在页面刷新时将vuex里的信息保存到sessionStorage里
  //   window.addEventListener("beforeunload", () => {
  //     sessionStorage.setItem("store", JSON.stringify(this.$store.state));
  //   });
  // },

  data() {
    return {
      include: [],
    };
  },
  watch: {
    // $route(to, from) {
    //   // console.log("this.include 初始", this.include);
    //   // 如果要to(进入)的页面是需要keepAlive缓存的，把name push进include数组中
    //   if (to.meta.keepAlive) {
    //     // !this.include.includes(to.name) && this.include.push(to.name);

    //     if (!this.include.includes(to.name)) {
    //       this.include.push(to.name)
    //       console.log("添加缓存 name", to.name);
    //       console.log("this.include 添加缓存", this.include);
    //     }
    //   }
    //   // 如果 要 form(离开) 的页面是 keepAlive缓存的，
    //   // 再根据 deepth 来判断是前进还是后退
    //   // 如果是后退：
    //   if (from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
    //     const index = this.include.indexOf(from.name);
    //     index !== -1 && this.include.splice(index, 1);
    //     console.log("去除缓存 name", from.name);
    //     console.log("this.include 去除缓存", this.include);
    //   }
    // },
  },
};
</script>

<style>
#app {
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* font-family: PingFang SC; */
}

html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}

html,
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img,
input,
figure,
figcaption {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 0.2133rem;
  font-weight: normal;
}
ul,
ol,
li {
  list-style: none;
}
a,
u {
  text-decoration: none;
}
b,
strong {
  font-weight: normal;
}
em,
i {
  font-style: normal;
}
img {
  border: 0;
  display: block;
  /*清除图片下面的大于0.04rem的间距*/
}
input {
  outline: none;
  display: block;
}

.nav-bar-qb1 .van-nav-bar__text {
  color: #f36838 !important;
}
.nav-bar-qb1 .van-nav-bar__title {
  color: #b5b5b5;
}

.qj-seckill .block {
  box-sizing: border-box;
  padding: 0.0533rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.qj-seckill .colon {
  box-sizing: border-box;
  padding: 0 0.2133rem !important;
}
.qj-home-search .van-icon-search {
  font-size: 0.3467rem;
}
.qj-home-search .van-field__control {
  font-size: 0.32rem;
}

.y-login .van-cell__value .van-field__control {
  font-size: 0.3467rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.4933rem;
  color: #000000;
  padding-left: 0.2267rem;
}
.y-login .content-register .van-cell .van-field__right-icon .van-icon-eye-o,
.y-register .content-register .van-cell .van-field__right-icon .van-icon-eye-o {
  display: inline-block;
  margin-right: 0.1733rem;
  font-size: 0.5333rem;
  margin-top: 0.16rem;
}
.y-register
  .content-register
  .van-cell
  .van-field__right-icon
  .van-icon-closed-eye {
  display: inline-block;
  margin-right: 0.1733rem;
  font-size: 0.5333rem;
  margin-top: 0.16rem;
}

.y-forgetPassword .van-field .van-field__body .van-field__control,
.y-authCodeLogin .van-field .van-field__body .van-field__control,
.y-register .van-field .van-field__body .van-field__control {
  font-size: 0.3467rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.4933rem;
  color: #000000;
  margin-left: 0.2267rem;
}

.y-userProfile .van-nav-bar__left .van-nav-bar__text {
  font-size: 0.48rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.84rem;
  color: #000000;
}
.y-userProfile .van-nav-bar__left .van-icon-arrow-left {
  display: inline-block;
  margin-right: 0.7067rem;
  font-size: 0.6667rem;
  color: #000000;
  margin-left: 0.4533rem;
}
.index .van-swipe-item img {
  display: block;
  width: 100%;
  height: 100%;
}

.y-limitSeckill .calendar .van-calendar .van-calendar__weekdays {
  font-size: 0.3733rem;
  font-family: Arial;
  font-weight: 400;
  line-height: 0.4267rem;
  color: #b5b5b5;
}

.y-chooseArea .van-picker .van-picker__toolbar {
  width: 100%;
  height: 1.2933rem;
  background: #f6f6f6 !important;
}
.y-chooseArea .van-picker .van-picker__toolbar .van-picker__title,
.y-chooseArea .van-picker .van-picker__toolbar .van-picker__cancel,
.y-chooseArea .van-picker .van-picker__toolbar .van-picker__confirm {
  font-size: 0.32rem;
  line-height: 1.2933rem;
}

.y-myOrderFinished .comment .van-cell {
  width: 8.2133rem;
  height: 1.76rem;
  background: #f6f6f6;
  border-radius: 0.4rem;
  padding: 0.3067rem 0 0 0.4667rem;
}

.y-userProfile .popup-content .van-field {
  font-size: 0.3467rem;
  font-family: PingFang SC;
  font-weight: bold;
  height: 1.1467rem;
  color: #000000;
  display: flex;
  align-items: center;
}

.y-userProfile .comment .van-cell {
  margin-top: 0.4933rem;
  width: 6.6667rem;
  height: 2.2667rem !important;
  background: #f6f6f6;
  border-radius: 0.4rem;
  padding: 0.3067rem 0 0 0.4667rem !important;
  display: block !important;
}
.y-userProfile .comment .van-field__value .van-field__control {
  height: 1.6rem;
  font-size: 0.3467rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.4933rem;
  color: #000000;
}

.van-toast .van-toast__text {
  font-size: 0.32rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.44rem;
}
.y-cart .toSettleAccounts .van-checkbox__label,
.y-myCollect .management .van-checkbox__label {
  font-size: 0.32rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.44rem;
  color: #000000;
}
.y-cart .toSettleAccounts .van-checkbox__label {
  color: #666666;
}

/* .y-addBankCard input::-webkit-input-placeholder,
.y-withdrawBankCard input::-webkit-input-placeholder, */
input::-webkit-input-placeholder {
  color: #d5d5d5 !important;
}

.y-chooseBank .footer .van-index-bar__sidebar span {
  font-size: 0.3467rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.4933rem;
}
.y-chooseBank .footer .van-index-anchor {
  padding-left: 0.68rem;
}

.y-welfareLottery .van-popup {
  overflow-y: unset;
}

.y-myInvitation .footer .van-cell,
.y-myInvitation .footer .van-collapse-item__content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.y-myInvitation .footer .van-collapse-item__content {
  padding: 0 0 0 1.8933rem;
}
.y-myInvitation .footer .van-cell__title {
  height: 1.0133rem;
  display: flex;
  align-items: center;
  padding-left: 0.7867rem;
}
.y-myInvitation .footer .van-cell {
  height: 1.0133rem;
  padding: 0;
}
.y-myInvitation .footer .van-cell__value {
  height: 1.0133rem;
  display: flex;
  align-items: center;
}
.y-basicInformation .van-steps .van-step__title,
.y-uploadIdCard .van-steps .van-step__title,
.y-certificationComplete .van-steps .van-step__title {
  font-size: 0.2667rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.3733rem;
  color: #ffffff;
  margin-bottom: 0.2667rem;
}
.y-basicInformation .van-steps .van-step__circle-container,
.y-uploadIdCard .van-steps .van-step__circle-container,
.y-certificationComplete .van-steps .van-step__circle-container {
  margin-top: 0.2667rem;
  background: #f36838;
}
.y-basicInformation .van-steps .van-step__line,
.y-uploadIdCard .van-steps .van-step__line,
.y-certificationComplete .van-steps .van-step__line {
  margin-top: 0.3467rem;
}

.y-sellGoods .van-field .van-field__body .van-field__control {
  font-size: 0.24rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.3333rem;
  color: #000000;
  opacity: 1;
}

.y-appointmentSeeGoods .van-icon-search,
.y-carrierOrder .van-icon-search,
.y-classify .van-icon-search,
.y-myOrder .van-icon-search {
  font-size: 0.4rem;
}
.y-classify .van-icon-search,
.y-myOrder .van-icon-search {
  margin-right: 0.1333rem;
}

.y-appointmentSeeGoods .van-field__control,
.y-carrierOrder .van-field__control {
  font-size: 0.2667rem;
}
.y-classify .van-field__control,
.y-myOrder .van-field__control {
  font-size: 0.3467rem;
}

.y-appointmentTime .van-radio span {
  font-size: 0.3467rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.4933rem;
  color: #000000;
  margin-left: 0.3067rem;
}
.y-myInvitation .van-collapse-item {
  padding-right: 0.88rem;
}
.y-myInvitation .van-collapse-item .van-icon {
  font-size: 0.4rem;
}
.y-userProfile .van-dropdown-menu {
  border: 0.0267rem solid red !important;
}
.y-myTrack .van-checkbox__label,
.y-selectAftermarketGoods .van-checkbox__label,
.y-carrierAllGoods .van-checkbox__label {
  font-size: 0.32rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.44rem;
  color: #000000;
}
.y-myTrack .calendar .van-calendar__bottom-info {
  width: 0.1333rem;
  height: 0.1333rem;
  background: red;
  border-radius: 50%;
  opacity: 1;
  margin: 0 auto;
  font-size: 0.06rem;
  font-family: PingFang SC;
  line-height: 0.1333rem;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
}

.y-myOrderFinished .van-uploader img,
.y-myOrderFinished .van-image img {
  width: 1.6rem;
  height: 1.6rem;
}
.y-uploadIdCard .van-image {
  width: 7.08rem;
  height: 3.786667rem;
}
.y-uploadIdCard .van-uploader img {
  width: 7.08rem;
  height: 3.7867rem;
}

.y-chooseBank .van-index-bar {
  width: 80%;
  overflow: hidden;
}

.y-referrerRegister input::-webkit-input-placeholder {
  color: #ffffff;
  opacity: 0.4;
}

.y-carrierSelectGoods .select .van-tab__text {
  display: inline-block;
  height: 0.56rem;
  font-size: 0.32rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.44rem;
}
.y-carrierSelectGoods .select .van-tabs__line {
  width: 0.3333rem;
  height: 0.08rem;
  background: #f36838;
  opacity: 1;
}

.y-detail .introduce pre,
.y-goodDetail .introduce pre,
.y-informationDetail .describe {
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  *word-wrap: break-word;
  *white-space: normal;
}
.y-detail .introduce-img p img,
.y-goodDetail .introduce-img p img,
.y-goodDetail .introduce-img p img {
  display: block;
  max-width: 8.1333rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.y-noticeDetails .paragraph p img {
  display: block;
  max-width: 8.4rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.y-informationDetail .describe p img {
  display: block;
  max-width: 8.746667rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.y-detail .van-tabs__nav {
  padding-left: 1.3333rem;
  padding-right: 1.3333rem;
}
.y-detail .van-tab span {
  font-size: 0.48rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.6667rem;
  color: #000000;
}
.y-userProfile .van-uploader .van-image img {
  border-radius: 50%;
}
</style>
