<template>
  <div v-for="(text, i) in blog" :key="i">
    <p>{{text.number}}</p>
    <h5><router-link to="/detail" class="nav-link" aria-current="page">{{text.title}}</router-link></h5>
    <p>{{text.date}}</p>
  </div>
</template>

<script>

export default {
  name : 'List',
  props : {
    blog : Array,
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>