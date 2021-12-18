<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      
      <a class="navbar-brand" href="#"><img alt="Vue logo" src="./assets/logo.png" style="width:40px;margin:0 10px">Vuelog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link">List</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="mt-4">
    <router-view :blog="blog"></router-view>
  </div>

</template>

<script>
import blog from "./assets/blog.js";

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      blog : blog,
    }
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
}
</style>
