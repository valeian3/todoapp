import { useTodoContext } from "../lib/hooks";
import { Todo } from "../lib/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  const { query } = useTodoContext();

  if (todos.length === 0)
    return (
      <p className="mx-2 text-slate-500 dark:text-slate-200">
        Start by adding new todo to your list
      </p>
    );
  return (
    <>
      {todos
        .filter((item) =>
          query.toLowerCase() === "" ? item : item.content.includes(query)
        )
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </>
  );
}
