<template>
  <div class="about">
    <el-button
      type="danger"
      @click="error">
      错误日志
    </el-button>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line
    // console.log(a);
    // throw new Error('我艹');
    // console.log(this.test);
  },
  methods: {
    error() {
      // console.log(this.$store);
      // eslint-disable-next-line
      console.log(a);
    },
  },
};
</script>

