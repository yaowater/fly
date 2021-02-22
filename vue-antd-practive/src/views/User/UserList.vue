<template>
  <div>
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <span slot="action">
        <a>Delete</a>
        <a-divider type="vertical" />
        <a>Delete</a>
      </span>
    </a-table>
    <Center>
      <a-pagination v-model="current" :total="50" show-less-items />
    </Center>
  </div>
</template>
<script>
import Center from "@/components/Center";
const columns = [
  {
    dataIndex: "name",
    key: "name",
    title: "姓名",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default {
  components: {
    Center,
  },
  data() {
    return {
      data,
      columns,
      current: 2,
    };
  },
};
</script>
<style lang="css">
/* .y-pagination {
  display: flex;
  justify-content: center;
} */
</style>
