<template>
    <div class="black-bg" v-if="modal">
      <div class="white-bg">
        <img :src="products[press].image" class="room-img">
        <h4>{{ products[press].title }}</h4>
        <p>{{ products[press].content }}</p>
        <input @input="month = $event.target.value ? $event.target.value : 1">
        <p>{{month}}개월 선택시 {{ products[press].price * month}}원</p>

        <button @click="$emit('closeModal')">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
    name : 'Modal',
    props : {
      products : Array,
      press : Number,
      modal : Boolean,
    },
    data() {
      return {
        month : 1,
      }
    },
    watch : {
      month(value) { //month데이터를 감시
        // if (typeof value == 'string'){
        //   alert('입력하지마세요');
        // }
        if (value <= 2) {
          alert('할부는 3개월부터 가능합니다.');
          this.month = 3;
        }
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
.black-bg {
  width : 100%;
  height : 100%;
  background : rgba(0,0,0,0.5);
  position : fixed;
  padding : 20px;
}
.white-bg {
  width : 100%;
  background : white;
  border-radius : 8px;
  padding : 20px;
}
</style>