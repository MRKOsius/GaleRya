'use client';

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-indigo-500/30 animate-gradient"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500/20 rounded-full filter blur-3xl animate-float-slow"></div>
    </div>
  );
} 