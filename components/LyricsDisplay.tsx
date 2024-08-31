import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { getLyrics } from '@/lib/translations';

interface LyricsDisplayProps {
  songId: string;
  language: string;
}

export default function LyricsDisplay({ songId, language }: LyricsDisplayProps) {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    setLyrics(getLyrics(songId, language));
  }, [songId, language]);

  return (
    <Card>
      <CardContent>
        <pre className="whitespace-pre-wrap">{lyrics}</pre>
      </CardContent>
    </Card>
  );
}