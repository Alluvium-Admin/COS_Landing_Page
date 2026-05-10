interface PhoneMockupProps {
  src: string;
  title: string;
}

export const PhoneMockup = ({ src, title }: PhoneMockupProps) => (
  <div className="relative w-full max-w-xs md:max-w-sm">
    {/* Outer shell */}
    <div className="relative rounded-[48px] border-[6px] border-foreground/10 bg-foreground/5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-full z-10 flex items-center justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-foreground/20" />
        <div className="w-10 h-3 rounded-full bg-foreground/10" />
      </div>

      {/* Portrait video — 9:16 matches mobile recording */}
      <div className="relative w-full aspect-9/16 bg-black overflow-hidden">
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-foreground/20 rounded-full" />
    </div>

    {/* Side buttons */}
    <div className="absolute left-[-7px] top-24 w-[6px] h-10 bg-foreground/10 rounded-l-sm" />
    <div className="absolute left-[-7px] top-40 w-[6px] h-16 bg-foreground/10 rounded-l-sm" />
    <div className="absolute left-[-7px] top-60 w-[6px] h-16 bg-foreground/10 rounded-l-sm" />
    <div className="absolute right-[-7px] top-36 w-[6px] h-20 bg-foreground/10 rounded-r-sm" />
  </div>
);
