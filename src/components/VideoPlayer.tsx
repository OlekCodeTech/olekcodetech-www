"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn, withBase } from "@/lib/utils";

type Props = {
  mp4: string;
  webm?: string;
  poster?: string;
  className?: string;
  /** Sterowanie (play/pauza, dźwięk). Dla tła sekcji wyłącz. */
  controls?: boolean;
  /** Przyciemnienie dla wersji „tło”. */
  overlay?: boolean;
  label?: string;
};

/**
 * Wideo w tle / showreel: autoplay bez dźwięku, pętla, pauza poza ekranem,
 * bez autoodtwarzania przy prefers-reduced-motion.
 */
export default function VideoPlayer({ mp4, webm, poster, className, controls = true, overlay = false, label = "Film promocyjny OlekCodeTech" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className={cn("group relative overflow-hidden bg-ink", className)}>
      <video
        ref={ref}
        muted
        loop
        playsInline
        autoPlay={!reduced}
        preload="metadata"
        poster={poster ? withBase(poster) : undefined}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      >
        {webm && <source src={withBase(webm)} type="video/webm" />}
        <source src={withBase(mp4)} type="video/mp4" />
      </video>

      {overlay && <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/90" />}

      {controls && (
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-90 transition group-hover:opacity-100">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Zatrzymaj film" : "Odtwórz film"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-snow backdrop-blur transition hover:bg-cyan hover:text-ink"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Włącz dźwięk" : "Wycisz"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-snow backdrop-blur transition hover:bg-cyan hover:text-ink"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
