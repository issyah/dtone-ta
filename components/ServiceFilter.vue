<!-- 
  Self-contained component for service filter
 -->

<template>
  <a-space>
    <span>Filter services: </span>
    <a-select :value="selected" :style="{
      width:'120px'
    }"
      @change="handleChange"
    >
      <a-select-option :value="null">All</a-select-option>
      <template v-if="services?.length">
        <a-select-option
          v-for="(item, index) in services"
          :key="index"
          :value="item?.id"
        >
          {{ item?.name }}
        </a-select-option>
      </template>
    </a-select>
  </a-space>
</template>
<script>
export default {
  data:()=>({
    selected:null
  }),
  computed: {
    services() {
      return this.$store.state.services;
    },
  },
  methods:{
    handleChange(value){
      this.selected = value;
    }
  },
  watch:{
    selected(value, oldVal){
      // trigger an emit to parse value to product section 
      this.$emit('service-id', value);
    }
  },
  created() {
    // the services list is stored in vuex. If a user happens to refresh or the list is empty, we need to populate the services again.
    if (this.$store?.state?.services?.length == 0) {
      this.$store.dispatch("fetchServices");
    }
  },
};
</script>
