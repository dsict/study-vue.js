<template>
  <div>
    <button v-bind:class="$style.hand"> CSS Module을 적용한 버튼 </button>
    <!--v-bind 디렉티브로 class명을 바인딩-->
    <div :class="[$style.box, $style.border]">Hello World</div>
  </div>
</template>

<script>
export default {
    created() {
        console.log(this.$style);
    }
}
</script>

<style module>
/* CSS Module
CSS 스타일을 객체처럼 다루도록 함 */
  
.hand { cursor:pointer; background-color:purple; color:yellow; }
/* hand가 아닌 충돌 방지를 위한 고유의 클래스명을 사용하게됨 */
.box { width:100px; height:100px; background-color:aqua; }
.border { border:solid 1px orange; }
</style>