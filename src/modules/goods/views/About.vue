<template>
  <div class="about">
    <el-input
      v-model="inputNumber"
      placeholder=""/>
    <el-button @click="onClick">测试ffi</el-button>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// eslint-disable-next-line
import { ipcRenderer, remote } from 'electron';

export default {
  data: () => ({ inputNumber: 1 }),

  methods: {
    onClick() {
      const value = ipcRenderer.sendSync('ffi-test', this.inputNumber);
      this.$message({
        showClose: true,
        message: value,
        type: 'success',
      });
    },
  },
};
</script>

