<!-- 
  Show products based on services
 -->
<template>
  <div>
    <breadcrumb :breadcrumbs="[
      { to: '/', label: 'Home' },
      { to: '/services', label: 'Services'},
      { label: getTitle}
      ]" />
    <h1>{{ getTitle }}</h1>
    <products :filter-service-id="$route.params.service" />
  </div>
</template>
<script>
import Products from "../../components/Products.vue";
import Breadcrumb from "../../components/Breadcrumb.vue";
export default {
  components: {
    Products,
    Breadcrumb,
  },
  computed: {
    services() {
      return this.$store?.state?.services;
    },
    getTitle() {
      if (this.services?.length) {
        const service = this.services.find(
          (i) => i.id == this.$route.params.service
        );
        return service?.name;
      } else {
        return "Service";
      }
    },
  },
  created() {
    if (!this.$store?.state?.services?.length == 0) {
      this.$store.dispatch("fetchServices");
    }
  },
};
</script>

<style></style>
