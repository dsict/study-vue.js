<!-- 
slot

html 태그가 포함된 문자열을 부모에서 자식으로 전달하기 위해 사용
콘텐츠 덩어리를 한 번에 전달 할 수 있어 props에 비해 편리
css class 스도 직접 지정할 수 있어 속성 작성과 관리가 편리

화면 레이아웃 구성 예제
-->

<template>
    <div id="pagewrap">
    <header>
        <slot name="header"></slot>
    </header>
    <aside id="sidebar">
        <slot name="sidebar"></slot>
    </aside>
    <section id="content">
        <slot name="content"></slot>
    </section>
    <footer>
        <slot name="footer"></slot>
    </footer>
    </div>
</template>

<style scoped>
/* 전체 구조 */
#pagewrap {
	padding: 5px;
	width: 960px;
	margin: 20px auto;
}
header {
	height: 100px;
	padding: 0 15px;
}
#content {
	width: 696px;
	float: left;
	padding: 5px 15px;
    min-height: 300px;
}
#sidebar {
	width: 200px;
	padding: 5px 15px;
	float: left;
}
footer {
	clear: both;
	padding: 0 15px;
}
/* 가로폭 980보다 작을 때 사용할 @media query */
@media screen and (max-width: 980px) {	
	#pagewrap {
		width: 94%;
	}
	#content {
		clear: both;
		padding: 1% 4%;
		width: auto;
		float: none;
	}
	#sidebar {
		clear: both;
		padding: 1% 4%;
		width: auto;
		float: none;
	}
	header, footer {
		padding: 1% 4%;
	}
}
/* 공통 */
#content {
	background: #f8f8f8;
}
#sidebar {
	background: #f0efef;
}
header, #content, #middle, #sidebar {
	margin-bottom: 5px;
}
#pagewrap, header, #content, #middle, #sidebar, footer {
	border: solid 1px #ccc;
}
</style>