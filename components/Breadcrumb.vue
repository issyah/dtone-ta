<!-- Easier rendering of breadcrumb -->
<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item,index) in breadcrumbs" :key="index">
      <template v-if="item?.to">
        <nuxt-link :to="item.to">{{ item.label }}</nuxt-link>
      </template>
      <template v-else>
        {{ item?.label }}
      </template>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  props:{
    breadcrumbs:{Type: Array, default:[]}
  }
}
</script>