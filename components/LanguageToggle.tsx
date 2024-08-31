'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.startsWith('/pt') ? 'pt' : 'en';

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'pt' : 'en';
    router.push(`/${newLang}`);
  };

  return (
    <Button onClick={toggleLanguage} aria-label="Toggle language">
      <Globe className="mr-2" />
      {currentLang.toUpperCase()}
    </Button>
  );
}