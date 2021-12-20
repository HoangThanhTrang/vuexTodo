<template>
 <div id="app">
   <todo />
   <progressBar />
 </div>
</template>

<script>
import todo from './components/todo.vue'
import progressBar from './components/progressBar.vue'
export default {
  name: 'App',
  components:{todo,progressBar}
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
