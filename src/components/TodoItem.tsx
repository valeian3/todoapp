import { FC, useState } from "react";
import { useTodoContext } from "../lib/hooks";

import { Todo } from "../lib/types";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { deleteTodo, toggleTodoCompletion, editTodo } = useTodoContext();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedContent, setEditedContent] = useState<string>(todo.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedContent.trim()) {
      editTodo(todo.id, editedContent.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setEditedContent(todo.content);
    }
  };

  return (
    <div className="flex justify-between mb-4 rounded-2xl py-2 px-4 shadow-md bg-slate-50 dark:bg-slate-600 transition-colors duration-100">
      <div className="flex justify-center items-center">
        <input
          id={todo.id.toString()}
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodoCompletion(todo.id)}
          className={`w-4 h-4 cursor-pointer text-green-600 bg-gray-100 border-gray-300 rounded-full focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 
    appearance-none checked:bg-green-600 checked:border-transparent 
       `}
        />

        {isEditing ? (
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="ml-4 mb-1 bg-transparent outline-none dark:text-slate-300"
            autoFocus
          />
        ) : (
          <label
            className={`ml-4 ${
              todo.completed
                ? "line-through text-slate-400 dark:text-slate-400"
                : "no-underline text-slate-600 dark:text-slate-300 cursor-pointer"
            } text-base pb-1`}
            onClick={todo.completed ? undefined : handleEdit}
          >
            {todo.content}
          </label>
        )}
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
