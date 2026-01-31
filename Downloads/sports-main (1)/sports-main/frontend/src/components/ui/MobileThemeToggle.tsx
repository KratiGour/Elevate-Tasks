import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

export const MobileThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 text-sm transition-all rounded-lg text-gray-600 dark:text-white/70 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <i className={`${theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}`}></i>
    </motion.button>
  );
};