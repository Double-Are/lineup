import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import DetailList from './components/DetailList.vue'
import Search from './components/Search.vue'
import Mentions from './components/Mentions.vue'
import Lists from './components/Lists.vue'
import Profile from './components/Profile.vue'
import SearchList from './components/SearchList.vue'
import AddToList from './components/AddToList.vue'
import Message from './components/Message.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

// const Bar = { template: `
//   <div id="app">
//     <router-view></router-view>
//   </div>
// ` }

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/mentions', component: Mentions },
  { path: '/lists', component: Lists },
  { path: '/profile', component: Profile },
  { path: '/searchlist', component: SearchList },
  { path: '/addtolist', component: AddToList },
  { path: '/message', component: Message },
  { path: '/message/:username', component: Message },
  { 
    path: '/detaillist/:id', 
    component: DetailList, 
    props: { category: {}, listofUsers: {} }
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
