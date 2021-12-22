import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

const storeData = {
    state :{
        todos:[
            {id:1,title:'Viec1',completed:false},
            {id:2,title:'Viec2',completed:false},
            {id:3,title:'Viec3',completed:false},
        ]
    },
    getters:{
        
        progressBar: state => {
            const doneTodos = state.todos.filter(todo => todo.completed)
            return Math.round(doneTodos.length / state.todos.length*100)
        }
    },
    actions:{
        deleteTodo(context,todo){
            context.commit('DELETE_TODO',todo)
        },
        addTodo(context,newTodo){
            context.commit('ADD_TODO',newTodo)
        },
       
        
    },
    mutations:{
        //Hàm khi tick vào checkbox nó sẽ tự động thay đổi trạng thái true or false
        MARK_COMPLETE(state,todoId){
            state.todos.map(todo => {
                if(todo.id == todoId) todo.completed = !todo.completed
                return todo
            })
        },
        DELETE_TODO(state,todo){
            const todoIndex = state.todos.indexOf(todo)
            state.todos.splice(todoIndex, 1)
        },
         ADD_TODO(state,newTodo){
            state.todos.push(newTodo)
            
         },
         
    }
}

const store = new Vuex.Store(storeData)

export default store