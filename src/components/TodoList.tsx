import { Todo } from "../lib/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  if (todos.length === 0)
    return (
      <p className="m-0 text-gray-900 dark:text-white">
        Start by adding new todo to your list
      </p>
    );
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
