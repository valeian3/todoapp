import { useState } from "react";
import { useTodoContext } from "../lib/hooks";

import { MAX_FREE_TODOS, SENSITIVE_WORDS } from "../lib/constants";

const DeprecationNotice = () => (
  <div className="bg-yellow-200 p-4 border border-yellow-500 rounded">
    <p className="text-yellow-800">
      Warning: The `AddTodoForm` component is deprecated and will be removed in
      a future release. Please use the new `Modal` with form component instead.
    </p>
  </div>
);

/**
 * @deprecated This component is no longer in use and may be removed in a future release.
 * Please use the new Modal with form instead.
 */

export default function AddTodoForm() {
  console.warn(
    "Warning: AddTodoForm component is deprecated and may be removed in a future release. Please use the new AddTodoForm instead."
  );

  const [todoContent, setTodoContent] = useState<string>("");
  const { todos, addTodo } = useTodoContext();

  return (
    <>
      <DeprecationNotice />

      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();

          if (SENSITIVE_WORDS.includes(todoContent.toLocaleLowerCase())) {
            alert(
              `Please do not use sensitive information such as ${todoContent}!`
            );
            return;
          }

          if (todos.length === MAX_FREE_TODOS) {
            alert(
              `You need to sign in to add more then ${MAX_FREE_TODOS} todos`
            );
            return;
          }

          addTodo(todoContent);
          setTodoContent("");
        }}
      >
        <div className="flex flex-row gap-2 mb-8 mt-4 mx-2">
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
    </>
  );
}
