<template>
<div>
  <div class="header">
    <h1 class="headerText">(주) OpenSG</h1>
    <nav>
      <ul>
        <li>
          <a href="#" @click="changeMenu('home')">Home</a>
        </li>
        <li>
          <a href="#" @click="changeMenu('about')">About</a>
        </li>
        <li>
          <a href="#" @click="changeMenu('contact')">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="container">
    <keep-alive include="about,home">
        <!-- keep-alive: 캐싱 사용, about과 home에만 사용 -->
      <component v-bind:is="currentView"></component>
      <!-- v-bind 디렉티브를 이용해 is 특성값으로 어떤 컴포넌트를 그 위치에 나타낼지 결정 -->
    </keep-alive>
  </div>
</div>
</template>


<script>
// 사용할 컴포넌트 전부 임포트(참조)
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components : { Home, About, Contact },
  data() {
    return { currentView : 'home' }
  },
  methods : {
    changeMenu(view) {
      this.currentView = view;
    }
  }
}
</script>


<style scoped>
.header { background-color:aqua; padding: 10px 0px 0px 0px; }
.headerText { padding: 0px 20px 0px 20px; } 
ul { list-style-type: none; margin: 0; padding: 0;
    overflow: hidden; background-color: purple;  }
li { float: left; }
li a { display: block; color: yellow; text-align: center;
    padding: 14px 16px; text-decoration: none;  }
li a:hover { background-color: aqua; color:black; }
</style>