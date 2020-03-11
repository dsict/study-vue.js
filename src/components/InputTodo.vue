<style>
    .input {
        border: none; width: 75%; height:35px; padding: 10px;
        float: left; font-size: 16px;
    }
    .addbutton {
        padding: 10px; width: 25%; height:35px; background: #d9d9d9; 
        color: #555; float: left; text-align: center;
        font-size: 13px; cursor: pointer; transition: 0.3s;
    }
    .addbutton:hover { background-color: #bbb; }
</style>

 <template id="input-template">
        <div>
            <input class="input" type="text" id="task" v-model.trim="todo" 
                placeholder="입력 후 엔터!" v-on:keyup.enter="addTodo">
            <span class="addbutton" v-on:click="addTodo">추 가</span>
        </div>    
</template>
    
<script type="text/javascript">
import eventBus from '../EventBus'
// 이벤트를 등록하고 발생시키기 위해서 EventBus 객체를 import한 후에 $on, $emit 메서드를 사용

export default {
    name: 'input-todo',
    data : function() {
        return { todo : "" }
    },
     methods : {
        addTodo : function() {
            eventBus.$emit('add-todo', this.todo);
            // 이벤트 발생
            this.todo = "";
        }
    }
}
</script>