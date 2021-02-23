<template>
  <div>
    <van-popup
      v-model="classifyChoosable"
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
        <span @click="addCart">加入购物车</span>
        <span @click="changeClassifyChoosable2">购买</span>
      </div>
    </van-popup>

    <div class="buy">
      <img src="../../assets/detail10.png" />
      <img src="../../assets/detail11.png" />
      <p>加入购物车</p>
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
  props: {},
  data() {
    return {
      classifyChoosable: false,
      goodDetail: {},
      goodsSkuArr: [],
    };
  },
  computed: {
    ...mapState("classify", ["selectType", "typeId", "select"]),
  },
  created() {
    this.classifyChoosable = this.selectType;
  },
  mounted() {
    // this.classifyChoosable = this.selectType;
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
      let id = this.$route.params.id;
      let userId = sessionStorage.getItem("userId");
      let data = {
        data: {
          goodsId: id,
          userId,
        },
      };
      this.$http.fetchGoodsDetailInfoByGoodsId(data).then((res) => {
        this.goodDetail = res.goodsInfoDO;
        
        this.goodsSkuArr = this.goodDetail.goodsSkuInfoListMap.filter((ele) => {
          return ele.inventoryStock;
        });
      });
    },
    touchSpan(i) {
      this.changeTypeId(i);
      this.changeSelect(true);
    },
    addCart() {
      if (sessionStorage.getItem("userId")) {
        this.changeSelectType(false);
        this.changeSelect(true);
        this.classifyChoosable = this.selectType;
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
          if (res.result == "1") {
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
      this.classifyChoosable = this.selectType;
    },
    changeClassifyChoosable2() {
      if (sessionStorage.getItem("userId")) {
        this.changeSelectType(false);
        this.changeSelect(true);
        this.classifyChoosable = this.selectType;
        let id = this.$route.params.id;
        let id2 = this.goodsSkuArr[this.typeId].skuId;
        let goodsTitle = this.goodDetail.goodsTitle;
        let skuInfoList;
        this.goodsSkuArr.map((ele) => {
          if (ele.skuId == id2) {
            skuInfoList = ele;
          }
        });

        let goodsLogisticsCosts = this.goodDetail.goodsLogisticsCosts / 100;

        this.changeSingleCommoditiesObj({
          goodsId: id,
          goodsSkuId: id2,
          skuInfoList,
          goodsLogisticsCosts,
          goodsTitle,
        });
        this.$router.push("/cartclear2");
      } else {
        Toast("请先登录");
        this.$router.push("/login");
      }
    },
    changeClassifyChoosable3() {
      if (this.goodsSkuArr.length > 1) {
        this.changeClassifyChoosable();
      } else {
        if (sessionStorage.getItem("userId")) {
          this.changeSelectType(false);
          this.changeSelect(false);
          this.classifyChoosable = this.selectType;
          let id = this.$route.params.id;
          let id2 = this.goodsSkuArr[0].skuId;
          let goodsTitle = this.goodDetail.goodsTitle;
          let skuInfoList;
          this.goodsSkuArr.map((ele) => {
            if (ele.skuId == id2) {
              skuInfoList = ele;
            }
          });

          let goodsLogisticsCosts = this.goodDetail.goodsLogisticsCosts / 100;

          this.changeSingleCommoditiesObj({
            goodsId: id,
            goodsSkuId: id2,
            skuInfoList,
            goodsLogisticsCosts,
            goodsTitle,
          });
          this.$router.push("/cartclear2");
        } else {
          Toast("请先登录");
          this.$router.push("/login");
        }
      }
    },
    clickCloseIcon() {
      this.changeTypeId(0);
      this.changeSelectType(false);
      this.changeSelect(false);
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
  img:nth-of-type(1) {
    width: 0.6133rem;
    height: 0.6667rem;
  }
  img:nth-of-type(2) {
    width: 0.56rem;
    height: 0.6667rem;
  }
}
</style>