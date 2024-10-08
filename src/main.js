import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import store from './store/store'
import { createPinia } from 'pinia'

// 사용할 아이콘 불러오기
import { faBars, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const pinia  = createPinia();

// 아이콘 등록하기
library.add(faBars, faLocationDot, faMagnifyingGlass);

createApp(App)
    .use(pinia)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
