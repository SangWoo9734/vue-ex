import axios from 'axios';
import { createStore } from 'vuex'

const store =createStore({
    state(){
        return { //state를 이 아래부터 저장
            name : "kim",
            age : 20,
            likes : [0, 0, 0],
            more : {}
        }
    },
    mutations : {
        setMore(state, data) {
            state.more = data;
        },
        rename(state) {
            state.name = 'park';
        },
        older(state){
            state.age++;
        },
        liked(state, payload) {
            if (payload[1]== 0) state.likes[payload[0]]++;
            else state.likes[payload[0]]--;
            
        },
    },
    actions : {
        getData(context) {
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
            .then((result) => {
                context.commit('setMore', result.data)
            })
        }
    }
})

export default store