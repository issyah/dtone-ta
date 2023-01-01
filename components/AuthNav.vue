<template>
  <a-layout-header>
    <nuxt-link class="header-logo" to="/admin">Megasoft</nuxt-link>
    <div>
      <a-dropdown :trigger="['click']">
        <a-avatar
          size="large"
          :style="{
            background: 'var(--blue-1)',
            color: '#444',
            cursor:'pointer'
          }"
          @click="e => e.preventDefault"
        >
          {{ getFirstLetter }}
        </a-avatar>
        <a-menu slot="overlay">
          <a-menu-item key="0" @click="handleLogout">
            Logout
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  computed: {
    getFirstLetter() {
      if (this.$store?.state?.user) {
        const email = this.$store?.state?.user?.email;
        return email?.charAt(0)?.toUpperCase();
      }
    },
  },
  methods:{
    handleLogout(){
      // clear user and clear cookie 
      this.$cookies.remove('user');
      this.$store?.commit('setUser', {});
      this.$router.push('/');
    }
  }
};
</script>

<style></style>
