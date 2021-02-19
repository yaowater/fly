<template>
 <ul class="list-group">
    <div>
      <li class="list-group-item" v-for="(item, index) in todos" :key="index">
        <div class="form-check">
          <label class="form-check-label">
            {{ item }}
          </label>

        </div>

      </li>
    </div>
  </ul>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent,computed,reactive } from 'vue'
import store from "@/store"
export default defineComponent({
  setup() {
    return reactive({
    todos: computed(() => store.state.dones),
    })
  }
})
/* eslint-disable */
</script>

<style lang="scss">
</style>
