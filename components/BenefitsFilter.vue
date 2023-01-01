<!-- Filter via benefits -->
<template>
  <a-space>
    <span>Filter benefits:</span>
    <a-select :value="selected" :style="{
      width:'120px'
    }"
      @change="handleChange"
    >
      <a-select-option :value="null">All</a-select-option>
      <template v-if="benefits?.length">
        <a-select-option v-for="(item,index) in benefits" :key="index" :value="item?.name">
          {{ item?.name }}
        </a-select-option>
      </template>
    </a-select>
  </a-space>
</template>
<script>
export default {
  data:() =>({
    selected: null
  }),
  computed:{
    benefits(){
      return this.$store?.state?.benefits
    }
  },
  methods:{
    handleChange(value){
      this.selected = value;
    }
  },
  watch:{
    selected(value){
      this.$emit('benefit-id', value);
    }
  },
  created(){
    // if(this.$store?.state?.benefits?.length == 0){
    //   this.$store.dispatch('fetchBenefits');
    // }
  }
}
</script>

<style>

</style>