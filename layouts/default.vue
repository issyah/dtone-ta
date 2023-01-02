<!-- 
  default layout for ease of use. 
 -->

<template>
  <a-layout class="layout">
    <Nav></Nav>
    <a-layout-content>
      <div :style="{
        minHeight: '100vh',
      }">
        <Nuxt/>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<style scoped>

</style>
<script>

</script>
