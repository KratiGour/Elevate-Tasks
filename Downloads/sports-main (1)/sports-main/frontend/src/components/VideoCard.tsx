import { motion } from 'framer-motion';
import { useState } from 'react';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail?: string;
    duration?: string;
    status: 'processing' | 'completed' | 'failed';
    events?: number;
    uploadDate: string;
  };
  onPlay?: (id: string) => void;
  onDownload?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const VideoCard = ({ video, onPlay, onDownload, onDelete }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'processing': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'failed': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-white/60 bg-white/10 border-white/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return 'fas fa-check-circle';
      case 'processing': return 'fas fa-spinner fa-spin';
      case 'failed': return 'fas fa-exclamation-circle';
      default: return 'fas fa-clock';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
        {video.thumbnail ? (
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <i className="fas fa-video text-4xl text-white/30"></i>
          </div>
        )}
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-3"
        >
          {video.status === 'completed' && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onPlay?.(video.id)}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <i className="fas fa-play ml-1"></i>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onDownload?.(video.id)}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <i className="fas fa-download"></i>
              </motion.button>
            </>
          )}
        </motion.div>

        {/* Duration */}
        {video.duration && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
            {video.duration}
          </div>
        )}

        {/* Status Badge */}
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs border backdrop-blur-sm ${getStatusColor(video.status)}`}>
          <i className={`${getStatusIcon(video.status)} mr-1`}></i>
          {video.status.charAt(0).toUpperCase() + video.status.slice(1)}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-white truncate group-hover:text-blue-400 transition-colors">
          {video.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-white/60">
          <span>{video.uploadDate}</span>
          {video.events && (
            <span className="flex items-center gap-1">
              <i className="fas fa-star text-yellow-400"></i>
              {video.events} events
            </span>
          )}
        </div>

        {/* Progress Bar for Processing */}
        {video.status === 'processing' && (
          <div className="w-full bg-white/10 rounded-full h-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60%' }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="flex space-x-2">
            {video.status === 'completed' && (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onPlay?.(video.id)}
                  className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs hover:bg-blue-500/30 transition-colors"
                >
                  Play
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onDownload?.(video.id)}
                  className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs hover:bg-green-500/30 transition-colors"
                >
                  Download
                </motion.button>
              </>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onDelete?.(video.id)}
            className="text-white/40 hover:text-red-400 transition-colors"
          >
            <i className="fas fa-trash text-sm"></i>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};