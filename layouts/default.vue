<!-- 
  default layout for ease of use. 
 -->

<template>
  <a-layout class="layout">
    <Nav></Nav>
    <a-layout-content>
      <div :style="{
        paddingTop: '50px',
        paddingBottom: '50px',
        minHeight: '100vh',
      }">
        <Nuxt />
      </div>
    </a-layout-content>
  </a-layout>
</template>
<style scoped>
.ant-layout-content {
  padding: 0 50px;
}
</style>
<script>
export default {
  data:() => ({
    errorMessage: this?.$globalErrorMessage
  }),
  watch: {
    errorMessage(value){
      console.log(value);
    }
  }
};
</script>
