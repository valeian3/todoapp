import { useState } from "react";

import Modal from "ui-components/Modal";

import { useModalContext, useTodoContext } from "lib/hooks";

import { SENSITIVE_WORDS } from "lib/constants";

export default function Footer() {
  const { todos, addTodo } = useTodoContext();
  const { modalOpen, setModalOpen } = useModalContext();
  const [modalAlertOpen, setModalAlertOpen] = useState<boolean>(false);
  const [todoContent, setTodoContent] = useState<string>("");

  const confirmSubmission = () => {
    const form = document.getElementById("myForm") as HTMLFormElement;
    if (form) {
      form.submit();
    }
    setModalOpen(false);
  };

  const cancelSubmission = () => {
    setTodoContent("");
    setModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (SENSITIVE_WORDS.includes(todoContent.toLocaleLowerCase())) {
      setModalAlertOpen(true);
      return;
    }

    addTodo(todoContent);
    setTodoContent("");
    setModalOpen(false);
  };

  const handleCloseAlert = () => {
    setModalAlertOpen(false);
  };

  return (
    <>
      <div className="flex justify-between mt-4">
        {!todos.length ? (
          ""
        ) : (
          <button
            type="button"
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            onClick={() => setModalOpen(true)}
            className="text-blue-700 dark:text-blue-500 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center"
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
        )}

        {/* TODO: feature, implement lists */}
        {/* <button
          type="button"
          className="text-blue-700 dark:text-blue-500 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center"
        >
          Add List
        </button> */}
      </div>

      {/* New task modal*/}
      <Modal
        title="New Task"
        actions={{
          confirm: {
            text: "Confirm",
            action: confirmSubmission,
            form: "newTaskForm",
          },
          cancel: {
            text: "Cancel",
            action: cancelSubmission,
          },
        }}
        position="bottom"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className="relative w-full max-w-md max-h-full">
          <form
            id="newTaskForm"
            autoComplete="off"
            className="space-y-4 flex justify-center items-center flex-col"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="title"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm max-w-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Title"
              required
              autoFocus
              value={todoContent}
              onChange={(e) => {
                setTodoContent(e.target.value);
              }}
              aria-hidden
            />
          </form>
        </div>
      </Modal>

      {/* Alert, sensitive word modal*/}
      <Modal
        title="Alert"
        actions={{
          confirm: {
            text: "OK",
            action: handleCloseAlert,
          },
          cancel: {
            text: "",
          },
        }}
        open={modalAlertOpen}
        onClose={() => setModalAlertOpen(false)}
      >
        <p className="text-slate-600 dark:text-slate-200">
          Please do not use sensitive information such as {todoContent}!
        </p>
      </Modal>
    </>
  );
}
