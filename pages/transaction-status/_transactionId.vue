<!-- Completed status of transaction -->
<template>
  <div>
    <div v-if="$fetchState.pending" :style="{ textAlign: 'center' }">
      <a-spin size="large" />
    </div>
    <div v-else>
      <a-row type="flex" justify="center" :style="{ width: '100%' }">
        <a-col :md="12">
          <a-card :bordered="false">
            <a-result
              status="success"
              :title="`You have successfully purchased a ${item?.product?.name}`"
              :sub-title="`Order: #${item?.id}`"
            >
              <template #extra>
                <a-button type="primary">
                  <nuxt-link to="/">Go to home page</nuxt-link>
                </a-button>
              </template>
              <div class="desc">
                <h4>Details</h4>
                <a-descriptions :column="1">
                  <a-descriptions-item label="Status">
                    {{ item.status?.message }}
                  </a-descriptions-item>
                  <a-descriptions-item label="Created date">
                    {{
                      $moment(item?.creation_date).format("DD MMM YY / h:mm a")
                    }}
                  </a-descriptions-item>
                  <a-descriptions-item label="Description">
                    {{ item?.product?.description }}
                  </a-descriptions-item>
                </a-descriptions>
              </div>
            </a-result>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: "single-card",
  data: () => ({
    item: {},
  }),
  async fetch() {
    // fetch the transaction details to show details
    this.item = await this.$axios.$get(
      `/api/transactions/${this.$route.params.transactionId}`,
      {
        headers: {
          Authorization: `Basic ${this.$basicAuthToken}`,
        },
      }
    );
  },
  watch: {
    ["$fetchState.error"](value) {
      this.$nuxt.error({ statusCode: "404", message: "Transaction not found" });
    },
  },
};
</script>

<style></style>
