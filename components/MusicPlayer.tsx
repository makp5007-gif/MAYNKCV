'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio only once
    if (!audioRef.current) {
      audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2; // Set volume to 20%
    }

    const attemptPlay = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.log("Autoplay prevented by browser. Waiting for user interaction.");
        });
      }
    };

    // Attempt to play immediately on mount
    attemptPlay();

    // If autoplay is blocked, play on first user interaction
    const handleInteraction = () => {
      if (!isPlaying) {
        attemptPlay();
      }
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [isPlaying]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Browsers require user interaction before playing audio
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-3 md:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-lg group"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
      ) : (
        <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
      )}
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
        {isPlaying ? "Pause Music" : "Play Music"}
      </span>
    </motion.button>
  );
}
