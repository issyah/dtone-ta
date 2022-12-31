<!-- 
  * reusable selection for service filter
 -->

<template>
  <div v-if="services?.length">
    <a-list :grid="{ gutter: 16, md: 3 }" :data-source="services">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card
          :key="index"
          :border="false"
          hoverable
          @click="$router.push(`/services/${item?.id}`)"
          :style="{
            // background: 'var(--blue-5)'
            // background: `url(${require('~/assets/images/services/1.jpeg')}) 50% 50%`,
            // backgroundSize: 'cover',
          }"
        >
          <!-- <img :style="{
            height:'250px',
            objectFit:'cover',
          }" slot="cover" :src="require(`~/assets/images/services/1.jpeg`) || ''" /> -->
          <a-space
            direction="vertical"
            :style="{
              width: '100%',
              textAlign: 'center',
              // color: '#FFF'
            }"
          >
            <product-icon
              :id="item?.id"
              :style="{
                fontSize: '34px',
              }"
            />
            <h2 :style="{marginBottom:0}">{{ item?.name }}</h2>
          </a-space>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import ProductIcon from "./ProductIcon.vue";
export default {
  components: { ProductIcon },
  data: () => ({}),
  computed: {
    services() {
      return this.$store?.state?.services;
    },
  },
  props: {},
  created() {
    if (this.$store?.state?.services?.length == 0) {
      this.$store.dispatch("fetchServices");
    }
  },
};
</script>

<style></style>
