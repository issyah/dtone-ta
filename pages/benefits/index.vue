<!-- main benefits page -->

<template>
  <div>
    <a-space direction="vertical" :style="{ width: '100%' }">
      <Breadcrumb 
        :breadcrumbs="[
          {label: 'Home', to:'/'},
          {label: 'Benefits'}
        ]"
      />
      <h1>Benefits</h1>
      <benefit-cards />
    </a-space>
  </div>
</template>

<script>
import BenefitCards from "@/components/BenefitCards.vue";
import Breadcrumb from "../../components/Breadcrumb.vue";
export default {
  components: {
    BenefitCards,
    Breadcrumb
},
};
</script>

<style></style>
