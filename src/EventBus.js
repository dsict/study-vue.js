import Vue from 'vue';
var eventBus = new Vue();
export default eventBus;

/* event Bus?
부모-자식 관계가 아닌 컴포넌트 사이 끼리도 정보전달이 가능하도록
비어있는 vue 인스턴스 객체를 이용하는 것 */