import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface MediaPlaceholderProps {
  aspectRatio?: string;
  label?: string;
  className?: string;
  images?: string[]; // Array of image URLs for auto-rotation (supports {lang} placeholder)
  autoPlayInterval?: number; // Interval in milliseconds
  video?: string; // Video URL (can include {lang} and {theme} placeholders)
  poster?: string; // Poster image for video
  lang?: string; // Current language for resource switching
  loading?: 'lazy' | 'eager'; // Image loading strategy
}

// Process URL with language placeholder
const processUrl = (url: string, lang: string): string => {
  return url.replace('{lang}', lang);
};

// Get WebP version of an image URL
const getWebpUrl = (url: string): string => {
  return url.replace(/\.png$/i, '.webp');
};

export const MediaPlaceholder = ({
  aspectRatio = "aspect-video",
  label = "Image/Video Placeholder",
  className = "",
  images = [],
  autoPlayInterval = 4000,
  video,
  poster,
  lang = 'en',
  loading = 'lazy'
}: MediaPlaceholderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Process video URL with language placeholder
  const processedVideo = video ? processUrl(video, lang) : null;
  const processedPoster = poster ? processUrl(poster, lang) : null;
  
  // Auto-rotation effect for images
  useEffect(() => {
    if (images.length <= 1 || video) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setImageLoaded(false);
    }, autoPlayInterval);
    
    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval, video]);

  // Reset image loaded state when index changes
  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  // Video play/pause control
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Video mute control
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // If video is provided, show video player
  if (processedVideo) {
    return (
      <div className={`relative overflow-hidden rounded-xl ${aspectRatio} ${className} group`}>
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster={processedPoster || undefined}
          className="w-full h-full object-cover"
        >
          <source src={processedVideo} type="video/mp4" />
          <source src={processedVideo.replace('.mp4', '.webm')} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video controls overlay */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={toggleMute}
            className="p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            onClick={togglePlay}
            className="p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>
    );
  }

  // If no images provided, show placeholder
  if (images.length === 0) {
    return (
      <div className={`relative overflow-hidden rounded-xl border border-border/50 dark:border-white/10 bg-muted/30 dark:bg-black/40 shadow-inner ${aspectRatio} ${className} group`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/40 transition-colors duration-500 group-hover:text-muted-foreground/60">
          <ImageIcon className="h-12 w-12 mb-3 opacity-40 transition-opacity duration-500 group-hover:opacity-60" />
          <span className="text-sm font-medium tracking-wide">{label}</span>
        </div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
      </div>
    );
  }

  // Process current image URL
  const currentImageUrl = processUrl(images[currentIndex], lang);
  const currentWebpUrl = getWebpUrl(currentImageUrl);

  // Single image - no rotation needed
  if (images.length === 1) {
    return (
      <div className={`relative overflow-hidden rounded-xl ${aspectRatio} ${className} group`}>
        <picture>
          <source srcSet={currentWebpUrl} type="image/webp" />
          <img 
            src={currentImageUrl} 
            alt={label}
            loading={loading}
            className="w-full h-full object-contain"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </picture>
      </div>
    );
  }

  // Multiple images with auto-rotation
  return (
    <div className={`relative overflow-hidden rounded-xl ${aspectRatio} ${className} group`}>
      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-muted/30 dark:bg-black/40 animate-pulse" />
      )}
      
      <AnimatePresence mode="wait">
        <motion.picture
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0, 0.2, 1]
          }}
          className="absolute inset-0 w-full h-full"
        >
          <source srcSet={currentWebpUrl} type="image/webp" />
          <motion.img
            src={currentImageUrl}
            alt={`${label} - ${currentIndex + 1}`}
            loading={loading}
            onLoad={() => setImageLoaded(true)}
            className="w-full h-full object-contain"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </motion.picture>
      </AnimatePresence>
      
      {/* Subtle gradient overlay at bottom for indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      
      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {images.map((_, idx) => (
          <motion.div
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50'
            }`}
            initial={false}
            animate={{
              width: idx === currentIndex ? 16 : 6,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};
