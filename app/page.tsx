'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import SongCard from '@/components/SongCard';
import { songs } from '@/lib/songs';
import { getLyrics } from '@/lib/translations';

export default function Home() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const router = useRouter();
  const pathname = usePathname();
  const language = pathname.startsWith('/pt') ? 'pt' : 'en';

  useEffect(() => {
    // Update the page title when the song changes
    document.title = `${currentSong.title} - Neurodiversity Vibes`;
  }, [currentSong]);

  const handleLanguageChange = (newLang: string) => {
    router.push(`/${newLang}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto p-4 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {songs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              isActive={currentSong.id === song.id}
              onClick={() => setCurrentSong(song)}
              lyrics={getLyrics(song.id, 'en')}
              translation={getLyrics(song.id, 'pt')}
            />
          ))}
        </div>
      </main>
    </div>
  );
}