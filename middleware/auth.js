export default function ({store,redirect}){
  
  if(!store.state.user?.email){
    return redirect('/login');
  }
}