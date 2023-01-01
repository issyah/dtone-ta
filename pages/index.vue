<template>
  <div>
    <a-space direction="vertical" :style="{ width: '100%' }" size="large">
      <h1>Promotions</h1>
      <promotions :per-page="4" :column="3" :show-more="true" />
      <div :style="{ marginTop: '36px' }">
        <h1>View by services</h1>
        <service-cards/>
      </div>
    </a-space>
  </div>
</template>

<script>
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
    ServiceCards
},

};
</script>
