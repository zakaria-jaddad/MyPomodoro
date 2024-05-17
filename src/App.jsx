import Header from "./components/Header";
import Settings from "./components/Settings";
import Pomodoro from "./components/Pomodoro";
import TodoList from "./components/TodoList";
import useTheme from "./hooks/useTheme";
import useAuthentication from "./hooks/useAuthentication";
import { Toaster } from "sonner";
import { useSelector } from "react-redux";

function App() {
  const isSettings = useSelector((state) => state.settings.settingsPage);
  const theme = useSelector((state) => state.settings.theme.themeColors);
  useTheme(theme);
  const isUserAuthenticated = useAuthentication();

  return (
    <>
      <main className="relative">
        <div
          className={`container px-[10px] min-h-screen ${
            isSettings ? "overflow-hidden" : ""
          }`}
        >
          <Header />
          <Pomodoro />
          <TodoList isUserAuthenticated={isUserAuthenticated} />
        </div>
        {isSettings === true ? <Settings /> : null}
      </main>
      <Toaster richColors />
    </>
  );
}

export default App;
