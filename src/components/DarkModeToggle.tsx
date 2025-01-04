import useDarkMode from "@/hooks/useDarkMode";
import { SunIcon, MoonIcon, HalfBrightnessIcon } from "./Icons";

export default function DarkModeToggle() {
  const { darkMode, handleDarkMode } = useDarkMode();

  const handleClickItem = (mode: "system" | "light" | "dark") => {
    handleDarkMode(mode);
  };

  return (
    <div className="flex h-5 tooltip tooltip-bottom" data-tip={darkMode}>
      {darkMode === "system" ? (
        <button onClick={() => handleClickItem("light")}>
          <HalfBrightnessIcon size={20} />
        </button>
      ) : darkMode === "dark" ? (
        <button onClick={() => handleClickItem("system")}>
          <MoonIcon size={20} />
        </button>
      ) : (
        <button onClick={() => handleClickItem("dark")}>
          <SunIcon size={20} />
        </button>
      )}
    </div>
  );
}
