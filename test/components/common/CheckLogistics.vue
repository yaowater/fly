<template>
  <div>
    <van-popup
      v-model="childshow"
      :overlay="true"
      :close-on-click-overlay="false"
      round
      position="bottom"
    >
      <div class="popup-content3">
        <div class="view">
          <span>选择查看</span>
          <img
            src="../../assets/paymentsuccess_close.png"
            alt=""
            @click="changeShow"
          />
        </div>

        <div class="box">
          <h3>共 <span v-text="parcelNumber"></span> 个包裹</h3>
          <div
            class="waybill"
            v-for="(
              item, index
            ) in orderInformationObj.userGoodsOrderDetailsInfoList"
            :key="index"
            v-show="
              item.userGoodsOrderLogisticsInfoList &&
              item.userGoodsOrderLogisticsInfoList[0] &&
              item.userGoodsOrderLogisticsInfoList[0].logisticsOrderNo
            "
          >
            <div
              v-for="(item2, index) in item.userGoodsOrderLogisticsInfoList"
              :key="index"
            >
              <div class="number">
                <span>运单编号: <i v-text="item2.logisticsOrderNo"></i></span>
                <img
                  src="../../assets/copy_icon.png"
                  v-clipboard:copy="item2.logisticsOrderNo"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                />
              </div>
              <div class="number">
                <span
                  >配送方式: <i v-text="item2.logisticsCompanyName"></i
                ></span>
              </div>
            </div>

            <div class="waybill-goods">
              <div class="goods-content">
                <div class="goods-left">
                  <div class="img-box">
                    <img :src="item.goodsSkuImage" />
                  </div>
                </div>
                <div class="goods-right">
                  <div class="van-ellipsis" v-text="item.orderGoodsTitle"></div>
                  <div class="amount">
                    <span
                      v-text="item.goodsSkuName"
                      class="van-ellipsis"
                    ></span>
                    <em v-text="'x' + item.goodsNumber"></em>
                  </div>
                  <h4 v-text="'￥' + item.goodsUnitPrice / 100"></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup, Toast } from "vant";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    [Popup.name]: Popup,
  },
  props: {
    childshow: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["orderInformationObj"]),
    ...mapGetters("user", ["parcelNumber"]),
  },
  mounted() {},
  updated() {},
  methods: {
    init() {},
    changeShow() {
      this.$emit("childclick", false);
    },
    onCopy: function () {
      Toast.success("复制成功");
    },
    onError: function () {
      Toast.fail("复制失败!");
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-content3 {
  max-height: 11.146667rem;
  width: 10rem;
  background: #f6f6f6;
  border-radius: 0.666667rem 0.666667rem 0rem 0rem;
  padding-bottom: 0.9733rem;
  .view {
    width: 100%;
    height: 1.293333rem;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.813333rem;
    span {
      font-size: 0.32rem;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 0.44rem;
      color: #000000;
    }
    img {
      width: 0.2933rem;
      height: 0.2933rem;
    }
  }
  .box {
    width: 10rem;
    max-height: 9.853333rem;
    overflow-y: auto;
    h3 {
      font-size: 0.266667rem;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 0.373333rem;
      color: #b5b5b5;
      margin: 0.266667rem 0 0.333333rem 0.813333rem;
    }
    .waybill {
      width: 9.2rem;
      background: #ffffff;
      border-radius: 0.266667rem;
      margin: 0 auto 0.266667rem;
      padding-top: 0.52rem;
      padding-bottom: 0.4rem;
      .number {
        display: flex;
        align-items: center;
        padding-left: 0.52rem;
        margin-bottom: 0.4rem;
        span {
          font-size: 0.32rem;
          font-family: PingFang SC;
          font-weight: bold;
          line-height: 0.44rem;
          color: #000000;
          margin-right: 0.266667rem;
        }
        img {
          width: 0.346667rem;
          height: 0.346667rem;
        }
      }
      .waybill-goods {
        margin-bottom: 0.266667rem;
        height: 2.133333rem;
        .goods-content {
          overflow: hidden;
          .goods-left {
            width: 2.933333rem;
            height: 2.133333rem;
            display: flex;
            float: left;
            .img-box {
              width: 2.133333rem;
              height: 2.133333rem;
              border-radius: 0.266667rem;
              margin: auto;
              display: flex;
              img {
                width: 80%;
                height: 100%;
                margin: auto;
              }
            }
          }
          .goods-right {
            float: left;
            width: 5.76rem;
            padding-top: 0.266667rem;
            .van-ellipsis {
              width: 5.226667rem;
              font-size: 0.293333rem;
              font-family: PingFang SC;
              font-weight: bold;
              line-height: 0.4rem;
              color: #000000;
            }
            .amount {
              height: 0.373333rem;
              margin: 0.226667rem 0;
              span {
                display: inline-block;
                max-width: 4.3467rem;
                font-size: 0.266667rem;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: 0.373333rem;
                color: #b5b5b5;
                float: left;
              }
              em {
                font-size: 0.266667rem;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: 0.373333rem;
                color: #000000;
                float: right;
              }
            }
            h4 {
              font-size: 0.346667rem;
              font-family: SF UI Text;
              font-weight: bold;
              line-height: 0.413333rem;
              color: #000000;
            }
          }
        }
      }
      .good-button {
        display: flex;
      }
      .waybill-goods:nth-last-of-type(1) {
        margin-bottom: 0;
      }
    }
  }
}
</style>