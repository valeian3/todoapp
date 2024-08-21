import { useTodoContext } from "../lib/hooks";

export default function Header() {
  const { todos, countCompletedTodos } = useTodoContext();
  return (
    <div className="flex justify-between items-center px-6 py-6 border-b-2 border-y-primary dark:border-y-slate-700 dark:text-white text-gray-900">
      <h2>TODO APP</h2>
      <p>
        <strong>{countCompletedTodos}</strong> / {todos.length} todos completed
      </p>
    </div>
  );
}
