<!-- Promotion details -->
<template>
  <div>
    <div v-if="$fetchState.pending" :style="{ textAlign: 'center' }">
      <a-spin size="large" />
    </div>
    <div v-else>
      <a-space direction="vertical" :style="{ width: '100%' }" size="large">
        <breadcrumb
          :breadcrumbs="[
            { label: 'Home', to: '/' },
            { label: 'Promotions', to: '/promotions' },
            { label: item?.title },
          ]"
        />
        <a-page-header
          :title="item?.title"
          :sub-title="item?.description"
          @back="$router.go(-1)"
          :style="{ background: '#FFF', borderRadius: '8px' }"
        />
        <a-card :bordered="false" title="Details">
          <a-descriptions size="default" bordered>
            <a-descriptions-item label="Operator">
              {{ item?.operator?.name }}
            </a-descriptions-item>
            <a-descriptions-item label="Country">{{
              item?.operator?.country?.name
            }}</a-descriptions-item>
            <a-descriptions-item label="Start date">{{
              $moment(item?.start_date).format("DD MMM YY")
            }}</a-descriptions-item>
            <a-descriptions-item label="End date">{{
              $moment(item?.end_date).format("DD MMM YY")
            }}</a-descriptions-item>
          </a-descriptions>
        </a-card>
        <div :style="{ fontWeight: '500' }">Products</div>
        <a-row type="flex" :gutter="[16, 16]">
          <a-col v-for="prod in item?.products" :key="prod?.id" :md="6">
            <a-card
              :style="{ height: '100%' }"
              :bordered="false"
              hoverable
              @click="$router.push(`/products/${prod?.id}`)"
              :title="prod?.name"
            >
              <a-card-meta :description="prod?.description" />
            </a-card>
          </a-col>
        </a-row>
        <a-card title="Terms">
          <div v-html="$md.render(item?.terms)"></div>
        </a-card>
      </a-space>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../components/Breadcrumb.vue";
export default {
  components: { Breadcrumb },
  data: () => ({
    item: {},
  }),
  async fetch() {
    this.item = await this.$axios.$get(
      `/api/promotions/${this.$route.params.promotion}`,
      {
        headers: {
          Authorization: `Basic ${this.$basicAuthToken}`,
        },
      }
    );
  },
  watch: {
    ["$fetchState.error"](value) {
      this.$nuxt.error({ statusCode: "404", message: "Promotion not found" });
    },
  },
};
</script>

<style></style>
