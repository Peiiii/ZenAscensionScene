
import React, { useState, useEffect } from 'react';
import { Music, Volume2, VolumeX, Share2, Info } from 'lucide-react';

const Overlay: React.FC = () => {
  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none transition-opacity duration-2000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Top Banner Text */}
      <div className="absolute top-[15%] left-0 w-full flex flex-col items-center gap-4 select-none">
        <h2 className="text-4xl md:text-6xl font-zen text-orange-400 drop-shadow-[0_2px_10px_rgba(255,140,0,0.5)]">
          穷极一生
        </h2>
        <h3 className="text-2xl md:text-4xl font-serif-sc text-white/90 tracking-[0.2em] drop-shadow-lg">
          我们追求的到底是什么
        </h3>
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-2">
        <p className="font-zen text-white/40 text-lg">@静悟禅生</p>
      </div>

      {/* Right Side Controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 pointer-events-auto">
        <button 
          onClick={() => setMuted(!muted)}
          className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/10"
          title={muted ? "Unmute Meditative Music" : "Mute"}
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/10">
          <Share2 size={20} />
        </button>
        <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/10">
          <Info size={20} />
        </button>
      </div>

      {/* Left Decoration */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-30 select-none hidden md:flex">
         <div className="w-px h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
         <span className="[writing-mode:vertical-rl] text-white tracking-[0.5em] font-serif-sc text-sm uppercase">Zen Meditate</span>
         <div className="w-px h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      {/* Music Audio Element (Hidden) */}
      <audio 
        autoPlay 
        loop 
        muted={muted} 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3" // Placeholder meditative-ish music
      />
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-transparent to-orange-900/40 mix-blend-multiply" />
    </div>
  );
};

export default Overlay;
