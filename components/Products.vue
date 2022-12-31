<!-- 
  Main product component. 
 -->
<template>
  <div v-if="loading">
    <div v-if="layout == 'grid'">
      <a-row :gutter="[16, 16]">
        <a-col v-for="index in 4" :key="index" :md="6">
          <a-card>
            <a-skeleton active />
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div v-else>
      <a-list
        item-layout="vertical"
        size="large"
        :style="{
          background: '#FFF',
          padding: '16px',
        }"
      >
        <a-list-item v-for="index in 4" :key="index">
          <a-skeleton />
        </a-list-item>
      </a-list>
    </div>
  </div>
  <div v-else>
    <!-- if there are products -->
    <div v-if="products.length">
      <template v-if="layout == 'grid'">
        <a-row :gutter="[16, 16]" type="flex">
          <a-col v-for="(item, index) in products" :key="index" :md="6">
            <a-card
              :bordered="false"
              :title="item?.name"
              :style="{ height: '100%' }"
              hoverable
              @click="$router.push(`/products/${item?.id}`)"
            >
              <p>{{ item?.description }}</p>
            </a-card>
          </a-col>
        </a-row>
      </template>
      <template v-else>
        <a-list
          item-layout="vertical"
          size="large"
          :data-source="products"
          :style="{
            background: '#FFF',
            padding: '16px',
          }"
        >
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-list-item-meta :description="item.description" :key="index">
              <a slot="title">
                <NuxtLink :to="`/products/${item.id}`">{{
                  item?.name
                }}</NuxtLink>
              </a>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </template>
    </div>
    <!-- no product -->
    <div v-else>
      <a-empty />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: true,
    products: [],
  }),
  props: {
    layout: { Type: String, default: "grid" },
  },
  methods: {
    // retrieve the product data via api.
    async getAllProducts() {
      this.loading = true;
      try {
        const res = await this.$axios.$get("/api/products", {
          headers: {
            "Content-type": "application/json",
            Authorization: `Basic ${this.$basicAuthToken}`,
          },
        });
        if (res.error) {
          this.$message.error("Error fetching data");
          this.loading = false;
          return;
        }
        this.products = res;
      } catch (error) {
        this.$message.error(error?.message);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>
