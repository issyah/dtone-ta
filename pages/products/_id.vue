<template>
  <div
    v-if="loading"
    :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }"
  >
    <a-spin size="large" />
  </div>
  <!-- result available -->
  <div v-else>
    <a-space direction="vertical" size="large">
      <breadcrumb
        :breadcrumbs="[
          { to: '/', label: 'Home' },
          { to: '/products', label: 'All products' },
          {
            to: `/services/${product?.service?.id}`,
            label: product?.service?.name,
          },
          { label: product?.name },
        ]"
      />
      <a-page-header
        :style="{
          marginTop: '8px',
          background: '#FFF',
          borderRadius: '8px',
        }"
        :title="product?.name"
        :sub-title="product?.description"
        @back="$router.go(-1)"
      />
      <div
        :style="{
          backgroundColor: '#FFF',
          borderRadius: '8px',
          padding: '24px',
        }"
      >
        <a-descriptions title="Details" size="large" bordered>
          <a-descriptions-item label="Zones">
            {{ product?.availability_zones?.toString() }}
          </a-descriptions-item>
          <a-descriptions-item label="Benefits">
            <template v-if="product?.benefits?.length">
              <ul>
                <li v-for="(item, index) in product?.benefits" :key="index">
                  <div>
                    {{ item?.additional_information }}
                  </div>
                  <a-space direction="horizontal">
                    <div>
                      Data type: <b>{{ item?.type }}</b>
                    </div>
                    <div>
                      unit: <b>{{ item?.unit }}</b>
                    </div>
                  </a-space>
                </li>
              </ul>
            </template>
          </a-descriptions-item>
          <a-descriptions-item label="Operator">
            {{ product?.operator?.name }}
          </a-descriptions-item>
          <a-descriptions-item label="Country">
            {{ product?.operator?.name }}
          </a-descriptions-item>
        </a-descriptions>
      </div>
    </a-space>
  </div>
</template>
<script>
import Breadcrumb from "../../components/Breadcrumb.vue";
export default {
  components: { Breadcrumb },
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
      this.loading = false;
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
