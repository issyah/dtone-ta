<!-- main navigation for the website  -->

<template>
  <a-layout-header
  >
    <nuxt-link class="header-logo" to="/">Megasoft</nuxt-link>
    <a-menu id="main-nav" mode="horizontal" v-model="selected">
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <nuxt-link to="/services">Services</nuxt-link>
        </span>
        <template v-if="services?.length">
          <a-menu-item v-for="item in services" :key="`/services/${item?.id}`">
            <nuxt-link :to="`/services/${item?.id}`">{{ item?.name }}</nuxt-link>
          </a-menu-item>
        </template>
      </a-sub-menu>
      <a-menu-item key="/products">
        <nuxt-link to="/products">All Products </nuxt-link>
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
    services(){
      return this.$store?.state?.services
    }
  },
  // created(){
  //   if (this.$store?.state?.services?.length == 0) {
  //     this.$store.dispatch("fetchServices");
  //   }
  // },
  mounted() {},
};
</script>
<style>
  .header-logo {
    font-size: 24px;
    color: inherit;
  }
</style>