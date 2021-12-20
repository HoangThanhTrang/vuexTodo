<template>
  <div class="todo-list">
      <h1>Trang nè</h1>
      <p>Total todos : {{todos.length}}</p>
      <form @submit="onSubmit" class="input_group">
        <input type="text" v-model="title">
        <button type="submit">Add</button>
      </form>

      <ul>
          <li v-for="todo in todos" :key="todo.id" :class="todo.completed ? 'completed' :''">
              {{todo.title}}
              <input type="checkbox" :checked = "todo.completed" @change="markCompleted(todo.id)">
              <button @click="deleteTodo(todo.id)">Delete</button>
          </li>
      </ul>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid'
export default {
    name:'todo',
    data(){
       return{
           title:''
       }
    },
    
    computed:{
        todos(){
            return  this.$store.state.todos
        },
        
    },
    methods:{
       markCompleted(todoId){
           this.$store.commit('MARK_COMPLETE',todoId)
       },
       deleteTodo(todoId){
           this.$store.dispatch('deleteTodo',todoId)
       },
       addTodo(newTodo){
            this.$store.dispatch('addTodo',newTodo)

       },
       onSubmit(event){
        //bỏ hành động mặc định của submit đi
        event.preventDefault()
        this.addTodo({
            id:uuidv4(),
            title:this.title,
            completed:false
        })
    },
    }
}
</script>

<style>
.input_group{
    padding: 10px;
}
h1{
    text-align: center;
}
p{
 padding: 10px;

}
.todo-list ul {
 padding: 0 10px 10px 10px;
 list-style-type: none;
}

.todo-list li {
 padding: 10px;
 cursor: pointer;
 margin: 10px 0;
 border-radius: 4px;
 background: rgb(240, 240, 240);
 color: black;
}
.todo-list li input[type='checkbox'] {
    padding: 10px;
    float: right;
    transform: scale(2);
}
.todo-list li.completed{
    text-decoration: line-through;
    color: gray;
}
.todo-list li button {
 float: right;
 margin-right: 20px;

}

.todo-list li button:hover {
 cursor: pointer;
 background: rgb(224, 197, 197);
 color: white;
 border: none;
}
</style>