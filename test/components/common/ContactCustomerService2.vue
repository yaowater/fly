<template>
  <div>
    <van-popup
      v-model="value"
      :overlay="true"
      :close-on-click-overlay="false"
      round
      position="bottom"
    >
      <div class="contactCustomerService-popup1">
        <h3 @click="changeShow2">客服电话 0755-86930885</h3>
        <h4 @click="changeShow">取消</h4>
      </div>
    </van-popup>

    <van-popup
      v-model="show2"
      :overlay="true"
      :close-on-click-overlay="false"
      round
    >
      <div class="contactCustomerService-popup2">
        <h3>拨打电话</h3>
        <div class="tel">0755-86930885</div>
        <div class="dial">
          <p @click="changeShow3(0)">拨打</p>
          <p @click="changeShow3(1)">取消</p>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup } from "vant";
export default {
  components: {
    [Popup.name]: Popup,
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      show2: false,
    };
  },
  methods: {
    changeShow() {
      this.$emit("input", false);
    },
    changeShow2() {
      this.$emit("input", false);
      this.show2 = true;
    },
    changeShow3(val) {
      this.show2 = false;
      if (val == 0) {
        window.location.href = "tel:+0755-86930885";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contactCustomerService-popup1 {
  padding-top: 0.52rem;
  width: 10rem;
  height: 3.1467rem;
  h3 {
    font-size: 0.3733rem;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 0.5333rem;
    color: #f36838;
    text-align: center;
    margin-bottom: 1.04rem;
  }
  h4 {
    font-size: 0.3733rem;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 0.5333rem;
    color: #999999;
    text-align: center;
  }
}

.contactCustomerService-popup2 {
  width: 7.2267rem;
  height: 4.6133rem;
  background: #ffffff;
  opacity: 1;
  border-radius: 0.4rem;
  padding-top: 0.4267rem;
  h3 {
    font-size: 0.3733rem;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 0.5333rem;
    color: #333333;
    text-align: center;
  }
  .tel {
    margin-top: 0.72rem;
    height: 0.8rem;
    font-size: 0.3733rem;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 0.5333rem;
    color: #f36838;
    text-align: center;
    background: url("../../assets/user1-6_03.png") no-repeat bottom center;
    background-size: 5.84rem 0.0133rem;
  }
  .dial {
    display: flex;
    justify-content: space-between;
    padding: 0.6933rem 0.4267rem 0;
    p {
      width: 2.9333rem;
      height: 0.8rem;
      border: 0.0133rem solid #f36838;
      opacity: 1;
      border-radius: 0.48rem;
      font-size: 0.3733rem;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 0.8rem;
      color: #f36838;
      text-align: center;
    }
    p:nth-of-type(1) {
      color: #ffffff;
      background: #f36838;
    }
  }
}
</style>