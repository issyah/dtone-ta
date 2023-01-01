<template>
  <div>
    <a-space direction="vertical" :style="{ width: '100%' }">
      <h2 :style="{marginBottom:0}">Promotions</h2>
      <promotions :per-page="4" :column="3" :show-more="true" />
      <div>
        <h2>View products by services</h2>
        <service-cards/>
      </div>
      <div>
        <h2>View products by benefits</h2>
        <benefit-cards/>
      </div>
    </a-space>
  </div>
</template>

<script>
import BenefitCards from '../components/BenefitCards.vue';
import ProductIcon from "../components/ProductIcon.vue";
import Promotions from "../components/Promotions.vue";
import ServiceCards from "../components/ServiceCards.vue";
export default {
  data:() =>({
  }),
  name: "IndexPage",
  components: {
    Promotions,
    ProductIcon,
    ServiceCards,
    BenefitCards
},

};
</script>
