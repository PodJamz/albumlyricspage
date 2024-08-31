'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

export default function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);

  const changeFontSize = (size: string) => {
    setFontSize(size);
    document.documentElement.style.fontSize = size === 'large' ? '120%' : '100%';
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  return (
    <div className="relative">
      <Button aria-label="Accessibility options">
        <Settings />
      </Button>
      <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          onClick={() => changeFontSize('medium')}
        >
          Normal Font Size
        </button>
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          onClick={() => changeFontSize('large')}
        >
          Large Font Size
        </button>
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          onClick={toggleHighContrast}
        >
          {highContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
      </div>
    </div>
  );
}