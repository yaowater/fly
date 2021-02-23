<template>
  <div class="y-cashierDesk">
    <YaoHeader :headerContent="headerContent" />

    <div class="footer">
      <div class="paymentCountdown">
        <div class="price">
          <span>￥</span>
          <em v-text="cartTotalPrice"></em>
        </div>
        <div class="remainingTime">
          <p>支付剩余时间:</p>
          <van-count-down :time="countDown" />
        </div>
      </div>
      <div class="paymentMode">支付方式</div>
      <div class="weChatPay">
        <div class="weChatPay-box">
          <img src="../../assets/cashierdesk.png" v-show="checked" />
          <img src="../../assets/cashierdesk2.png" v-show="!checked" />
          <span>微信支付</span>
        </div>
        <van-checkbox
          v-model="checked"
          checked-color="#09BB07"
          icon-size="0.3733rem"
        ></van-checkbox>
      </div>
    </div>

    <div class="weChatPayment" :class="{ weChatPayment2: checked }">
      <p @click="payment" v-text="'微信支付￥' + cartTotalPrice"></p>
    </div>
  </div>
</template>

<script>
import { CountDown, Checkbox, Toast } from "vant";
import { mapState, mapMutations } from "vuex";
import { YaoHeader } from "@/components/";
export default {
  name: "cashierdesk",
  components: {
    YaoHeader,
    [CountDown.name]: CountDown,
    [Checkbox.name]: Checkbox,
  },
  data() {
    return {
      headerContent: {
        span: "收银台",
        em: "",
        path: "",
      },
      countDown: 0,
      checked: true,
      openId: "",
      code: "",
      unifiedOrderObj: {},
    };
  },
  watch: {
    checked() {
      if (!this.checked) {
        this.checked = true;
      }
    },
  },
  computed: {
    ...mapState("cart", ["cartTotalPrice", "paymentId"]),
    ...mapState("user", ["cashierDeskReturnPath"]),
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations("cart", ["changePaymentId", "changeCartTotalPrice"]),
    async init() {
      let userId = sessionStorage.getItem("userId");
      let data2 = {
        data: {
          userId,
          orderId: this.paymentId,
        },
      };
      this.$http2.fetchUserGoodsOrderInfo(data2).then((res) => {
        if (res.result == "1") {
          this.obligationArr = res.jsonData.userGoodsOrderInfo;
          let a = Date.now();
          this.countDown =
            this.obligationArr.createTime * 1000 + 30 * 60 * 1000 - a;
        } else if (res.result == "401") {
          Toast("登录信息过期，请重新登录");
          this.$router.push("/login");
        }
      });

      this.headerContent.path = this.cashierDeskReturnPath;
      this.code = this.$route.query.code;
      if (this.code) {
        let code = String(this.code);
        await this.$http2.fetchWechatPayToObtainUserOpenId(code).then((res) => {
          this.openId = res;
        });

        // this.changePaymentId(this.paymentId);
        // this.changeCartTotalPrice(this.cartTotalPrice);

        let data4 = {
          data: {
            userId,
            orderId: this.paymentId,
            openId: this.openId,
          },
        };

        await this.$http2
          .fetchPaymentUserGoodsOrderInfoTypeIsJSAPI(data4)
          .then((res) => {
            this.unifiedOrderObj = res.jsonData.unifiedOrder;
            let data = {
              // 以下6个支付参数通过payjs的jsapi接口获取
              // **************************
              appId: "wxa79dc6c5064bc3c2",
              timeStamp: this.unifiedOrderObj.timeStamp,
              nonceStr: this.unifiedOrderObj.nonceStr,
              package: this.unifiedOrderObj.packageValue,
              signType: this.unifiedOrderObj.signType,
              paySign: this.unifiedOrderObj.paySign,
              // **************************
            };
            /* eslint-disable */
            WeixinJSBridge.invoke("getBrandWCPayRequest", data, function (res) {
              if (res.err_msg == "get_brand_wcpay_request:ok") {
                // WeixinJSBridge.call("closeWindow");
                // this.$router.push("/paysuccess")
                // this.changePaymentId(this.payOrderId);
                // this.changeCartTotalPrice(this.totalPrices);
                let Url = "http://shop.bdxhtx.com/paysuccess";
                window.location.href = Url;
              }
            });
          });
        /* eslint-disable */
      }
    },
    payment() {
      if (this.checked) {
        let ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          //在微信中打开
          // alert("微信打开");
          let url =
            "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
            // "wx7156a39808a81a0a" +
            "wxa79dc6c5064bc3c2" +
            "&redirect_uri=" +
            encodeURI("http://shop.bdxhtx.com/cashierdesk") +
            "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
          window.location.href = url;
        } else {
          let userId = sessionStorage.getItem("userId");
          let data2 = {
            data: {
              userId,
              orderId: this.paymentId,
            },
          };
          this.$http2.fetchPaymentUserGoodsOrderInfo(data2).then((res) => {
            if (res.result == "1") {
              // this.changePaymentId(this.payOrderId);
              // this.changeCartTotalPrice(this.totalPrices);
              let Url =
                res.jsonData.mwebUrl +
                "&redirect_url=" +
                this.UrlEncode("http://shop.bdxhtx.com/paysuccess");
              window.location.href = Url;
            } else {
              Toast.fail("微信外跳转微信支付失败");
            }
          });
        }
      } else {
        Toast("请选择微信支付");
      }
    },
    UrlEncode(str) {
      var res = "";
      var strSpec = "!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
      for (var i = 0; i < str.length; i++) {
        var chr = str.charAt(i);
        var c = this.str2ASCII(chr);
        if (parseInt("0x" + c) > 0x7f) {
          res += "%" + c.slice(0, 2) + "%" + c.slice(-2);
        } else {
          if (chr == " ") res += "+";
          else if (strSpec.indexOf(chr) != -1) res += "%" + c.toString(16);
          else res += chr;
        }
      }
      return res;
    },
    str2ASCII(val) {
      return ("0" + val.charCodeAt(0).toString(16)).slice(-2);
    },
  },
};
</script>

<style lang="scss" scoped>
.y-cashierDesk {
  height: 100%;
  width: 100%;
  .footer {
    position: absolute;
    top: 1.173333rem;
    width: 100%;
    bottom: 0;
    background: #f6f6f6;
    overflow-y: auto;
    .paymentCountdown {
      width: 10rem;
      height: 2.04rem;
      background: url("../../assets/order-detail_icon.png") center no-repeat;
      background-size: 100% 100%;
      padding-top: 0.4133rem;
      .price {
        display: flex;
        justify-content: center;
        span,
        em {
          font-size: 0.5333rem;
          font-family: PingFang SC;
          font-weight: 800;
          line-height: 0.7467rem;
          color: #ffffff;
          opacity: 1;
        }
        span {
          font-size: 0.3733rem;
        }
      }
      .remainingTime {
        display: flex;
        justify-content: center;
        margin-top: 0.1067rem;
        p,
        .van-count-down {
          font-size: 0.2667rem;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 0.3733rem;
          color: #ffffff;
        }
        p {
          margin-right: 0.4rem;
        }
      }
    }
    .paymentMode {
      height: 1.44rem;
      width: 100%;
      padding: 0.8rem 0 0 0.8rem;
      font-size: 0.32rem;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 0.44rem;
      color: #333333;
    }
    .weChatPay {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.4rem;
      width: 9.2rem;
      height: 1.1733rem;
      background: #ffffff;
      opacity: 1;
      border-radius: 0.2667rem;
      margin: 0 auto;
      .weChatPay-box {
        display: flex;
        align-items: center;
        img {
          width: 0.6133rem;
          height: 0.5867rem;
          margin-right: 0.2rem;
        }
        span {
          font-size: 0.32rem;
          font-family: PingFang SC;
          font-weight: bold;
          line-height: 0.44rem;
          color: #666666;
        }
      }
    }
  }
  .weChatPayment {
    position: fixed;
    bottom: 0;
    width: 10rem;
    height: 1.3067rem;
    background: #ffffff;
    opacity: 1;
    border-radius: 0.6667rem 0.6667rem 0rem 0rem;
    display: flex;
    p {
      margin: auto;
      width: 8.4rem;
      height: 0.8rem;
      opacity: 1;
      border-radius: 0.2667rem;
      font-size: 0.3733rem;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 0.8rem;
      text-align: center;
      background: #cccccc;
      color: #ffffff;
    }
  }
  .weChatPayment2 p {
    background: #f36838;
  }
}
</style>