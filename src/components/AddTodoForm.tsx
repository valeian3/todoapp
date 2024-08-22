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
      <div className="flex flex-row gap-2 mb-8 mt-4">
        <div className="flex items-center border-b border-gray-500 py-1 w-full">
          <input
            aria-label="Add new task"
            name="task"
            type="text"
            required
            autoFocus
            placeholder="Add new task"
            value={todoContent}
            onChange={(e) => {
              setTodoContent(e.target.value);
            }}
            className="appearance-none bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none text-slate-600 placeholder:text-slate-600 dark:text-slate-200 dark:placeholder:text-slate-200"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 md:text-sx">
          Add
        </button>
      </div>
    </form>
  );
}
