// components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="absolute top-4 right-4 px-3 py-1 bg-gray-200 dark:bg-zinc-800 text-black dark:text-white rounded"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
