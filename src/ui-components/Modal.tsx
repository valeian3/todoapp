import React from "react";

type ModalProps = {
  title: string;
  actions: {
    confirm: {
      text: string;
      action?: () => void | null;
      form?: string;
    };
    cancel: {
      text: string;
      action: () => void;
    };
  };
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ title, actions, open, onClose, children }: ModalProps) {
  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      onClick={onClose}
      aria-hidden="true"
      className={`fixed inset-0 flex justify-center items-end transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full h-auto bg-white rounded-xl shadow transition-all duration-200 dark:bg-gray-700 ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-full scale-90 opacity-0"
        } `}
      >
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <button
            type="button"
            onClick={actions.cancel.action}
            className="text-blue-700 dark:text-blue-500 font-medium rounded-lg text-base  text-center inline-flex items-center"
          >
            {actions.cancel.text}
          </button>
          <h3 className="text-lg font-medium text-slate-600 dark:text-slate-200">
            {title}
          </h3>
          <button
            type="submit"
            form={actions.confirm.form}
            onClick={actions.confirm.form ? () => {} : actions.confirm.action}
            className="text-blue-700 dark:text-blue-500 font-medium rounded-lg text-base  text-center inline-flex items-center"
          >
            {actions.confirm.text}
          </button>
        </div>
        <div className="p-6 flex justify-center">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
