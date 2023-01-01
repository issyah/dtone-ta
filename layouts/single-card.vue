<template>
  <a-layout class="Layout">
    <a-layout-content class="content">
      <Nuxt keep-alive />
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  padding-top: 56px;
  padding-bottom: 56px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
