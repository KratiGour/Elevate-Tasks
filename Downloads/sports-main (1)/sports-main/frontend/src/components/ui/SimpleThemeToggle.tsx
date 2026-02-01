import { useTheme } from '../../hooks/useTheme';

export const SimpleThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 dark:text-white/60 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 group w-full"
    >
      <div className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-white/10 group-hover:bg-gray-300 dark:group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
        <i className={`${theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} text-sm text-gray-600 dark:text-white/60 group-hover:text-gray-800 dark:group-hover:text-white`}></i>
      </div>
      <span className="font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};