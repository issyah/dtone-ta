// Global vuex storage
export const state = () => ({
  services: [],
  benefits: [],
  user: {}
});

export const mutations = {
  updateServices(state, services) {
    state.services = services;
  },
  updateBenefits(state, benefits) {
    state.benefits = benefits;
  },
  setUser(state, user) {
    state.user = user;
  },
};

export const actions = {
  async nuxtServerInit({commit, dispatch}){
    const savedUser = this.$cookies.get('user');
    if(savedUser){
      commit('setUser', savedUser);
    }
    await dispatch('fetchServices');
    await dispatch('fetchBenefits');
  },
  async fetchServices(context) {
    const res = await this.$axios.$get(`/api/services`, {
      headers: {
        Authorization: `Basic ${this.$basicAuthToken}`,
      },
    });
    if (res.error) {
      this.$message.error("Error fetching services");
      return;
    }
    context.commit("updateServices", res);
  },
  async fetchBenefits(context) {
    const res = await this.$axios.$get(`/api/benefit-types`, {
      headers: {
        Authorization: `Basic ${this.$basicAuthToken}`,
      },
    });
    if (res.error) {
      this.$message.error("Error fetching benefits");
      return;
    }
    context.commit("updateBenefits", res);
  },
  // fake authenticate user
  async validateUser(context, { email, password }) {
    const errorMessage = "Email or password invalid.";
    return new Promise(
      (resolve, reject) => {
        if (email != "admin@admin.com") {
          reject({
            message: errorMessage,
          });
          // this.$message.error(errorMessage);
        }
        if (password != "123456") {
          // message.error(errorMessage);
          reject({
            message: errorMessage,
          });
        }
        const user = {
          email: "admin@admin.com",
          id: 1,
        };
        this.$cookies.set('user', user);
        // correct email and password.
        context.commit("setUser", user);
        resolve({
          ...user,
        });
      },
      (error) => {
        reject(error);
      }
    );
  },
};
