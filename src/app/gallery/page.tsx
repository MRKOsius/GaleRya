'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Gallery = dynamic(() => import('./gallery'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  ),
});

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      }>
        <Gallery />
      </Suspense>
    </div>
  );
} 