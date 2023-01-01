<!-- 
  Setup login for auth page 
-->

<template>
  <a-row
    type="flex"
    justify="center"
    :gutter="[16, 16]"
    :style="{ width: '100%' }"
  >
    <a-col :md="8">
      <a-space direction="vertical" :style="{ width: '100%' }">
        <nuxt-link to="/">
          <h2
            :style="{
              textAlign: 'center',
            }"
          >
            Megasoft
          </h2>
        </nuxt-link>
        <a-card :bordered="false" title="Login">
          <a-form layout="vertical" :form="form" @submit="handleSubmitForm">
            <a-form-item label="Email">
              <a-input
                v-decorator="[
                  'email',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter your email',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item label="password">
              <a-input
                type="password"
                v-decorator="[
                  'password',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter your password',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" block size="large">
                Login
              </a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-space>
    </a-col>
  </a-row>
</template>

<script>
export default {
  layout: "single-card",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login-form" });
  },
  methods: {
    async handleSubmitForm(e) {
      e.preventDefault();
      this.submitLoading = true;
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch('validateUser', {
            ...values
          }).then((response) => {
            if(response?.email){
              this.$message.success('Welcome back!');
              this.$router.push('/admin');
            }
          }).catch((error) => {
            this.$message.error(error?.message);
          });
        }
      });
      this.submitLoading = false;
    },
  },
};
</script>

<style></style>
