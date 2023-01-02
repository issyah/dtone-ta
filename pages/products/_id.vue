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
        <a-descriptions title="Details" size="default" bordered>
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
            {{ product?.operator?.country?.name }}
          </a-descriptions-item>
          <a-descriptions-item label="Type">
            {{ product?.type }}
          </a-descriptions-item>
        </a-descriptions>
      </div>
      <div :style="{ textAlign: 'right' }">
        <a-button type="primary" size="large" @click="handleBuy"
          >Purchase product</a-button
        >
      </div>
    </a-space>
    <a-modal
      :title="`Purchase ${product?.name}`"
      :visible="showConfirmModal"
      :confirm-loading="purchaseLoading"
      @ok="handleConfirm"
      @cancel="showConfirmModal = false"
      okText="Purchase"
    >
      <a-form layout="vertical" :form="form">
        <template v-if="identifierFields?.length">
          <a-form-item
            v-for="(item, index) in identifierFields"
            :key="index"
            :label="item?.label"
            :style="{
              textTransform: 'capitalize',
            }"
          >
            <a-input
              v-decorator="[
                item?.id,
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your ' + item?.label,
                    },
                  ],
                },
              ]"
            />
          </a-form-item>
        </template>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import Breadcrumb from "../../components/Breadcrumb.vue";
export default {
  components: { Breadcrumb },
  data: () => ({
    loading: true,
    product: {},
    showConfirmModal: false,
    purchaseLoading: false,
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "purchase-form" });
  },
  computed: {
    identifierFields() {
      if (this.product?.required_credit_party_identifier_fields?.length) {
        // we need to map the items here. Not really sure why it is an Array of arrays;
        const fields = this.product?.required_credit_party_identifier_fields[0];
        const map = fields?.map((item) => {
          const label = item.replace("_", " ");
          return {
            label: label,
            id: item,
          };
        });
        return map;
      }
    },
  },
  methods: {
    handleBuy() {
      this.showConfirmModal = true;
    },
    async handleConfirm() {
      this.purchaseLoading = true;
      this.form.validateFields((err, values) => {
        if(!err){
          this.$axios.post(`/api/async/transactions`, {
            product_id : this?.product?.id,
            external_id: `${this.product?.id}_${this.$moment(new Date).format('YYYY_MM_DD_hh_ii')}`,
            auto_confirm:true,
            credit_party_identifier: values
          }).then((response) => {
            if(response?.status){
              this.$router.push('/transaction-status/' + response?.id);
            }
          }).catch((error) => {
            if(error.response){
              const errors = error.response?.data?.errors;
              errors?.forEach((item) => {
                this.$message.error(`${item?.code}: ${item?.message}`);
              })
            }
          })
        }
      });
      this.purchaseLoading = false;
      // try {
      //   const res = await this.$axios.post(
      //     `/api/async/transactions`,
      //     {
      //       product_id: this.product?.id,
      //       external_id: `${this.product?.id}_${this.$moment(new Date()).format(
      //         "YYYY_MM_DD"
      //       )}`,
      //       auto_confirm: true,
      //     },
      //     {
      //       headers: {
      //         Authorization: `Basic ${this.$basicAuthToken}`,
      //       },
      //     }
      //   );
      //   if (res) {
      //     console.log(res);
      //   }
      // } catch (error) {
      //   this.$message.error(error?.message);
      // }
      this.purchaseLoading = false;
    },
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
