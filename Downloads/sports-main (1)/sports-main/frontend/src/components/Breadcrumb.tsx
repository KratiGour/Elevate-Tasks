import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export const Breadcrumb = () => {
  const location = useLocation();
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const pathnames = location.pathname.split('/').filter(x => x);
    
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', path: '/' }
    ];
    
    pathnames.forEach((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = name.charAt(0).toUpperCase() + name.slice(1);
      breadcrumbs.push({ label, path });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="flex items-center space-x-2 text-sm mb-6">
      {breadcrumbs.map((crumb, index) => (
        <motion.div
          key={crumb.path}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center"
        >
          {index > 0 && (
            <i className="fas fa-chevron-right text-white/30 mx-2 text-xs"></i>
          )}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-white font-medium">{crumb.label}</span>
          ) : (
            <Link
              to={crumb.path}
              className="text-white/60 hover:text-white transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </motion.div>
      ))}
    </nav>
  );
};