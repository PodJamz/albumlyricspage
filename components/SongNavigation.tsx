import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { songs } from '@/lib/songs';

interface SongNavigationProps {
  currentSong: typeof songs[0];
  setCurrentSong: (song: typeof songs[0]) => void;
}

export default function SongNavigation({ currentSong, setCurrentSong }: SongNavigationProps) {
  const currentIndex = songs.findIndex(song => song.id === currentSong.id);

  const nextSong = () => {
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  };

  const prevSong = () => {
    setCurrentSong(songs[(currentIndex - 1 + songs.length) % songs.length]);
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <Button onClick={prevSong} aria-label="Previous song"><ChevronLeft /></Button>
      <h2 className="text-xl font-semibold">{currentSong.title}</h2>
      <Button onClick={nextSong} aria-label="Next song"><ChevronRight /></Button>
    </div>
  );
}