import { FC, useState } from "react";
import { useTodoContext } from "lib/hooks";

import { Todo } from "lib/types";

interface TodoItemProps {
  todo: Todo;
}

type InputEdit = "" | "content";

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { deleteTodo, toggleTodoCompletion, editTodo } = useTodoContext();

  const [edit, setEdit] = useState<InputEdit>("");
  const [editedContent, setEditedContent] = useState<string>(todo.content);

  const handleSave = (type: "content") => {
    switch (type) {
      case "content":
        if (editedContent.trim()) {
          editTodo(todo.id, editedContent.trim());
        } else {
          deleteTodo(todo.id);
        }
        setEdit("");
        break;
      default:
        return;
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    type: "content"
  ) => {
    switch (e.key) {
      case "Enter":
        switch (type) {
          case "content":
            handleSave("content");
            break;
          default:
            return;
        }
        break;
      case "Escape":
        switch (type) {
          case "content":
            setEditedContent(todo.content);
            setEdit("");
            break;
          default:
            return;
        }
        break;
    }
  };

  return (
    <div className="flex justify-between mb-4 rounded-2xl py-2 px-4 bg-slate-50 dark:bg-slate-600 transition-colors duration-100">
      <div className="flex flex-col justify-center">
        <div className="flex items-center">
          <label className="flex items-center cursor-pointer relative">
            <input
              id={todo.id.toString()}
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoCompletion(todo.id)}
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-slate-300 checked:bg-green-600 checked:border-green-600"
            />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>

          {edit === "content" ? (
            <input
              type="text"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              onBlur={() => handleSave("content")}
              onKeyDown={(e) => handleKeyDown(e, "content")}
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
              onClick={todo.completed ? undefined : () => setEdit("content")}
            >
              {todo.content}
            </label>
          )}
        </div>
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
