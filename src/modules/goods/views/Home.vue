<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },

  mounted() {
    console.log(this.$api);
    this.$api['goods/goods/info']().then(data => console.log(data));
  },
};
</script>
