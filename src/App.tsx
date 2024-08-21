import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ThemeButton from "./components/ThemeButton";
import TodoList from "./components/TodoList";

import { useTodoContext } from "./lib/hooks";

function App() {
  const { todos } = useTodoContext();

  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-slate-100 dark:bg-gray-900">
      <div className="flex justify-end w-3/4 mb-4">
        <ThemeButton />
      </div>
      <main className="flex flex-col overflow-hidden bg-slate-50 dark:bg-gray-800 w-3/4 h-96 rounded-md">
        <Header />
        <div className="flex flex-col md:flex-row grow overflow-auto">
          <Sidebar />
          <div className="grow p-6">
            <TodoList todos={todos} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
