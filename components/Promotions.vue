<!-- 
  Promotions. rendered in a card based
 -->

<template>
  <div>
    <a-space direction="vertical" :style="{ width: '100%', marginTop:0 }">
      <a-list
        :grid="{ gutter: 16, md: column }"
        :data-source="promotions"
        :loading="loading"
      >
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-card
            :key="index"
            :bordered="false"
            hoverable
            @click="$router.push(`/promotions/${item?.id}`)"
          >
            <template slot="title">
              <div
                :style="{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }"
              >
                <span class="operator-label">{{ item?.operator?.name }}</span>
                <a-tag>{{ item?.operator?.country?.name }}</a-tag>
              </div>
              <h4 class="text-elipsis" :style="{ marginBottom: 0 }">
                {{ item?.title }}
              </h4>
            </template>
            <a slot="actions">
              <nuxt-link :to="`/promotions/${item?.id}`">View</nuxt-link>
            </a>
            <a-card-meta
              :description="item?.description"
              class="text-elipsis"
              :style="{marginBottom:'14px'}"
            />
            <a-space direction="vertical" align="start">
              <span
                >Start date:
                <b>{{ $moment(item?.start_date).format("DD MMM YY") }}</b></span
              >
              <span
                >End date:
                <b>{{ $moment(item?.end_date).format("DD MMM YY") }}</b></span
              >
            </a-space>
          </a-card>
        </a-list-item>
      </a-list>
      <div
        v-if="promotions?.length && showMore"
        :style="{ textAlign: 'center' }"
      >
        <a-button type="primary" size="large">
          <nuxt-link to="/promotions"> View more promotions </nuxt-link>
        </a-button>
      </div>
    </a-space>
  </div>
</template>
<script>
import ProductIcon from "./ProductIcon.vue";
export default {
  data: () => ({
    loading: true,
    promotions: [],
  }),
  components: {
    ProductIcon,
  },
  props: {
    perPage: { Type: Number, default: 50 },
    column: { Type: Number, default: 3 },
    showMore: { Type: Boolean, default: false },
  },
  methods: {
    async getAllPromotions() {
      this.loading = true;
      const params = {
        ...(this.perPage && {
          per_page: this.perPage,
        }),
      };
      const res = await this.$axios.$get(
        `/api/promotions?${new URLSearchParams(params).toString()}`,
        {
          headers: {
            Authorization: `Basic ${this.$basicAuthToken}`,
          },
        }
      );
      if (res.error) {
        this.$message.error(res?.error[0]?.message);
        this.loading = false;
        return;
      }
      this.promotions = res;
      this.loading = false;
    },
  },
  mounted() {
    this.getAllPromotions();
  },
};
</script>
