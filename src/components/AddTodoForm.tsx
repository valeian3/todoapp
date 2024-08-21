import { useState } from "react";
import { useTodoContext } from "../lib/hooks";

export default function AddTodoForm() {
  const [todoContent, setTodoContent] = useState<string>("");
  const { addTodo } = useTodoContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        addTodo(todoContent);
        setTodoContent("");
      }}
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="task"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          New task
        </label>
        <input
          type="text"
          autoFocus
          name="task"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="shopping..."
          required
          value={todoContent}
          onChange={(e) => {
            setTodoContent(e.target.value);
          }}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 md:text-sx">
          New task
        </button>
      </div>
    </form>
  );
}
