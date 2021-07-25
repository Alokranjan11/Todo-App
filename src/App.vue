<template>
     <div>
       <!-- <h1>vuejs practice</h1> -->
       <!-- <hello-world></hello-world> -->
       <!-- <Todo></Todo> -->
       <!-- <khata></khata> -->
     </div>
      <router-view></router-view>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Todo from './components/Todo.vue'
// import Khata from './components/Khata.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    // Todo
    // Khata
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
