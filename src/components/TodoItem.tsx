import { FC } from "react";
import { useTodoContext } from "../lib/hooks";

import { Todo } from "../lib/types";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { deleteTodo, toggleTodoCompletion } = useTodoContext();

  return (
    <div className="flex justify-between mb-4 rounded-2xl py-2 px-4 mx-2 shadow-md bg-slate-50 dark:bg-slate-600">
      <div className="flex justify-center items-center">
        <input
          id={todo.id.toString()}
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodoCompletion(todo.id)}
          className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor={todo.id.toString()}
          className={`ml-4 ${
            todo.completed
              ? "line-through text-slate-400 dark:text-slate-400"
              : "no-underline"
          } "ms-2 text-base pb-1 text-slate-600 dark:text-slate-300`}
        >
          {todo.content}
        </label>
      </div>

      <button
        type="button"
        className="bg-grey-600 hover:bg-grey-400 p-2.5"
        onClick={() => deleteTodo(todo.id)}
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="red"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-1 14H6L5 7m5 4v6m4-6v6m1-8V6a1 1 0 00-1-1h-4a1 1 0 00-1 1v1M4 7h16"
          />
        </svg>

        <span className="sr-only">Delete trash icon</span>
      </button>
    </div>
  );
};

export default TodoItem;
