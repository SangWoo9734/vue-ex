import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt' //멀리떨어져있는 컴포넌트로도 데이터 전송 가능
import store from './store.js' // 모든 컴포넌트가 store 안에있는 state를 공유함
import './registerServiceWorker'

let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

app.use(store).mount('#app')
