import React from "react";

interface ModalProps {
  title: string;
  actions: {
    confirm: {
      text: string;
      action?: () => void | null;
      form?: string;
    };
    cancel: {
      text: string;
      action?: () => void | null;
    };
  };
  position?: "top" | "center" | "bottom";
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// TODO: adjust padding on actions and children on centered modal, make it dynamic based on position
function Modal({
  title,
  actions,
  position = "center",
  open,
  onClose,
  children,
}: ModalProps) {
  let modalPosition: "items-start" | "items-center" | "items-end";
  let modalBorderRadius: "rounded-t-xl" | "rounded-b-xl" | "rounded-xl";
  let modalWidth: "w-full" | "w-3/4" = "w-full";

  switch (position) {
    case "top":
      modalPosition = "items-start";
      modalBorderRadius = "rounded-b-xl";
      break;
    case "center":
      modalPosition = "items-center";
      modalBorderRadius = "rounded-xl";
      modalWidth = "w-3/4";
      break;
    case "bottom":
      modalPosition = "items-end";
      modalBorderRadius = "rounded-t-xl";
      break;
    default:
      modalPosition = "items-center";
      modalBorderRadius = "rounded-xl";
      break;
  }
  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      onClick={onClose}
      aria-hidden="true"
      className={`fixed inset-0 flex justify-center ${modalPosition} transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${modalWidth} tablet:w-3/5 laptop:w-2/5 desktop:w-96 h-auto bg-white ${modalBorderRadius} shadow transition-all duration-200 dark:bg-gray-700 ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-full scale-90 opacity-0"
        } `}
      >
        <div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600">
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
            onClick={actions.confirm.form ? undefined : actions.confirm.action}
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
