<template>

  <q-page class="flex">
    
  <div class="q-pa-md row items-start q-gutter-md" v-for="image in allImages" :key="image.id">
        <q-card class="my-card">
          <img :src="image.thumbnailUrl">

          <q-card-section>
            <div class="text-h6">{{ image.title }}</div>
            
          </q-card-section>

          <q-card-section class="q-pt-none">
            <a :href="image.url">{{image.url}}</a>
          </q-card-section>
        </q-card>
  </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
 name:"Images",
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
    methods: {
            ...mapActions(['fetchImages'])
        },
        computed: mapGetters(["allImages"]),
        created(){
            try {
            this.fetchImages();
            
             } catch (error) {
            console.log(error)
            }   
        }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>