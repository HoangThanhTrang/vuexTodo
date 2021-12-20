<template>
  <p class="progress-bar ">Progress :{{progressBar}} %</p>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name :'progressBar',
    computed:mapGetters(['progressBar'])
}
</script>

<style>
.progress-bar {
 
  padding: 0 10px 10px 10px;
  text-align: center;
  background: rgb(192, 154, 157);
  color: black;
 
 
}
</style>