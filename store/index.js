// Global vuex storage 


export const state = () =>({
  services:[],
  benefits:[]
});


export const mutations = {
  updateServices(state, services){
    state.services = services;
  },
  updateBenefits(state, benefits){
    state.benefits = benefits;
  }
}

export const actions = {
  async fetchServices(context){
    const res = await this.$axios.$get(`/api/services`,{
      headers:{
        Authorization: `Basic ${this.$basicAuthToken}` 
      }
    });
    if(res.error){
      this.$message.error('Error fetching services');
      return;
    };
    context.commit('updateServices', res);
  },
  async fetchBenefits(context){
    const res = await this.$axios.$get(`/api/benefit-types`, {
      headers:{
        Authorization: `Basic ${this.$basicAuthToken}`
      }
    });
    if(res.error){
      this.$message.error('Error fetching benefits');
      return;
    }
    context.commit('updateBenefits', res)
  }
}