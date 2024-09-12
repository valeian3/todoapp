import { useModalContext, useTodoContext } from "lib/hooks";

import TodoItem from "components/TodoItem";

import { Todo } from "lib/types";

import emptyListIcon from "assets/empty-checklist-icon.png";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  const { query } = useTodoContext();
  const { setModalOpen } = useModalContext();

  if (!todos.length)
    return (
      <div className="w-full h-full flex gap-4 flex-col items-center justify-center">
        <img src={emptyListIcon} alt="Empty list icon" className="h-2/5" />
        <span className="text-slate-500 dark:text-slate-200">
          Task list is empty
        </span>
        <button
          type="button"
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          onClick={() => setModalOpen(true)}
          className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none inline-flex items-center"
        >
          <svg
            className="w-5 h-5 me-2"
            fill="currentColor"
            viewBox="0 0 1024 1024"
          >
            <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
          </svg>
          <p className="mb-[3px]">New Task</p>
        </button>
      </div>
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
