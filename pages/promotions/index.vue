<template>
  <div>
    <breadcrumb 
      :breadcrumbs="[
        {to: '/', label: 'Home'},
        {label: 'Promotions'}
      ]"
    />
    <h1>Promotions</h1>
    <promotions :perPage="50" :column="3"/>
  </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue';
import Promotions from '../../components/Promotions.vue';
export default {
 data:() => ({

 }),
 components:{
  Breadcrumb,
  Promotions
 },
 methods:{

 }
}
</script>

<style>

</style>