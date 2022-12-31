<!-- 
  Display an icon based on the services id.
 -->

<template>
  <a-icon :type="getIconName()" :style="{fontSize: '16px'}"/>
</template>
<script>
export default {
  props: {
    id: { Type: String, default: null },
  },
  methods: {
    getIconName() {
      switch (this.id) {
        case 1:
          return "mobile";
          break;
        case 2:
          return "wifi";
          break;
        case 3:
          return "api";
          break;
        case 4:
          return "gift";
          break;
        case 5:
          return "phone";
          break;
        case 6:
          return "desktop";
          break;
        case 7:
          return "heart";
        case 8:
          return "car";
          break;
        case 9: 
          return "customer-service";
          break;
        default:
          return "folder";
          break;
      }
    },
  },
};
</script>
