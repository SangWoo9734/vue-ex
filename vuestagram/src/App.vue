<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="tab = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li  v-if='tab != 2' @click="tab++">Next</li>
      <li  v-if='tab == 2' @click="publish">Publi</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :contents='contents' :tab='tab' :imgUrl="imgUrl" @text='newText = $event'/>

  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
import Container from './components/Container.vue';
import posts from './assets/data.js';
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      contents : posts,
      morePost : 0,
      tab : 0,
      imgUrl : '',
      newText : '',
    }
  },
  components: {
    Container : Container,
  },
  methods : {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.morePost}.json`).then((result) => {
        this.contents.push(result.data);
        this.morePost += 1
      })
    },
    upload(e) {
      let f = e.target.files;
      this.imgUrl = URL.createObjectURL(f[0]);
      this.tab = 1;
    },
    publish() {
      
      var newPost = {
      name: "WooPark",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.imgUrl,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.newText,
      filter: "perpetua"
    }
      this.contents.unshift(newPost);
      this.tab = 0;
      this.newText = '';
      this.imgUrl = '';
    }
  }
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
