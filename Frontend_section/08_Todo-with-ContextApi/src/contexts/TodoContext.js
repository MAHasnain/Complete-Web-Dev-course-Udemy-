import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo",
      isComplete: false,
    },
  ],

  addTodo: ()=> {},
  updateTodo: ()=> {},
  deleteTodo: ()=> {},
  toggleCompTodo: ()=> {},

});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
