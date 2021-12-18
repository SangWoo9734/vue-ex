<template>
  <div>

    <!-- <div class="start" :class="{end : modal}"> -->
    <transition name="fade">
      <Modal @closeModal="modal = 0" :press ="press" :modal ="modal" :products ="products"/>
    </transition>
    <!-- </div> -->
    
    <div class="menu">
      <a v-for="m in menus" :key="m">{{ m }}</a>
    </div>

    <Discount v-if="showDiscount" :discount="discount"/>

    <button class="room-sort" @click="reset">등록 순 정렬</button>
    <button class="room-sort" @click="priceSort">가격 순 정렬</button>
    <button class="room-sort" @click="titleSort">제목 순 정렬</button>

    <Card @openModal="modal = 1; press=$event" v-for="(r, i) in products" :key="i" :room="products[i]"/>

  </div>


</template>

<script>
import room from "./assets/data.js"
import Discount from "./Discount.vue"
import Modal from "./Modal.vue"
import Card from "./Card.vue"

export default {
  name: 'App',
  data() {
    return {
      showDiscount : true,
      discount : 30,
      press : 0,
      modal : 0,
      menus : ['HOME', 'PRODUCTS', 'ABOUT'],
      price : [60, 70, 80],
      products : room,
      // productsOrigin : [...room],
      fakeproducts : [0, 0, 0, 0, 0, 0],
    }
  },
  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
  },

  mounted() {
    var inter = setInterval(() => {
      this.discount--;

      if (this.discount == 0) clearInterval(inter);
    }, 1000)
  },

  // mounted() {
  //   setTimeout(() => {
  //     this.showDiscount = false;
  //   }, 2000)
  // },

  methods : {
    increase(n) {
      this.fakeproducts[n]++;
    },
    priceSort() {
      this.products.sort(function(a, b){
        return a.price - b.price
      })
    },
    titleSort() {
      this.products.sort(function(a, b){
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
        if (a.title == b.title) return 0
      })
    },
    reset() {
      // this.products = [...this.productsOrigin]
      this.products.sort(function(a, b){
        return a.id - b.id
      })
    }
  }
  
}
</script>

<style>
body {
  margin : 0;
}
div {
  box-sizing : border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition : all 1s;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translateY(-1000px);
}

.fade-enter-active {
  transition : all 1s;
}

.fade-enter-to {
  transform: translateY(0px);
}

.room-sort {
  margin : 20px 5px 0 5px;
  width : 32%;
  height : 40px;
}

.start {
  opacity: 0;
  transition : all 1s;
}

.end {
  opacity: 1;
  transition : all 0.5s;
}

.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius: 5px;
}

.menu a {
  color : white;
  padding : 10px;
}
.room-img {
  width : 100%;
  margin-top : 40px;
}


</style>
