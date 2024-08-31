import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface LyricsCardProps {
  lyrics: string;
  translation: string;
}

export default function LyricsCard({ lyrics, translation }: LyricsCardProps) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <Card className="mt-4 p-4">
      <CardContent>
        <div className="overflow-y-auto max-h-96" onClick={() => setShowTranslation(!showTranslation)}>
          <pre className="whitespace-pre-wrap">{showTranslation ? translation : lyrics}</pre>
        </div>
      </CardContent>
    </Card>
  );
}