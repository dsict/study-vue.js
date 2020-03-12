<!-- 공용 스타일 시작-->
 <style>
* {  box-sizing: border-box;  }
.header {
    background-color: purple; padding: 30px 30px;
    color: yellow; text-align: center;
}
.header:after {
    content: ""; display: table; clear: both;
}
</style>
<!-- 공용 스타일 끝-->

<template>
    <div id="todolistapp">
        <div id="header" class="header">
            <h2>Todo List App</h2>
            <input-todo></input-todo>
        </div>
        <list></list>
    </div>    
</template>

<script type="text/javascript">
import InputTodo from './components/InputTodo';
import List from './components/List';

export default {
    name: 'todo-list',
    components: {InputTodo, List}
}
</script>