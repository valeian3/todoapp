import { createContext, PropsWithChildren, useMemo, useState } from "react";

import { useLocalStorage } from "../lib/hooks";
import { getMaxIdFromList } from "../lib/utils";

import type { Todo } from "../lib/types";

type TodoContext = {
  todos: Todo[];
  addTodo: (content: string) => void;
  toggleTodoCompletion: (id: number) => void;
  editTodo: (id: number, newContent: string) => void;
  deleteTodo: (id: number) => void;
  countCompletedTodos: number;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const TodoContext = createContext<TodoContext | undefined>(undefined);

const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [query, setQuery] = useState<string>("");

  const addTodo = (content: string) => {
    setTodos((prev) => {
      const maxId = getMaxIdFromList(prev);

      return [
        ...prev,
        {
          id: maxId + 1,
          content: content,
          completed: false,
        },
      ];
    });
  };

  const editTodo = (id: number, newContent: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, content: newContent } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoCompletion = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const countCompletedTodos = useMemo(
    () => todos.filter((todo) => !todo.completed).length,
    [todos]
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        countCompletedTodos,
        toggleTodoCompletion,
        editTodo,
        deleteTodo,
        query,
        setQuery,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
