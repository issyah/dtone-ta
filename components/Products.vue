<!-- 
  Main product component. 
 -->
<template>
  <div v-if="loading">
    <div v-if="layout == 'grid'">
      <a-row :gutter="[16, 16]">
        <a-col v-for="index in 4" :key="index" :md="6">
          <a-card :bordered="false">
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
    <div v-if="products?.length">
      <div
        :style="{
          marginBottom: '14px',
        }"
      >
        showing <b>{{ productPagination?.total }}</b> results
      </div>
      <template v-if="layout == 'grid'">
        <a-row :gutter="[16, 16]" type="flex">
          <a-col
            v-for="(item, index) in products"
            :key="index"
            :md="8"
            :xs="12"
            :style="{}"
          >
            <a-card
              :bordered="false"
              :style="{ height: '100%' }"
              hoverable
              @click="$router.push(`/products/${item?.id}`)"
            >
              <div
                slot="title"
              >
                <a-avatar>
                  <product-icon :id="item?.service?.id" />
                </a-avatar>
                <div>
                  <span class="operator-label" :style="{ fontSize: '12px' }">{{
                    item?.operator?.name
                  }}</span>
                  <div :style="{ marginBottom: 0 }" class="h4 text-elipsis">
                    {{ item?.name }}
                  </div>
                </div>
              </div>
              <p>{{ item?.description }}</p>
              <a-tag>
                {{ item?.service?.name }}
              </a-tag>
              <a-tag>
                {{ item?.operator?.country?.name }}
              </a-tag>
            </a-card>
          </a-col>
        </a-row>
      </template>
      <template v-else>
        <a-list
          item-layout="horizontal"
          size="large"
          :data-source="products"
          :style="{
            background: '#FFF',
            padding: '16px',
          }"
        >
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a slot="actions">
              <a-button
                type="primary"
                @click="$router.push(`/products/${item?.id}`)"
                >View</a-button
              >
            </a>
            <a-list-item-meta :description="item.description" :key="index">
              <template slot="title">
                <NuxtLink :to="`/products/${item?.id}`">{{
                  item?.name
                }}</NuxtLink>
              </template>
            </a-list-item-meta>
            <a-tag>{{ item?.service?.name }}</a-tag>
            <a-tag>
              {{ item?.operator?.country?.name }}
            </a-tag>
          </a-list-item>
        </a-list>
      </template>
      <div
        v-if="page < productPagination.totalPages"
        :style="{
          textAlign: 'center',
          marginTop: '16px',
        }"
      >
        <a-button
          type="primary"
          :loading="loadingMore"
          @click="getMoreProducts()"
          >Load more</a-button
        >
      </div>
    </div>
    <!-- no product -->
    <div v-else>
      <a-card>
        <a-empty />
      </a-card>
    </div>
  </div>
</template>
<script>
import ProductIcon from "@/components/ProductIcon.vue";
export default {
  data: () => ({
    loading: true,
    loadingMore: false,
    products: [],
    page: 1,
    productPagination: {
      total: 0,
      totalPages: 0,
    },
  }),
  components: {
    ProductIcon,
  },
  props: {
    layout: { Type: String, default: "grid" },
    filterServiceId: { Type: Number, default: null },
  },
  methods: {
    // retrieve the product data via api.
    async getProducts() {
      try {
        let params = {
          page: this.page,
          per_page: 50
        };
        if (this.filterServiceId) {
          params["service_id"] = this.filterServiceId;
        }
        const res = await this.$axios.get(
          `/api/products?${new URLSearchParams(params).toString()}`,
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Basic ${this.$basicAuthToken}`,
            },
          }
        );
        if (res?.error) {
          this.$message.error(res?.error[0]?.message);
          return;
        }
        this.productPagination = {
          total: parseInt(res.headers["x-total"]),
          totalPages: parseInt(res.headers["x-total-pages"]),
        };
        return res?.data;
      } catch (error) {
        this.$message.error(error?.message);
      }
    },
    async getInitProducts() {
      this.loading = true;
      this.products = await this.getProducts();
      this.loading = false;
    },
    async getMoreProducts() {
      this.loadingMore = true;
      this.page++;
      const newProducts = await this.getProducts();
      if (newProducts) {
        this.page++;
        this.products = [...this.products, ...newProducts];
      }
      this.loadingMore = false;
    },
  },
  watch: {
    filterServiceId(value) {
      this.page = 1;
      this.getInitProducts();
    },
  },
  mounted() {
    this.getInitProducts();
  },
};
</script>
