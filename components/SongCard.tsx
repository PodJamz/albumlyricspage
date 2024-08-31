import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import LyricsCard from '@/components/LyricsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SongCardProps {
  song: { id: string; title: string; embedUrl: string };
  isActive: boolean;
  onClick: () => void;
  lyrics: string;
  translation: string;
}

export default function SongCard({ song, isActive, onClick, lyrics, translation }: SongCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
    onClick();
  };

  const toggleLyrics = () => {
    setShowLyrics(!showLyrics);
  };

  return (
    <div className="relative">
      <Card
        className={`cursor-pointer p-4 transition-transform transform ${isActive ? 'bg-primary text-white scale-105 shadow-lg glow' : 'bg-white text-black'}`}
        onClick={handleCardClick}
      >
        <CardContent>
          <h3 className="text-lg font-semibold">{song.title}</h3>
          {isActive && flipped && (
            <div className="mt-2">
              <iframe
                style={{ borderRadius: '12px' }}
                src={song.embedUrl}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          )}
        </CardContent>
      </Card>
      {isActive && flipped && (
        <div className="mt-2 flex justify-between">
          <Button onClick={toggleLyrics}>
            {showLyrics ? 'Hide Lyrics' : 'Show Lyrics'}
          </Button>
        </div>
      )}
      {isActive && flipped && showLyrics && <LyricsCard lyrics={lyrics} translation={translation} />}
    </div>
  );
}