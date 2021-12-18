<template><div>

    <div>
      <img :src="room.image" class="room-img">
      <h4 @click="$emit('openModal', room.id)">{{ room.title }}</h4>
      <p>{{ room.price }} 만원</p>
    </div>

</div></template>

<script>
export default {
    name : "Card",
    props : {
        room : Object,
    }
}
</script>

<style>
    
</style>