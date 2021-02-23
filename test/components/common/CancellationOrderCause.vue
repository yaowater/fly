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
        <div class="select">
          <span @click="changeShow5">取消</span>
          <em>货品状态</em>
          <p @click="changeShow6">确认</p>
        </div>
        <div class="choose">
          <span
            v-for="(item, index) in spanArr2"
            :key="index"
            v-text="item.text"
            @click="touchSpan2(index)"
            :class="{ on2: idx == index }"
          ></span>
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
    childshow: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      spanArr2: [
        { id: 1, text: "多拍/错拍/不喜欢" },
        { id: 2, text: "质量问题" },
        { id: 3, text: "发错货" },
      ],
      idx: 0,
    };
  },
  methods: {
    touchSpan2(index) {
      this.idx = index;
    },
    changeShow5() {
      this.$emit("childclick", false);
    },
    changeShow6() {
      this.$emit("childclick", false, this.spanArr2[this.idx].text);
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-content3 {
  width: 100%;
  padding-top: 0.4rem;
  padding-bottom: 0.2667rem;
  .select {
    padding: 0 0.6667rem;
    margin-bottom: 0.5333rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 0.32rem;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 0.84rem;
      color: #999999;
    }
    em {
      font-size: 0.3733rem;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 0.84rem;
      color: #333333;
    }
    p {
      font-size: 0.32rem;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 0.84rem;
      color: #f36838;
    }
  }
  .choose {
    span {
      display: block;
      width: 8.2667rem;
      height: 1.6rem;
      border: 0.0267rem solid #f36838;
      opacity: 1;
      border-radius: 0.2667rem;
      font-size: 0.32rem;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 1.6rem;
      color: #f36838;
      text-align: center;
      margin: 0 auto 0.32rem;
    }
    .on2 {
      color: #ffffff;
      background: #f36838;
    }
  }
}
</style>