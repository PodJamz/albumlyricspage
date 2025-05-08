'use client';

import { useState, useEffect } from 'react';
import SongCard from '@/components/SongCard';
import { songs } from '@/lib/songs'; // Assuming songs are imported here
import { getLyrics } from '@/lib/translations'; // Assuming lyrics function is here
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Song {
  id: string;
  title: string;
  embedUrl: string;
}

export default function SongCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState<Song>(songs[currentIndex]);
  // Assuming default language is English. Language selection can be integrated later.
  const language = 'en'; 

  useEffect(() => {
    setCurrentSong(songs[currentIndex]);
    document.title = `${songs[currentIndex].title} - Neurodiversity Vibes`;
  }, [currentIndex]);

  const nextSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  // Basic swipe detection (can be enhanced with a library)
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); //  reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSong();
    } else if (isRightSwipe) {
      prevSong();
    }
    // Reset touch coordinates
    setTouchStart(0);
    setTouchEnd(0);
  };


  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen p-4"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="w-full max-w-md mx-auto"> {/* Centered container with max-width for mobile-like view */}
        <div className="relative">
          <SongCard
            key={currentSong.id}
            song={currentSong}
            isActive={true} // The card in the carousel is always the "active" one
            onClick={() => {}} // onClick might not be needed here, or could trigger playback
            lyrics={getLyrics(currentSong.id, language)}
            // Assuming Portuguese (pt) as the other language for translation
            translation={getLyrics(currentSong.id, language === 'en' ? 'pt' : 'en')} 
          />
        </div>
        <div className="flex justify-between mt-4">
          <Button onClick={prevSong} variant="outline" size="icon">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button onClick={nextSong} variant="outline" size="icon">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}