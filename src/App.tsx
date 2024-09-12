import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";

import { useTodoContext } from "./lib/hooks";

function App() {
  const { todos } = useTodoContext();

  return (
    <div className="h-dvh flex flex-col bg-slate-100 dark:bg-slate-700 tablet:items-center transition-colors duration-100">
      <Header />
      {!todos.length ? (
        ""
      ) : (
        <div className="px-4 py-4 tablet:px-8 tablet:w-3/5 laptop:w-2/5 desktop:w-96">
          <Search />
        </div>
      )}
      <div className="flex flex-col flex-grow px-4 py-4 overflow-hidden tablet:px-8 tablet:w-3/5 laptop:w-2/5 desktop:w-96">
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
