import Vue from 'vue'
// 원래 있던 코드
// import App from './App.vue'
// import router from './router'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')


//App.vue 컴포넌트를 화면에 담기위해서 사용
//App 컴포넌트를 렌더링한 결과물을 #app 요소에 출력


// todo list 
import TodoList from './components/TodoList.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(TodoList)
}).$mount('#app')