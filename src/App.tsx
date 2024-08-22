import AddTodoForm from "./components/AddTodoForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

import { useTodoContext } from "./lib/hooks";

function App() {
  const { todos } = useTodoContext();

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-slate-700 tablet:items-center">
      <Header />
      <div className="flex flex-col flex-grow px-8 py-4 overflow-hidden tablet:w-3/5 laptop:w-2/5 desktop:w-96">
        <AddTodoForm />
        <main className="flex-grow overflow-hidden relative">
          <div className="absolute inset-0 overflow-y-auto">
            <TodoList todos={todos} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
