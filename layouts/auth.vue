<!-- Auth layout -->

<template>
  <a-layout class="layout">
    <AuthNav />
    <a-layout-content>
      <div
        :style="{
          minHeight: '100vh',
        }"
      >
        <Nuxt />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {};
</script>

<style></style>
