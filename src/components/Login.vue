<template>

  <div class="full-width" >
      <q-form @submit="submitData">
          <q-input color="primary" v-model="form.name" v-if="$route.path == '/register'"  label="Name">
                <template v-slot:append>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
                </template>
            </q-input>
            <q-input type="email" color="primary" v-model="form.email" label="Email">
                <template v-slot:append>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
                </template>
            </q-input>
             <q-input type="Password" color="primary" v-model="form.password" label="Password">
                <template v-slot:append>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
                </template>
            </q-input>
            <div class="text-center q-pt-sm">
            <q-btn type="submit" :label="label_n">   
            </q-btn></div>
      </q-form>
    </div>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
    computed:{
        label_n(){
    const labels = this.$route.path
    if(labels == '/login') return 'Login'
    else return 'Register'
    }
    },
 data () {
    return {
      form:{
          name:'',
          email:'',
          password:''
      }
    }
  },
  methods:{
      ...mapActions('images',['registerU']),
      submitData(){
          if(this.$route.path == '/login'){
              this.$store.dispatch('login',this.form);
          }else if(this.$route.path == '/register'){
             // this.registerU()
              this.$store.dispatch('registerU',this.form);
          }
      }
  }
}
</script>

<style>

</style>