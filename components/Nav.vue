<!-- main navigation for the website  -->

<template>
  <a-layout-header
    :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#FFF',
    }"
  >
    <nuxt-link class="header-logo" to="/">Megasoft</nuxt-link>
    <a-menu id="main-nav" mode="horizontal" v-model="selected">
      <a-menu-item key="/products">
        <nuxt-link to="/products"> Products </nuxt-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
<script>
export default {
  data: () => ({}),
  computed: {
    selected() {
      return [this?.$nuxt?.$route?.path];
    },
  },
  mounted() {},
};
</script>
<style>
  .header-logo {
    font-size: 24px;
    color: inherit;
  }
</style>