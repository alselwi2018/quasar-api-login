// import state from './state'
// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

// export default {
//   namespaced: true,
//   getters,
//   mutations,
//   actions,
//   state
// }
import axios from 'axios';
import {fireApp,dataAuth,db} from 'boot/database-quasar'
const state = {
    images: [],
    UserInfo: {}
};
const mutations = {
  setImages: (state, images) => (state.images = images),
  setUserInfo(state, payload){
    state.UserInfo = payload
  }
};
const getters = {
    allImages: (state) => state.images
};
const actions = {
    async fetchImages({commit}){
       
        const response = await axios
        .get('https://jsonplaceholder.typicode.com/photos',
        {
          params: {
            _limit: 20
           }
          }
        )
        commit('setImages',response.data);
    },
     registerU({},payload){
      fireApp.auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
      let uID = fireApp.currentUser.uid
      db.ref('users/'+uID).set({
        name: payload.name,
        email: payload.email,
      })
      })
      .catch(err => { console.log(err)}
      )
    },
    login({},payload){
      fireApp.auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      
      .then(res => {
        this.$router.push('/')
      })
      .catch(err => { console.log(err)}
      )
    },
    handleAuthStateChanged({commit}){
      fireApp.auth().onAuthStateChanged(user=>{
        if(user){
          let userId = fireApp.currentUser.uid
          db.ref('users/'+userId).once('value',snapshot =>{
            let UserInfo = snapshot.val()
            commit('setUserInfo',{
              name: UserInfo.name,
              email:UserInfo.email,
              userId: userId
            })
          })
          this.$router.push('/')
        }else{
          commit('setUserInfo',{})
          this.$router.replace('/login')
        }
      })
    },
    logout(){
      fireApp.auth().signOut();
      this.$router.replace('/login')
    }  
}
export default {
    state,getters,actions,mutations
};
