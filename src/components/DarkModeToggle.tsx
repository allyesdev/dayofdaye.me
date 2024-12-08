"use client";

import useDarkMode from "@/hooks/useDarkMode";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "./Icons";
import { Backdrop, backdropAtom } from "./Backdrop";
import { useAtom } from "jotai";

export default function DarkModeToggle() {
  const { darkMode, handleDarkMode } = useDarkMode();
  const [showMenu, setShowMenu] = useState(false);
  const [, setBackdropOpen] = useAtom(backdropAtom);

  const handleClickItem = (mode: "system" | "light" | "dark") => {
    handleDarkMode(mode);
    setShowMenu(false);
  };

  useEffect(() => {
    setBackdropOpen({
      backdropOpen: showMenu,
      onBackdropClick: () => setShowMenu(false),
    });
  }, [setBackdropOpen, showMenu]);

  return (
    <div className="relative inline-block">
      <Backdrop />
      <button
        id="states-button"
        data-dropdown-toggle="dropdown-states"
        className="w-28 h-10 flex-shrink-0 z-10 inline-flex items-center justify-between py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 focus:outline-none"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        {darkMode === "system"
          ? "System"
          : darkMode === "light"
          ? "Light"
          : "Dark"}
        <ChevronDownIcon className={showMenu ? "rotate-180" : ""} />
      </button>
      <div
        id="dropdown-states"
        className={`absolute z-10 w-28 bg-white divide-y divide-gray-100 rounded-lg shadow-lgs dark:bg-gray-700 ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <ul
          className="py-2 text-sm text-gray-700 border rounded border-gray-300 dark:border-gray-700 dark:text-gray-200"
          aria-labelledby="states-button"
        >
          <li>
            <button
              type="button"
              value="system"
              aria-label="System"
              onClick={() => handleClickItem("system")}
              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="inline-flex items-center">System</div>
            </button>
          </li>
          <li>
            <button
              type="button"
              value="light"
              aria-label="Light"
              onClick={() => handleClickItem("light")}
              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="inline-flex items-center">Light</div>
            </button>
          </li>
          <li>
            <button
              type="button"
              value="dark"
              aria-label="Dark"
              onClick={() => handleClickItem("dark")}
              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="inline-flex items-center">Dark</div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
