import { useState, useEffect } from "react";

const stickers = ["🐾", "⭐", "🦴", "❤️", "🌟", "🐶", "✨", "🎾"];

const facts = [
  "Всегда знает, когда ты грустишь",
  "Виляет хвостом даже во сне",
  "Лучший охранник дивана",
  "Мастер puppy eyes",
  "Профессиональный обнималыцик",
];

const FloatingSticker = ({ emoji, style }: { emoji: string; style: React.CSSProperties }) => (
  <div
    className="absolute select-none pointer-events-none text-2xl animate-bounce"
    style={{ animationDuration: `${2 + Math.random() * 2}s`, ...style }}
  >
    {emoji}
  </div>
);

export default function Index() {
  const [factIndex, setFactIndex] = useState(0);
  const [wiggle, setWiggle] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFactIndex((i) => (i + 1) % facts.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const handlePhotoClick = () => {
    setWiggle(true);
    setTimeout(() => setWiggle(false), 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden notebook-bg">
      {/* Floating stickers around */}
      <FloatingSticker emoji="🐾" style={{ top: "8%", left: "5%" }} />
      <FloatingSticker emoji="⭐" style={{ top: "15%", right: "8%" }} />
      <FloatingSticker emoji="🦴" style={{ bottom: "20%", left: "4%" }} />
      <FloatingSticker emoji="❤️" style={{ bottom: "10%", right: "6%" }} />
      <FloatingSticker emoji="🎾" style={{ top: "40%", left: "2%" }} />
      <FloatingSticker emoji="✨" style={{ top: "60%", right: "3%" }} />

      {/* Main card */}
      <div className="card-frame relative z-10 w-full max-w-sm">
        {/* Corner doodles */}
        <div className="corner-doodle top-left">✦</div>
        <div className="corner-doodle top-right">✦</div>
        <div className="corner-doodle bottom-left">✦</div>
        <div className="corner-doodle bottom-right">✦</div>

        {/* Title sticker */}
        <div className="title-sticker">
          <span>🐶 Барон</span>
        </div>

        {/* Photo */}
        <div
          className={`photo-wrapper mt-10 mb-4 mx-auto cursor-pointer ${wiggle ? "wiggle" : ""}`}
          onClick={handlePhotoClick}
        >
          <img
            src="https://cdn.poehali.dev/files/0e6ea357-edfc-44c9-855f-a5d28a963338.jpeg"
            alt="Барон"
            className="dog-photo"
          />
          <div className="photo-shine" />
        </div>

        {/* Tap hint */}
        <p className="tap-hint">нажми на фото! 👆</p>

        {/* Breed badge */}
        <div className="breed-badge">🐕 Английский кокер-спаниель</div>

        {/* Rotating fact */}
        <div className="fact-box">
          <div className="fact-label">Факт о Бароне:</div>
          <div className="fact-text" key={factIndex}>
            {facts[factIndex]}
          </div>
        </div>

        {/* Stats row */}
        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-emoji">🦴</span>
            <span className="stat-label">Косточки</span>
            <span className="stat-value">∞</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-emoji">❤️</span>
            <span className="stat-label">Любовь</span>
            <span className="stat-value">100%</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-emoji">😴</span>
            <span className="stat-label">Сон</span>
            <span className="stat-value">18ч</span>
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer">
          самый лучший пёс на свете 🌟
        </div>
      </div>
    </div>
  );
}
