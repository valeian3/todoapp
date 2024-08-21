import { FC } from "react";
import { useTodoContext } from "../lib/hooks";

import { Todo } from "../lib/types";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { deleteTodo, toggleTodoCompletion } = useTodoContext();

  return (
    <div className="flex justify-between mb-2">
      <div className="flex justify-center items-center">
        <input
          id={todo.id.toString()}
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodoCompletion(todo.id)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor={todo.id.toString()}
          className={`ml-4 ${
            todo.completed ? "line-through" : "no-underline"
          } "ms-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
        >
          {todo.content}
        </label>
      </div>

      <button
        type="button"
        className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-800"
        onClick={() => deleteTodo(todo.id)}
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
