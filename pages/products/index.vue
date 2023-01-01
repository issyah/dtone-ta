<!-- List all the product sections. Pull data via API -->

<template>
  <div>
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }"
    >
      <h1 :style="{
        marginBottom:0
      }">All Products</h1>
      <div>
        <a-space size="small">
          <benefits-filter  @benefit-id="handleBenefitId($event)"/>
          <service-filter 
            @service-id="handleServiceId($event)"
          />
          <a-button-group>
            <a-button
              :type="layout == 'grid' ? 'primary' : undefined"
              icon="appstore"
              @click="setLayout('grid')"
            />
            <a-button
              :type="layout == 'list' ? 'primary' : undefined"
              icon="bars"
              @click="setLayout('list')"
            />
          </a-button-group>
        </a-space>
      </div>
    </div>
    <products :layout="layout" :filter-service-id="filterServiceId" :filter-benefits="filterBenefitId"/>
  </div>
</template>
<script>
import Products from "@/components/Products.vue";
import ServiceFilter from "@/components/ServiceFilter.vue";
import BenefitsFilter from "../../components/BenefitsFilter.vue";
export default {
  data: () => ({
    layout: "grid",
    filterServiceId: '',
    filterBenefitId: ''
  }),
  components: {
    Products,
    ServiceFilter,
    BenefitsFilter
  },
  methods: {
    handleServiceId(id){
      this.filterServiceId = id;
    },
    handleBenefitId(id){
      console.log(id);
      this.filterBenefitId = id;
    },
    setLayout(val) {
      if (val === this.layout) {
        return;
      }
      this.layout = val;
      localStorage.setItem("pd_layout", val);
    },
  },
  created() {
    if (process.client) {
      this.layout = localStorage.getItem("pd_layout") || "grid";
    }
  },
};
</script>
