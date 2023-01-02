<!-- main navigation for the website  -->

<template>
  <a-layout-header>
    <nuxt-link class="header-logo" to="/">Megasoft</nuxt-link>
    <a-menu id="main-nav" mode="horizontal" v-model="selected">
      <a-sub-menu key="/benefits">
        <span slot="title" class="submenu-title-wrapper">
          Benefits <a-icon type="caret-down"/>
        </span>
        <template v-if="benefits?.length">
          <a-menu-item
            v-for="item in benefits"
            :key="`/benefits/${item?.name}`"
          >
            <nuxt-link :to="`/benefits/${item?.name}`">{{
              item?.name
            }}</nuxt-link>
          </a-menu-item>
        </template>
      </a-sub-menu>
      <a-sub-menu key="/services">
        <span slot="title" class="submenu-title-wrapper">
          Services <a-icon type="caret-down"/>
        </span>
        <template v-if="services?.length">
          <a-menu-item v-for="item in services" :key="`/services/${item?.id}`">
            <nuxt-link :to="`/services/${item?.id}`">{{
              item?.name
            }}</nuxt-link>
          </a-menu-item>
        </template>
      </a-sub-menu>
      <a-menu-item key="/products">
        <nuxt-link to="/products">All Products </nuxt-link>
      </a-menu-item>
      <template v-if="$store?.state?.user?.email">
        <a-menu-item key="/admin">
          <nuxt-link to="/admin">Dashboard</nuxt-link>
        </a-menu-item>
      </template>
      <template v-else>
        <a-menu-item key="/login">
          <nuxt-link to="/login">Login</nuxt-link>
        </a-menu-item>
      </template>
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
    benefits() {
      return this.$store?.state?.benefits;
    },
    services() {
      return this.$store?.state?.services;
    },
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
