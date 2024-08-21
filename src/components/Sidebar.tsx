import AddTodoForm from "./AddTodoForm";

export default function Sidebar() {
  return (
    <div className="w-full p-6 border-l-0 border-l-primary dark:border-l-slate-700 md:order-1 md:w-2/6 md:border-l-2">
      <AddTodoForm />
    </div>
  );
}
