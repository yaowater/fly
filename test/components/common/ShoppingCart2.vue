<template>
  <div>
    <van-popup
      v-model="whetherShopping"
      :overlay="true"
      :close-on-click-overlay="false"
      @click-close-icon="clickCloseIcon"
      round
      position="bottom"
      closeable
    >
      <div class="popup-content2">
        <div class="book">
          <div class="book-left">
            <div class="img-box">
              <img
                :src="goodsSkuArr[typeId] && goodsSkuArr[typeId].skuImage"
                alt=""
              />
            </div>
          </div>
          <div class="book-right">
            <h2>
              ￥<span
                v-text="
                  goodsSkuArr[typeId] &&
                  goodsSkuArr[typeId].skuRetailPrice / 100
                "
              ></span>
            </h2>
            <div class="select">
              <span>请选择</span
              ><em
                >库存
                <i
                  v-text="
                    goodsSkuArr[typeId] && goodsSkuArr[typeId].inventoryStock
                  "
                ></i
                >件</em
              >
            </div>
          </div>
        </div>
        <h5>分类</h5>
        <div class="h6-box">
          <h6
            v-for="(item, index) in goodsSkuArr"
            :key="index"
            v-text="item.skuName"
            :class="{ onSelect: typeId == index }"
            @click="touchSpan(index)"
          ></h6>
        </div>
      </div>
      <div class="buy2">
        <p @click="addCart">加入购物车</p>
      </div>
    </van-popup>

    <div class="buy">
      <img src="../../assets/detail10.png" @click="clickService" />
      <div class="buy-count" @click="skipCart">
        <img src="../../assets/detail11.png" />
        <div
          class="count"
          v-text="commodityTypesNumber"
          v-show="whetherLogin"
        ></div>
      </div>
      <p @click="changeClassifyChoosable">加入购物车</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { Popup, Toast } from "vant";
export default {
  components: {
    [Popup.name]: Popup,
  },
  props: {
    goodDetail: {
      type: Object,
      required: true,
    },
    goodsSkuArr: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      whetherShopping: false,
      arr: [],
      whetherLogin: false,
      commodityTypesNumber: 0,
    };
  },
  watch: {
    "$store.state.classify.selectType"() {
      this.whetherShopping = this.selectType;
    },
  },
  computed: {
    ...mapState("classify", ["selectType", "typeId", "select"]),
  },
  created() {
    this.whetherShopping = this.selectType;
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.changeSelect(false);
    this.changeSelectType(false);
    this.changeTypeId(0);
  },
  methods: {
    ...mapMutations("classify", [
      "changeSelectType",
      "changeTypeId",
      "changeSelect",
      "changeSingleCommoditiesObj",
    ]),
    init() {
      let userId = sessionStorage.getItem("userId");
      if (userId) {
        let data = {
          data: {
            userId,
            pageNum: "1",
            pageSize: "100",
          },
        };
        this.$http2.fetchUserCarGoodsInfoList(data).then((res) => {
          if (res.result == "1") {
            this.whetherLogin = true;
            this.commodityTypesNumber = res.jsonData.userCarInfoDOList.length;
          }
        });
      }
    },
    touchSpan(i) {
      this.changeTypeId(i);
      this.changeSelect(true);
    },
    addCart() {
      if (sessionStorage.getItem("userId")) {
        this.changeSelectType(false);
        this.whetherShopping = this.selectType;
        this.changeSelect(true);
        let id = this.$route.params.id;
        let id2 = this.goodsSkuArr[this.typeId].skuId;
        let userId = sessionStorage.getItem("userId");
        let data = {
          data: {
            userId,
            goodsId: id,
            skuId: id2,
            goodsCount: "1",
          },
        };
        this.$http2.fetchSaveGoodsInfoToUserCar(data).then((res) => {
          // console.log("fetchSaveGoodsInfoToUserCar",res);
          if (res.result == "1") {
            this.init();
            Toast.success("添加购物车成功");
          } else if (res.result == "401") {
            Toast("登录信息过期，请重新登录");
            this.$router.push("/login");
          } else {
            Toast.fail("添加购物车失败");
          }
        });
      } else {
        Toast("请先登录");
        this.$router.push("/login");
      }
    },
    changeClassifyChoosable() {
      // this.changeTypeId(0);
      this.changeSelectType(true);
      this.whetherShopping = this.selectType;
    },
    clickCloseIcon() {
      this.changeTypeId(0);
      this.changeSelectType(false);
      this.whetherShopping = this.selectType;
      this.changeSelect(false);
    },
    skipCart() {
      this.$router.push("/cart");
    },
    clickService() {
      this.$emit("childclick2", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-content2 {
  width: 10rem;
  border-radius: 0.666667rem 0.666667rem 0 0;
  padding: 0.64rem 0.893333rem 1.7333rem 0.8rem;
}
.book {
  height: 1.866667rem;
  width: 100%;
  display: flex;
}
.book .img-box {
  width: 1.866667rem;
  height: 1.866667rem;
  border-radius: 0.266667rem;
  display: flex;
}
.book .img-box img {
  height: 80%;
  width: 80%;
  margin: auto;
}
.book-right {
  padding: 0.146667rem 0 0 0.413333rem;
}
.book-right h2 {
  font-size: 0.586667rem;
  font-family: SF UI Display;
  font-weight: bold;
  line-height: 0.706667rem;
  color: #f36838;
  margin-bottom: 0.266667rem;
}
.book-right .select {
  height: 0.44rem;
  width: 5.946667rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.book-right .select span {
  font-size: 0.32rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.44rem;
  color: #000000;
}
.book-right .select em {
  font-size: 0.266667rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.373333rem;
  color: #b5b5b5;
}
.popup-content2 h5 {
  font-size: 0.32rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.44rem;
  color: #000000;
  margin-top: 0.08rem;
}
.popup-content2 .h6-box {
  margin-top: 0.2267rem;
  display: flex;
  flex-wrap: wrap;
}
.popup-content2 h6 {
  display: inline-block;
  min-width: 1.96rem;
  height: 0.666667rem;
  background: #f6f6f6;
  opacity: 1;
  border-radius: 0.266667rem;
  font-size: 0.266667rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.666667rem;
  color: #b5b5b5;
  text-align: center;
  padding: 0 0.2667rem;
}
.popup-content2 h6 {
  margin-right: 0.266667rem;
  margin-bottom: 0.2667rem;
}
.h6-box .onSelect {
  border: 0.026667rem solid #f36838;
  color: #f36838;
  background: #fff;
}
.buy {
  position: fixed;
  width: 10rem;
  height: 1.306667rem;
  bottom: 0;
  background: #ffffff;
  border-radius: 0.666667rem 0.666667rem 0 0;
  padding: 0 0.6533rem 0 0.8933rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    width: 5.6533rem;
    height: 0.8rem;
    background: #f36838;
    opacity: 1;
    border-radius: 0.2667rem;
    font-size: 0.3733rem;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 0.8rem;
    text-align: center;
    color: #ffffff;
  }
  img {
    width: 0.6133rem;
    height: 0.6667rem;
  }
  .buy-count {
    width: 0.56rem;
    height: 0.6667rem;
    position: relative;
    img {
      width: 0.56rem;
      height: 0.6667rem;
    }
    .count {
      position: absolute;
      left: 0.3333rem;
      top: 0;
      border-radius: 50%;
      width: 0.2933rem;
      height: 0.3333rem;
      font-size: 0.24rem;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 0.3333rem;
      color: #ffffff;
      opacity: 1;
      background: #f36838;
      text-align: center;
    }
  }
}
.buy2 {
  position: fixed;
  width: 10rem;
  height: 1.306667rem;
  bottom: 0;
  background: #ffffff;
  border-radius: 0.6667rem 0.6667rem 0rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: auto;
    width: 8.4rem;
    height: 0.8rem;
    background: #f36838;
    opacity: 1;
    border-radius: 0.2667rem;
    font-size: 0.3733rem;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 0.8rem;
    color: #ffffff;
    text-align: center;
  }
}
</style>