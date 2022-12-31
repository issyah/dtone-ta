<template>
  <div v-if="loading" :style="{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    minHeight:'100vh',
  }">
    <a-spin size="large"/>
  </div>
  <!-- result available -->
  <div v-else>
    <a-page-header 
      :title="product?.name"
      @back="$router.go(-1)"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: true,
    product: {},
  }),
  methods: {
    async getProduct() {
      this.loading = true;
      try {
        const res = await this.$axios.$get(
          `/api/products/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Basic ${this.$basicAuthToken}`,
            },
          }
        );
        if (res.error) {
          this.$message.error("Error fetching data. Please try again");
          this.loading = false;
          return;
        }
        this.product = res;
      } catch (error) {
        this.$message.error(error?.message);
      }
      this.loading = false
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
