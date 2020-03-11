<template>
<!--차이점1. template에 id 특성 미부여 -->
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//다른 컴포넌트 참조시 import 사용하고 반드시 객체를 explort해야함
export default {
  name: 'app',
  //name 속성 지정 가능
  components: {
    HelloWorld
  }
  // 차이점2. vue 컴포넌트의 template 미지정
}
</script>

<style>
  body{ text-align:center; }
</style>



<!--
    단일 컴포넌트의 문제점
    > 빌드가 없음 - EX6, TypeScript 지원 불가
    > CSS 미지원
    > 하나의 파일에 여러개의 <template />이 작성되어 식별이 어려움

    vue-loader
    > .vue 파일에서 <template />, <script />, <style />을 파싱하고 다른 로더들을 활용해 하나의 모듈로 조합
    > css-loader로 css 전처리 및 스타일 정보 모듈화 할 수 있음
-->