'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a royalty-free ambient/lofi track as a placeholder.
    // You can replace this URL with your own audio file path (e.g., '/music.mp3' if you place a file in the public folder).
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2; // Set volume to 20% so it's not too loud

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
