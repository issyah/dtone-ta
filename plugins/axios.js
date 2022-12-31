import Vue from "vue";
export default function({app, $axios}){
  $axios.onError(error => {
    // Vue.$message.error(error?.message);
  })
}