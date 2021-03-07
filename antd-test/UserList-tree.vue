<template>
  <div>
    <a-input-search
      style="margin-bottom: 8px"
      placeholder="Search"
      @change="onChange"
    />
    <a-tree
      :expanded-keys="expandedKeys"
      :auto-expand-parent="autoExpandParent"
      :tree-data="gData"
      @expand="onExpand"
      checkable
      v-model="checkedKeys"
    >
      <!-- :defaultExpandAll="true" -->
      <template slot="title" slot-scope="{ title }">
        <span v-if="title.indexOf(searchValue) > -1">
          {{ title.substr(0, title.indexOf(searchValue))
          }}<span style="color: #f50">{{ searchValue }}</span
          >{{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
        </span>
        <span v-else>{{ title }}</span>
      </template>
    </a-tree>
  </div>
</template>
<script>
let gData = [
  {
    key: "0-1",
    scopedSlots: { title: "title" },
    title: "一级目录1",
    children: [
      { key: "0-1-1", scopedSlots: { title: "title" }, title: "目录配置" },
      { key: "0-1-2", scopedSlots: { title: "title" }, title: "权限配置" },
    ],
  },
  {
    key: "0-2",
    scopedSlots: { title: "title" },
    title: "一级目录2",
    children: [
      {
        key: "0-2-1",
        scopedSlots: { title: "title" },
        title: "角色管理",
        children: [
          {
            key: "0-2-1-1",
            scopedSlots: { title: "title" },
            title: "张三",
          },
          {
            key: "0-2-1-2",
            scopedSlots: { title: "title" },
            title: "李四",
          },
        ],
      },
      { key: "0-2-2", scopedSlots: { title: "title" }, title: "品类架构管理" },
      { key: "0-2-3", scopedSlots: { title: "title" }, title: "小组管理" },
      { key: "0-2-4", scopedSlots: { title: "title" }, title: "用户管理" },
    ],
  },
  { key: "0-3", scopedSlots: { title: "title" }, title: "一级目录3" },
];
const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    const title = node.title;
    dataList.push({ key, title });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(gData);

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};
export default {
  data() {
    return {
      expandedKeys: [],
      searchValue: "",
      autoExpandParent: true,
      gData,
      // gData: [
      //   { key: "0-1", scopedSlots: { title: "title" }, title: "0-1" },
      //   {
      //     key: "0-2",
      //     scopedSlots: { title: "title" },
      //     title: "0-2",
      //     children: [
      //       { key: "0-2-1", scopedSlots: { title: "title" }, title: "0-2-1" },
      //       { key: "0-2-2", scopedSlots: { title: "title" }, title: "0-2-2" },
      //     ],
      //   },
      //   { key: "0-3", scopedSlots: { title: "title" }, title: "0-3" },
      // ],
      checkedKeys: [],
    };
  },
  watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    },
  },
  mounted() {
    console.log("this.gData", this.gData);
  },
  methods: {
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onChange(e) {
      const value = e.target.value;
      // console.log("value", value);
      // console.log("dataList", dataList);
      const expandedKeys = dataList
        .map((item) => {
          if (item.title.indexOf(value) > -1) {
            return getParentKey(item.key, gData);
          }
          return null;
        })
        .filter((item, i, self) => item && self.indexOf(item) === i);
      // console.log("expandedKeys", expandedKeys);
      Object.assign(this, {
        expandedKeys,
        searchValue: value,
        autoExpandParent: true,
      });
    },
  },
};
</script>
<style lang="css">
/* .y-pagination {
  display: flex;
  justify-content: center;
} */
</style>
