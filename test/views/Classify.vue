<template>
  <div class="y-classify">
    <div class="classify-top">
      <van-search v-model="searchValue" placeholder="搜索" @search="blur">
        <template #left-icon>
          <img
            src="../../assets/classification_search_icon.png"
            @click="blur"
          />
        </template>
      </van-search>
    </div>

    <div class="classify-left">
      <span
        v-for="(item, index) in cates"
        :key="index"
        v-text="item.goodsCategoryName"
        @click="catesClick(item, index)"
        :class="{ on: thisId == index }"
      ></span>
    </div>
    <div class="classify-right">
      <div
        class="classify-content"
        v-for="(item, index) in classifyGoodsArr"
        :key="index"
      >
        <div class="classify-good">
          <div class="classify-img">
            <img
              :src="item.mediaImageUrl"
              alt=""
              @click="skipToDetail(item.goodsId)"
            />
          </div>
          <div class="classify-describe">
            <h3 v-text="item.goodsTitle"></h3>
            <div class="price">
              <span v-text="'￥' + item.minRetailPrice / 100"></span>
              <img
                class="rate-img"
                src="../../assets/home_collect_unselect.png"
                v-show="item.collectionCount == 0"
              />
              <img
                class="rate-img"
                src="../../assets/home_collect_select.png"
                v-show="item.collectionCount == 1"
              />
            </div>
          </div>
        </div>
      </div>

      <h1 @click="touchSpan()">查看全部商品</h1>
    </div>

    <YaoTabbar />
  </div>
</template>

<script>
import { YaoTabbar } from "@/components/";
import { Search, Rate } from "vant";
import { mapMutations, mapState } from "vuex";

export default {
  name: "classify",
  components: {
    YaoTabbar,
    [Search.name]: Search,
    [Rate.name]: Rate,
  },
  data() {
    return {
      searchValue: "",
      cates: [],
      thisId: 0,
      // 如果在缓存系统中没有数据，要调获取。如果在缓存系统中有数据，直接使用，不调接口。
      classifyGoodsArr: [],
    };
  },
  computed: {
    ...mapState("classify", ["catesIndex", "find"]),
  },
  mounted() {
    this.thisId = this.catesIndex;
    this.init();
  },
  beforeDestroy() {
    this.clearFind();
  },
  methods: {
    ...mapMutations("classify", [
      "updateFind",
      "clearFind",
      "changeCatesIndex",
      "changeClassifyLeftScrollTop",
      "changeSearchContent",
    ]),
    async init() {
      let data = {
        data: {
          likeName: "",
        },
      };
      let arr = await this.$http.fetchGoodsCategoryInfoList(data);
      this.cates = arr.goodsCategoryDOList;
      if (this.find[this.thisId] && this.find[this.thisId].length) {
        // 不调接口，直接使用缓存中的数据
        this.classifyGoodsArr = this.find[this.thisId];
      } else {
        this.init2(this.cates[this.thisId].goodsCategoryId);
      }
    },
    init2(goodsCategory) {
      let userId = sessionStorage.getItem("userId");
      let data2 = {
        data: {
          pageNum: "1",
          pageSize: "20",
          likeName: "",
          userId,
          goodsCategory,
        },
      };
      this.$http2.fetchSearchGoodsInfoList(data2).then((res) => {
        if (res.result == "1") {
          this.classifyGoodsArr = res.jsonData.goodsInfoVOList;
          this.updateFind({ idx: this.thisId, list: this.classifyGoodsArr });
        }
      });
    },
    catesClick(item, idx) {
      this.changeCatesIndex(idx);
      this.thisId = idx;
      if (this.find[idx] && this.find[idx].length) {
        // 不调接口，直接使用缓存中的数据
        this.classifyGoodsArr = this.find[idx];
      } else {
        this.init2(item.goodsCategoryId);
      }
    },
    touchSpan() {
      this.$router.push("/coachingbooks");
    },
    skipToDetail(val) {
      this.$router.push("/detail/" + val);
    },
    blur() {
      this.changeSearchContent(this.searchValue);
      this.$router.push("/coachingbooks");
    },
  },
};
</script>

<style scoped>
.y-classify {
  height: 100%;
  width: 100%;
  position: relative;
}
.classify-top {
  height: 1.1733rem;
  opacity: 1;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-left: 0.8267rem; */
  background: #f36838;
}

.van-search,
.van-search__content--square {
  width: 8.3467rem;
  height: 0.8rem;
  background: #f6f6f6;
  opacity: 1;
  border-radius: 0.2667rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.van-search .van-field {
  display: flex;
  justify-content: center;
  align-items: center;
}
.van-search .van-search__content {
  background: #f6f6f6;
}

.classify-left {
  width: 2.533333rem;
  position: absolute;
  left: 0;
  top: 1.173333rem;
  bottom: 0;
  overflow: auto;
  padding-top: 0.28rem;
  padding-bottom: 1.4667rem;
}
.classify-left span {
  font-size: 0.266667rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.373333rem;
  color: #b5b5b5;
  display: block;
  text-align: center;
  margin-bottom: 0.56rem;
}

.classify-right {
  position: absolute;
  left: 2.533333rem;
  top: 1.173333rem;
  bottom: 0;
  right: 0;
  background: #f6f6f6;
  overflow: auto;
  padding-bottom: 1.8rem;
}

.classify-right .classify-good {
  width: 6.826667rem;
  height: 2rem;
  background: #ffffff;
  opacity: 1;
  border-radius: 0.4rem;
  margin: 0.24rem auto 0;
}
.classify-good .classify-img {
  width: 2.32rem;
  height: 100%;
  display: flex;
  float: left;
}
.classify-img img {
  display: block;
  width: 1.6rem;
  height: 1.6rem;
  margin: auto;
}
.classify-describe {
  width: 4.506667rem;
  height: 100%;
  float: left;
}
.classify-describe .price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.56rem;
}
.rate-img {
  width: 0.4133rem;
  height: 0.4rem;
}
.classify-describe h3 {
  font-size: 0.266667rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.373333rem;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 3.84rem;
  margin-top: 0.466667rem;
  margin-bottom: 0.32rem;
}
.classify-describe span {
  font-size: 0.4rem;
  font-family: SF UI Text;
  font-weight: bold;
  line-height: 0.386667rem;
  color: #f36838;
}
.classify-right h1 {
  text-align: center;
  margin-top: 0.266667rem;
  font-size: 0.32rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.44rem;
  color: #b5b5b5;
}

.on {
  color: #f36838 !important;
  border-right: 0.08rem solid #f36838;
}
.van-search .van-field__left-icon img {
  width: 0.3733rem;
  height: 0.4rem;
}
</style>