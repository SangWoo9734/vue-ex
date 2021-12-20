<template>
  <div @click="changeFilter" :class="`${filter} filter-item`" :style="`background-image : url(${imgUrl})`">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name : 'filter',
    props : {
        imgUrl : String,
        filter : String,
    },
    methods : {
        changeFilter() {        
            this.emitter.emit('filter', this.filter)
        }
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>