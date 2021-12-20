<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" @input="search($event.target.value);"/>
    <div class="post-header" v-for="profile in follower" :key="profile" >
      <div class="profile" :style="`{background-image : url(${profile.image})}`"></div>
      <span class="profile-name">{{ profile.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "mypage",

  setup() { // 데이터 생성, 조작, methods, computed... 전부 한 곳에서 개발 가능
    let followerOrigin = ref([]);
    let follower = ref([]);
    // let text = reactive({ name : 'kim'});
    let word = ref('');
    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        followerOrigin.value = a.data;
        follower.value = a.data;
      });
    });

    let search = ((word) => {
        if (word ) follower.value = follower.value.filter(f => f.name.includes(word));
        else follower.value = followerOrigin.value;
    })

    return { follower, word, search };
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>