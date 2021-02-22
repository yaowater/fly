<template>
  <a-layout class="layout">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
      class="y-sider"
    >
      <div class="logo">{{ collapsed ? "LOL" : "英雄联盟LOL" }}</div>
      <a-menu
        theme="dark"
        mode="inline"
        :defaultOpenKeys="openKeys"
        :default-selected-keys="selectedKeys"
      >
        <a-menu-item key="/">
          <router-link to="/" tag="div">
            <a-icon type="radar-chart" />
            <span> 数据驾驶舱</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="员工管理">
          <span slot="title"
            ><a-icon type="appstore" /><span>员工管理</span></span
          >
          <a-menu-item key="/userlist">
            <router-link to="/userlist" tag="div"
              ><span>员工列表 </span></router-link
            >
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="业务管理">
          <span slot="title"
            ><a-icon type="appstore" /><span>业务管理</span></span
          >
          <a-menu-item key="/worklist">
            <router-link to="/worklist" tag="div"
              ><span>工单列表 </span></router-link
            >
          </a-menu-item>
          <a-menu-item key="3-2">投诉列表 </a-menu-item>
          <a-menu-item key="3-3">客户列表 </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" class="y-header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-dropdown style="margin-right: 20px">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            Simba<a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;"><a-icon type="lock" />修改密码</a>
            </a-menu-item>
            <a-menu-item @click="loginOut">
              <a href="javascript:;"><a-icon type="logout" />注销登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <Bread />
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Bread from "./components/Bread";
export default {
  components: {
    Bread,
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: [],
      openKeys: [],
    };
  },
  watch: {
    $route() {
      // console.log("this.$route.meta", this.$route.meta);
      // document.title = "英雄联盟LOL" + "-" + this.$route.meta.title;
    },
  },
  created() {
    // document.title = "英雄联盟LOL" + "-" + this.$route.meta.title;
    if (this.$route.meta && this.$route.meta.module) {
      this.openKeys = [this.$route.meta.module];
    }
    this.selectedKeys = [this.$route.path];
  },
  methods: {
    loginOut() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang='css'>
/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/

::-webkit-scrollbar {
  width: 10px; /*对垂直流动条有效*/
  height: 10px; /*对水平流动条有效*/
}

/*定义滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rosybrown;
  border-radius: 3px;
}

/*定义滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 7px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #e8e8e8;
}

/*定义两端按钮的样式*/
::-webkit-scrollbar-button {
  background-color: cyan;
}

/*定义右下角汇合处的样式*/
::-webkit-scrollbar-corner {
  background: khaki;
}
.layout {
  height: 100%;
  /* height: 100vh; */
}
.layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.layout .trigger:hover {
  color: #1890ff;
}

.layout .logo {
  height: 32px;
  line-height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: bold;
  font-family: 楷体;
  font-size: 18px;
}
.y-header {
  display: flex;
  justify-content: space-between;
}
.y-sider {
  height: 100%;
  /* overflow-y: auto; */
  overflow-y: scroll;
}
</style>