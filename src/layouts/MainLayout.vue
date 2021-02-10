<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="flex">
          
          <q-btn  
          v-go-back="'/'"
           :icon="arrow"  /><div class="q-pa-sm">{{title}}</div>
        </q-toolbar-title>
        <q-space ></q-space>
          <div v-if="!UserInfo">
            <q-btn flat round dense to="/register" label="Register" class="q-mr-xs" />
            <q-btn flat round dense to="/login" class="text-white" label="Login" />
          </div>
        <div v-else>
          <q-btn flat round dense @click="logoutUser"  class="text-white" label="Logout" />
        </div>
        <!-- <div class="absolut-right q-pr-sm">
          <q-breadcrumbs v-if="!UserInfo" >
            <q-breadcrumbs-el to="/register" class="text-white" label="Register" />
            <q-breadcrumbs-el  to="/login" class="text-white" label="Login" />
            <q-breadcrumbs-el label="Breadcrumbs" />
          </q-breadcrumbs>
          <q-breadcrumbs v-else >
            
            <q-breadcrumbs-el @click="logout"  class="text-white" label="Logout" />
            <q-breadcrumbs-el label="Breadcrumbs" />
          </q-breadcrumbs>
        </div> -->
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { mapActions, mapState} from 'vuex'
import {fireApp,dataAuth,db} from 'boot/database-quasar'
export default {
  computed:{
    
        title(){
      const path = this.$route.path
      if(path == '/') return 'Images Forum'
      else if(path == '/login') return 'Login'
      else if(path == '/register') return 'Register'
        },
        arrow(){
          const arrow = this.$route.path
          if(arrow == '/') return ''
          else return 'arrow_back'
        },
  },
  data () {
    return {
      icon:[
        {
          arrow:false
        }
      ]
      
      }
    },
    methods:{
      ...mapActions('images',['logout']),
     ...mapState('images',['UserInfo']),
     logoutUser(){
        fireApp.auth().signOut();
        this.$router.replace('/login')
     }
    }
}
</script>
