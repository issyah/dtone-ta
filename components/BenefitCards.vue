<!-- View item by benefits -->
<template>
  <div>
    <a-space direction="vertical" :style="{ width: '100%' }">
      <a-list
        :grid="{ gutter: 16, md: 3 }"
        :style="{ width: '100%' }"
        :data-source="benefits"
      >
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-card :style="{textAlign:'center'}" :key="index" hoverable :bordered="false" @click="$router.push(`/benefits/${item?.name}`)">
            <h4 :style="{marginBottom:0}">{{ item?.name }}</h4>
          </a-card>
        </a-list-item>
      </a-list>
    </a-space>
  </div>
</template>
<script>
export default {
  computed:{
    benefits(){
      return this.$store?.state?.benefits
    }
  },
};
</script>
<style></style>
