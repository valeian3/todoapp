import { useTodoContext } from "../lib/hooks";

export default function Footer() {
  const { countCompletedTodos } = useTodoContext();
  return (
    <>
      <p className="italic mt-4 text-slate-600 dark:text-slate-200">
        Your remaining todos: {countCompletedTodos}
      </p>
    </>
  );
}
