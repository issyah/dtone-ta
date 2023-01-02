<!-- 
  * admin section to view balances and holdings
 -->
<template>
  <div>
    <a-space direction="vertical" size="large" :style="{width:'100%'}">
      <h1>Dashboard</h1>
      <auth-balance/>
      <auth-transactions/>
    </a-space>
  </div>
</template>
<script>
import AuthBalance from '@/components/AuthBalance.vue';
export default {
    middleware: "auth",
    layout: "auth",
    fetch: {},
    methods: {},
    mounted() {
    },
    components: { AuthBalance }
};
</script>

<style></style>
