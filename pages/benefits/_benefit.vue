<!-- return a list of product based on benefits -->
<template>
  <div>
    <h1>{{ $route.params.benefit }}</h1>
    <Products :filter-benefits="$route.params.benefit"/>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
