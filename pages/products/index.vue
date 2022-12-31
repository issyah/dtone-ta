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
      <h1>Products</h1>
      <a-button-group>
        <a-button :type="layout == 'grid' ? 'primary' : undefined" icon="appstore" @click="setLayout('grid')"/>
        <a-button :type="layout == 'list' ? 'primary' : undefined" icon="bars"  @click="setLayout('list')"/>
      </a-button-group>
    </div>
    <products :layout="layout"/>
  </div>
</template>
<script>
import Products from "@/components/Products.vue";
export default {
  data:() =>({
    layout: 'grid'
  }),
  components: {
    Products,
  },
  methods:{
    setLayout(val){
      if(val === this.layout){return;}
      this.layout = val; 
      localStorage.setItem('pd_layout', val);
    }
  },
  created() {
    if(process.client){
      this.layout = localStorage.getItem('pd_layout') || 'grid'
    }
  }
};
</script>
