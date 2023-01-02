<!-- 
  Pull the transactions list for the auth user 
 -->

<template>
  <div>
    <h2>Transactions</h2>
    <a-card>
      <a-table
        :data-source="transactions"
        :columns="columns"
        :loading="loading"
        :pagination="pagination"
        @change="handleTableChange"
      >
        <span slot="creation_date" slot-scope="date">
          {{ $moment(date).format("DD MMM YY / hh:mm a") }}
        </span>
        <a-tag slot="service" slot-scope="service">{{ service }}</a-tag>
        <a-tag slot="status" slot-scope="status" 
          :color="
            status === 'COMPLETED' ? 'green' : 
            (status === 'CANCELLED' || status === 'REJECTED' || status === 'DECLINED') ? 'red' : 'blue'
          "
        >
          {{ status }}
        </a-tag>
      </a-table>
    </a-card>
  </div>
</template>

<script>
// {
//     dataIndex: 'name',
//     key: 'name',
//     slots: { title: 'customTitle' },
//     scopedSlots: { customRender: 'name' },
//   },
const columns = [
  {
    dataIndex: "id",
    key: "id",
    title: "ID",
  },
  {
    dataIndex: "creation_date",
    key: "creation_date",
    title: "Creation date",
    scopedSlots: { customRender: "creation_date" },
  },
  {
    dataIndex: 'product.name',
    key: 'product.name',
    title:'Product'
  },
  {
    dataIndex: 'product.service.name',
    key: 'product.service.name',
    title: 'Service',
    scopedSlots: {customRender: "service"}
  },
  {
    dataIndex: 'product.operator.name',
    key: 'product.operator.name',
    title: 'Operator'
  },
  {
    dataIndex: 'status.message',
    key: 'status.message',
    title: 'Status',
    scopedSlots: {customRender: "status"}
  }
];
export default {
  data: () => ({
    columns,
    transactions: [],
    pagination: {},
    loading: false,
  }),
  async fetch() {
    this.transactions = await this.$axios.$get(`/api/transactions`, {
      headers: {
        Authorization: `Basic ${this.$basicAuthToken}`,
      },
    });
  },
  methods:{
    async handleTableChange(){
      
    }
  }
};
</script>

<style></style>
