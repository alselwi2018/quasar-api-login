<template>
<div class="fixed-center">
    <div class="q-pa-md full-width">
        <h3>{{$route.path.replace('/','')}}</h3>
    <login />
  </div>
</div>
</template>
<script>
export default {
 components:{
     'login': require('components/Login.vue').default
 },
 props:['$route.path']
}
</script>