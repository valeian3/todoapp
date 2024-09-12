import ThemeButton from "components/ThemeButton";

export default function Header() {
  return (
    <div className="py-4 px-8 flex flex-row justify-between items-center tablet:w-full">
      <h2 className="text-xl font-bold text-slate-500 dark:text-slate-200">
        Your Tasks
      </h2>
      <ThemeButton />
    </div>
  );
}
