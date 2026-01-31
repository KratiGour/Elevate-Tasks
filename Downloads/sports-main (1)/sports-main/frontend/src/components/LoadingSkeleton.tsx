import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'card' | 'text' | 'avatar' | 'video';
  count?: number;
}

export const LoadingSkeleton = ({ 
  className = '', 
  variant = 'card', 
  count = 1 
}: LoadingSkeletonProps) => {
  const getSkeletonContent = () => {
    switch (variant) {
      case 'video':
        return (
          <div className="glass rounded-xl p-4 space-y-3">
            <div className="animate-pulse bg-white/10 rounded-lg h-32"></div>
            <div className="animate-pulse bg-white/10 rounded h-4 w-3/4"></div>
            <div className="animate-pulse bg-white/10 rounded h-3 w-1/2"></div>
          </div>
        );
      case 'avatar':
        return <div className="animate-pulse bg-white/10 rounded-full w-12 h-12"></div>;
      case 'text':
        return <div className="animate-pulse bg-white/10 rounded h-4 w-full"></div>;
      default:
        return (
          <div className="glass rounded-xl p-6 space-y-4">
            <div className="animate-pulse bg-white/10 rounded h-6 w-1/3"></div>
            <div className="animate-pulse bg-white/10 rounded h-4 w-full"></div>
            <div className="animate-pulse bg-white/10 rounded h-4 w-2/3"></div>
          </div>
        );
    }
  };

  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {getSkeletonContent()}
        </motion.div>
      ))}
    </div>
  );
};