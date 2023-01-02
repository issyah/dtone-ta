<!-- Return the balance amount for the admin dashboard -->
<template>
  <div>
    <h2>Balances</h2>
    <a-list
      item-layout="horizontal"
      :loading="$fetchState?.pending"
      :data-source="balance"
    >
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :style="{ width: '100%' }"
      >
        <a-row :gutter="16" type="flex" :key="index">
          <a-col flex="auto" v-for="(map, i) in balanceMap" :key="i">
            <a-card>
              <a-statistic
                :title="map?.label"
                :value="item[map?.id]"
                :precision="2"
              />
            </a-card>
          </a-col>
        </a-row>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    balance: [],
    balanceMap: [
      {
        label: "Available",
        id: "available",
      },
      {
        label: "Credit limit",
        id: "credit_limit",
      },
      {
        label: "Holding",
        id: "holding",
      },
      {
        label: "Unit",
        id: "unit",
      },
      {
        label: "Unit type",
        id: "unit_type",
      },
    ],
  }),
  async fetch() {
    this.balance = await this.$axios.$get("/api/balances", {
      headers: {
        Authorization: `Basic ${this.$basicAuthToken}`,
      },
    });
    // this.balance = await this.$axios
    //   .get("/api/balances", {
    //     headers: {
    //       Authorization: `Basic ${this.$basicAuthToken}`,
    //     },
    //   })
  },
};
</script>

<style>
.ant-statistic-content-value, .ant-statistic-content-value-int{
  font-size: 1.56rem;
}
</style>
