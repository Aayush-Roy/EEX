
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface VideoSlide {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

const AncientVideoSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides: VideoSlide[] = [
   {
  id: 1,
  title: "Secrets of the Earth Temples",
  description: "Explore the hidden mysteries and ancient secrets buried within the sacred earth temples.",
  videoUrl: "/videos/EEX.mp4",
  thumbnail: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80"
},
{
  id: 2,
  title: "Ganga Ghats of India",
  description: "Experience the spiritual aura and timeless beauty of the sacred ghats along the holy Ganga River.",
  videoUrl: "/videos/temple.mp4",
  thumbnail: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80"
}

    
    
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      if (!isPlaying[currentSlide]) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isPlaying, isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const togglePlay = (id: number) => {
    setIsPlaying(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="h-screen bg-[#000] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Border Frame Container */}
        <div className="relative w-full" style={{
          aspectRatio: '16/9',
        }}>
          
          {/* PNG Border Frame - Overlay on top */}
          <img 
            src="/sliderBorder.png" 
            alt="Ancient Border Frame"
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            style={{ 
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.6))',
              objectFit: 'fill', // Pura border stretch ho jayega without cropping
            }}
          />

          {/* Video Slider Content - Behind the border */}
          <div className="absolute inset-0 z-10" style={{
            // Adjust these values based on your border's inner padding
            padding: '8%', // Ye value adjust kar apne border ke thickness ke according
          }}>
            <div className="relative w-full h-full bg-stone-900 rounded-lg overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="relative w-full h-full bg-black">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <video
                      className="w-full h-full object-cover"
                      poster={slide.thumbnail}
                      autoPlay
                    muted
                    //   controls={isPlaying[slide.id]}
                      onPlay={() => togglePlay(slide.id)}
                      onPause={() => togglePlay(slide.id)}
                    >
                      <source src={slide.videoUrl} type="video/mp4" />
                    </video>
                    
                    {!isPlaying[slide.id] && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <button
                          onClick={() => {
                            const video = document.querySelector(`video[poster="${slide.thumbnail}"]`) as HTMLVideoElement;
                            if (video) video.play();
                          }}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl"
                          style={{
                            background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #8B6914 100%)',
                            boxShadow: `
                              0 4px 15px rgba(218, 165, 32, 0.4),
                              inset 0 2px 4px rgba(255,255,255,0.3),
                              inset 0 -2px 4px rgba(0,0,0,0.3)
                            `
                          }}
                        >
                          <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6" style={{
                background: `
                  linear-gradient(to top, 
                    rgba(28, 25, 23, 0.95) 0%,
                    rgba(28, 25, 23, 0.85) 50%,
                    transparent 100%
                  )
                `
              }}>
                <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 font-serif" style={{
                //   color: '#DAA520',
                color: '#a99d88',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(218,165,32,0.3)'
                }}>
                  {slides[currentSlide].title}
                </h3>
                <p className="text-amber-100 text-xs md:text-base" style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-30"
                style={{
                  background: 'linear-gradient(135deg, #8B6914 0%, #B8860B 50%, #654321 100%)',
                  boxShadow: `
                    0 4px 12px rgba(0,0,0,0.6),
                    inset 0 2px 4px rgba(255,255,255,0.2),
                    inset 0 -2px 4px rgba(0,0,0,0.4)
                  `
                }}
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" style={{
                  filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))'
                }} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-30"
                style={{
                  background: 'linear-gradient(135deg, #8B6914 0%, #B8860B 50%, #654321 100%)',
                  boxShadow: `
                    0 4px 12px rgba(0,0,0,0.6),
                    inset 0 2px 4px rgba(255,255,255,0.2),
                    inset 0 -2px 4px rgba(0,0,0,0.4)
                  `
                }}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" style={{
                  filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))'
                }} />
              </button>
            </div>
          </div>

          {/* Dots Navigation - Outside the frame */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: index === currentSlide ? '48px' : '12px',
                  height: '12px',
                  background: index === currentSlide 
                    ? 'linear-gradient(90deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)'
                    : 'rgba(139, 105, 20, 0.4)',
                  boxShadow: index === currentSlide 
                    ? '0 2px 8px rgba(218,165,32,0.4), inset 0 1px 2px rgba(255,255,255,0.3)'
                    : '0 1px 3px rgba(0,0,0,0.4)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AncientVideoSlider;