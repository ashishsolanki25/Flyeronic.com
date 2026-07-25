// Animated, brand-colored SVG illustrations for service pages.
// Colors follow the site's brand palette: purple #6C3AFF, teal #00C9A7, coral #FF6B6B.

export function SEOIllustration() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
      {/* Browser frame */}
      <rect x="20" y="20" width="360" height="260" rx="16" fill="white" stroke="#EAEAEE" strokeWidth="2" />
      <circle cx="40" cy="36" r="4" fill="#FF6B6B" />
      <circle cx="55" cy="36" r="4" fill="#F8B400" />
      <circle cx="70" cy="36" r="4" fill="#00C9A7" />
      <line x1="20" y1="52" x2="380" y2="52" stroke="#EAEAEE" strokeWidth="2" />

      {/* Search bar */}
      <rect x="40" y="70" width="320" height="30" rx="15" fill="#F8F7FF" stroke="#E0DBFF" strokeWidth="1.5" />
      <circle cx="58" cy="85" r="6" fill="none" stroke="#6C3AFF" strokeWidth="2.5" />
      <line x1="63" y1="90" x2="68" y2="95" stroke="#6C3AFF" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="78" y="80" width="140" height="10" rx="5" fill="#D9D3FF" className="illus-pulse" />

      {/* Result rows (rank #1 highlighted) */}
      <g className="illus-float">
        <rect x="40" y="115" width="320" height="42" rx="10" fill="#F0EEFF" stroke="#6C3AFF" strokeWidth="1.5" />
        <circle cx="60" cy="136" r="10" fill="#6C3AFF" />
        <text x="60" y="140" fontSize="11" fill="white" fontWeight="800" textAnchor="middle">1</text>
        <rect x="80" y="126" width="150" height="8" rx="4" fill="#6C3AFF" />
        <rect x="80" y="139" width="220" height="6" rx="3" fill="#C9BFFF" />
      </g>

      <rect x="40" y="165" width="320" height="34" rx="10" fill="#FAFAFB" />
      <rect x="80" y="176" width="120" height="6" rx="3" fill="#E3E3E8" />
      <rect x="80" y="187" width="180" height="5" rx="2.5" fill="#EDEDF0" />

      <rect x="40" y="205" width="320" height="34" rx="10" fill="#FAFAFB" />
      <rect x="80" y="216" width="130" height="6" rx="3" fill="#E3E3E8" />
      <rect x="80" y="227" width="170" height="5" rx="2.5" fill="#EDEDF0" />

      {/* Rising arrow badge */}
      <g className="illus-float-delay">
        <circle cx="330" cy="255" r="26" fill="#00C9A7" opacity="0.15" />
        <circle cx="330" cy="255" r="17" fill="#00C9A7" />
        <path d="M323 260 L330 250 L337 260" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

export function GoogleAdsIllustration() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
      <rect x="20" y="20" width="360" height="260" rx="16" fill="white" stroke="#EAEAEE" strokeWidth="2" />
      <circle cx="40" cy="36" r="4" fill="#FF6B6B" />
      <circle cx="55" cy="36" r="4" fill="#F8B400" />
      <circle cx="70" cy="36" r="4" fill="#00C9A7" />
      <line x1="20" y1="52" x2="380" y2="52" stroke="#EAEAEE" strokeWidth="2" />

      {/* Ad card */}
      <g className="illus-float">
        <rect x="45" y="70" width="310" height="70" rx="10" fill="#F8F7FF" stroke="#E0DBFF" strokeWidth="1.5" />
        <rect x="60" y="82" width="40" height="16" rx="4" fill="#6C3AFF" />
        <text x="80" y="94" fontSize="9" fill="white" fontWeight="700" textAnchor="middle">Ad</text>
        <rect x="108" y="84" width="150" height="8" rx="4" fill="#6C3AFF" />
        <rect x="60" y="106" width="270" height="6" rx="3" fill="#DFDBF7" />
        <rect x="60" y="118" width="180" height="6" rx="3" fill="#EBE8FB" />
      </g>

      {/* Cursor click */}
      <g className="illus-float-delay">
        <path d="M270 175 L270 210 L280 202 L286 214 L292 211 L286 199 L296 199 Z" fill="#00C9A7" stroke="white" strokeWidth="1.5" />
        <circle cx="270" cy="192" r="22" fill="#00C9A7" opacity="0.12" className="illus-pulse" />
      </g>

      {/* Metric widgets */}
      <rect x="45" y="160" width="90" height="60" rx="10" fill="#F8F7FF" />
      <text x="58" y="180" fontSize="9" fill="#6B6B75" fontWeight="700">CTR</text>
      <text x="58" y="200" fontSize="16" fill="#6C3AFF" fontWeight="800">6.8%</text>

      <rect x="145" y="160" width="100" height="60" rx="10" fill="#F8F7FF" />
      <text x="158" y="180" fontSize="9" fill="#6B6B75" fontWeight="700">ROAS</text>
      <text x="158" y="200" fontSize="16" fill="#00C9A7" fontWeight="800">5.1x</text>

      {/* Coins */}
      <g className="illus-float-slow">
        <circle cx="330" cy="250" r="16" fill="#F8B400" stroke="white" strokeWidth="2" />
        <circle cx="310" cy="240" r="12" fill="#FFD166" stroke="white" strokeWidth="2" />
        <text x="330" y="254" fontSize="12" fill="white" fontWeight="800" textAnchor="middle">₹</text>
      </g>
    </svg>
  );
}

export function MetaAdsIllustration() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
      {/* Phone frame */}
      <rect x="130" y="15" width="140" height="270" rx="24" fill="white" stroke="#EAEAEE" strokeWidth="2" />
      <rect x="142" y="30" width="116" height="200" rx="10" fill="#F8F7FF" />
      <rect x="150" y="38" width="60" height="8" rx="4" fill="#DFDBF7" />
      <circle cx="240" cy="42" r="8" fill="#6C3AFF" />

      {/* Post image block */}
      <rect x="150" y="58" width="100" height="80" rx="8" fill="#E3DEFB" className="illus-pulse" />
      <circle cx="180" cy="90" r="12" fill="#C9BFFF" />
      <path d="M162 118 L178 100 L192 112 L210 92 L238 118 Z" fill="#B7ACF5" />

      <rect x="150" y="146" width="70" height="6" rx="3" fill="#DFDBF7" />
      <rect x="150" y="156" width="100" height="5" rx="2.5" fill="#EBE8FB" />

      <rect x="150" y="245" width="116" height="0" />
      <circle cx="248" cy="240" r="12" fill="#F0EEFF" />
      <line x1="248" y1="255" x2="248" y2="260" stroke="#F0EEFF" strokeWidth="0" />

      {/* Floating hearts / likes */}
      <g className="illus-float">
        <circle cx="70" cy="70" r="24" fill="white" stroke="#EAEAEE" strokeWidth="1.5" />
        <path d="M70 80 C60 72, 62 62, 70 66 C78 62, 80 72, 70 80 Z" fill="#FF6B6B" />
      </g>
      <g className="illus-float-delay">
        <circle cx="330" cy="110" r="26" fill="white" stroke="#EAEAEE" strokeWidth="1.5" />
        <path d="M330 122 C318 112, 320 100, 330 104 C340 100, 342 112, 330 122 Z" fill="#FF6B6B" />
      </g>
      <g className="illus-float-slow">
        <circle cx="60" cy="200" r="22" fill="white" stroke="#EAEAEE" strokeWidth="1.5" />
        <path d="M52 200 L58 206 L70 192" stroke="#00C9A7" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      <g className="illus-float">
        <circle cx="335" cy="220" r="20" fill="#6C3AFF" className="illus-pulse" />
        <text x="335" y="225" fontSize="14" fill="white" fontWeight="800" textAnchor="middle">+</text>
      </g>
    </svg>
  );
}

export function WebsiteIllustration() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
      <rect x="20" y="30" width="360" height="250" rx="16" fill="white" stroke="#EAEAEE" strokeWidth="2" />
      <circle cx="40" cy="46" r="4" fill="#FF6B6B" />
      <circle cx="55" cy="46" r="4" fill="#F8B400" />
      <circle cx="70" cy="46" r="4" fill="#00C9A7" />
      <line x1="20" y1="62" x2="380" y2="62" stroke="#EAEAEE" strokeWidth="2" />

      {/* Nav */}
      <rect x="40" y="76" width="34" height="10" rx="5" fill="#6C3AFF" />
      <rect x="84" y="78" width="30" height="6" rx="3" fill="#DADADF" />
      <rect x="122" y="78" width="30" height="6" rx="3" fill="#DADADF" />
      <rect x="320" y="76" width="40" height="14" rx="7" fill="#00C9A7" />

      {/* Hero block */}
      <g className="illus-float">
        <rect x="40" y="102" width="150" height="10" rx="5" fill="#6C3AFF" />
        <rect x="40" y="118" width="180" height="8" rx="4" fill="#DFDBF7" />
        <rect x="40" y="132" width="130" height="8" rx="4" fill="#EBE8FB" />
        <rect x="40" y="150" width="70" height="20" rx="10" fill="#6C3AFF" />
      </g>

      <g className="illus-float-delay">
        <rect x="230" y="100" width="130" height="90" rx="10" fill="#F0EEFF" />
        <rect x="245" y="115" width="100" height="60" rx="6" fill="#DFDBF7" />
        <circle cx="270" cy="145" r="14" fill="#B7ACF5" />
      </g>

      {/* Cards row */}
      <rect x="40" y="200" width="95" height="60" rx="10" fill="#F8F7FF" />
      <rect x="145" y="200" width="95" height="60" rx="10" fill="#F8F7FF" />
      <rect x="250" y="200" width="95" height="60" rx="10" fill="#F8F7FF" />
      <circle cx="60" cy="220" r="8" fill="#6C3AFF" />
      <circle cx="165" cy="220" r="8" fill="#00C9A7" />
      <circle cx="270" cy="220" r="8" fill="#FF6B6B" />

      {/* Speed badge */}
      <g className="illus-float-slow">
        <circle cx="345" cy="60" r="20" fill="#00C9A7" opacity="0.15" />
        <circle cx="345" cy="60" r="13" fill="#00C9A7" />
        <path d="M340 60 L344 64 L351 55" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

export function AutomationIllustration() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
      {/* Connection lines */}
      <path d="M90 90 L200 170 L90 250" stroke="#E0DBFF" strokeWidth="2.5" fill="none" />
      <path d="M310 90 L200 170 L310 250" stroke="#E0DBFF" strokeWidth="2.5" fill="none" />
      <path d="M200 90 L200 170" stroke="#E0DBFF" strokeWidth="2.5" fill="none" />

      {/* Center bot node */}
      <g className="illus-pulse">
        <circle cx="200" cy="170" r="38" fill="#6C3AFF" />
        <rect x="182" y="155" width="36" height="26" rx="8" fill="white" />
        <circle cx="192" cy="167" r="3.5" fill="#6C3AFF" />
        <circle cx="208" cy="167" r="3.5" fill="#6C3AFF" />
        <rect x="196" y="146" width="8" height="10" rx="4" fill="white" />
        <circle cx="200" cy="144" r="4" fill="#00C9A7" />
      </g>

      {/* Corner nodes */}
      <g className="illus-float">
        <circle cx="90" cy="90" r="26" fill="white" stroke="#EAEAEE" strokeWidth="1.5" />
        <path d="M80 90 L90 100 L102 82" stroke="#00C9A7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      <g className="illus-float-delay">
        <circle cx="310" cy="90" r="26" fill="white" stroke="#EAEAEE" strokeWidth="1.5" />
        <rect x="298" y="80" width="24" height="18" rx="3" fill="#F8B400" />
        <path d="M298 80 L310 90 L322 80" stroke="#F8B400" strokeWidth="2" fill="none" />
      </g>
      <g className="illus-float-slow">
        <circle cx="90" cy="250" r="26" fill="white" stroke="#EAEAEE" strokeWidth="1.5" />
        <path d="M80 250 C80 240, 100 240, 100 250 C100 258, 80 258, 80 250" fill="#FF6B6B" />
      </g>
      <g className="illus-float">
        <circle cx="310" cy="250" r="26" fill="white" stroke="#EAEAEE" strokeWidth="1.5" />
        <rect x="298" y="240" width="24" height="20" rx="4" fill="#6C3AFF" opacity="0.85" />
        <rect x="302" y="245" width="16" height="3" rx="1.5" fill="white" />
        <rect x="302" y="251" width="10" height="3" rx="1.5" fill="white" />
      </g>
      <g className="illus-float-delay">
        <circle cx="200" cy="90" r="22" fill="white" stroke="#EAEAEE" strokeWidth="1.5" />
        <path d="M192 90 L198 96 L210 82" stroke="#00C9A7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

export function ContentCreationIllustration() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
      {/* Phone with reel */}
      <rect x="120" y="30" width="150" height="270" rx="22" fill="white" stroke="#EAEAEE" strokeWidth="2" />
      <rect x="132" y="46" width="126" height="210" rx="10" fill="#F0EEFF" />

      <g className="illus-float">
        <path d="M170 100 L170 180 L220 140 Z" fill="#6C3AFF" />
        <circle cx="195" cy="140" r="46" fill="none" stroke="#DFDBF7" strokeWidth="6" />
      </g>

      <rect x="146" y="270" width="60" height="8" rx="4" fill="#DFDBF7" />
      <circle cx="248" cy="274" r="10" fill="#00C9A7" />

      {/* Camera */}
      <g className="illus-float-delay">
        <rect x="20" y="60" width="70" height="50" rx="10" fill="#6C3AFF" />
        <rect x="35" y="48" width="20" height="16" rx="4" fill="#6C3AFF" />
        <circle cx="55" cy="85" r="16" fill="#F0EEFF" />
        <circle cx="55" cy="85" r="9" fill="#6C3AFF" />
        <circle cx="76" cy="68" r="4" fill="#00C9A7" />
      </g>

      {/* Sparkles */}
      <g className="illus-float-slow">
        <path d="M320 60 L324 72 L336 76 L324 80 L320 92 L316 80 L304 76 L316 72 Z" fill="#F8B400" />
      </g>
      <g className="illus-float">
        <path d="M60 220 L63 228 L71 231 L63 234 L60 242 L57 234 L49 231 L57 228 Z" fill="#FF6B6B" />
      </g>
      <g className="illus-float-delay">
        <path d="M330 230 L333 238 L341 241 L333 244 L330 252 L327 244 L319 241 L327 238 Z" fill="#00C9A7" />
      </g>

      {/* Text/copy card */}
      <g className="illus-float">
        <rect x="290" y="130" width="90" height="70" rx="10" fill="white" stroke="#EAEAEE" strokeWidth="1.5" />
        <rect x="302" y="144" width="66" height="6" rx="3" fill="#DFDBF7" />
        <rect x="302" y="156" width="50" height="6" rx="3" fill="#EBE8FB" />
        <rect x="302" y="168" width="60" height="6" rx="3" fill="#EBE8FB" />
        <rect x="302" y="182" width="30" height="10" rx="5" fill="#6C3AFF" />
      </g>
    </svg>
  );
}

export function BrandFilmIllustration() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
      {/* Clapperboard */}
      <g className="illus-float">
        <rect x="70" y="120" width="240" height="150" rx="14" fill="white" stroke="#EAEAEE" strokeWidth="2" />
        <rect x="70" y="120" width="240" height="36" rx="10" fill="#6C3AFF" />
        <g stroke="white" strokeWidth="6">
          <line x1="90" y1="120" x2="110" y2="156" />
          <line x1="120" y1="120" x2="140" y2="156" />
          <line x1="150" y1="120" x2="170" y2="156" />
          <line x1="180" y1="120" x2="200" y2="156" />
          <line x1="210" y1="120" x2="230" y2="156" />
          <line x1="240" y1="120" x2="260" y2="156" />
        </g>
        <circle cx="190" cy="215" r="34" fill="#F0EEFF" />
        <path d="M180 200 L180 230 L206 215 Z" fill="#6C3AFF" />
      </g>

      {/* Film reel */}
      <g className="illus-spin-slow" style={{ transformOrigin: "330px 90px" }}>
        <circle cx="330" cy="90" r="40" fill="white" stroke="#EAEAEE" strokeWidth="2" />
        <circle cx="330" cy="90" r="10" fill="#DFDBF7" />
        <circle cx="330" cy="65" r="8" fill="#DFDBF7" />
        <circle cx="352" cy="80" r="8" fill="#DFDBF7" />
        <circle cx="352" cy="103" r="8" fill="#DFDBF7" />
        <circle cx="308" cy="103" r="8" fill="#DFDBF7" />
        <circle cx="308" cy="80" r="8" fill="#DFDBF7" />
      </g>

      {/* Light flares */}
      <g className="illus-float-delay">
        <circle cx="55" cy="70" r="16" fill="#F8B400" opacity="0.85" />
        <path d="M55 50 L55 40 M55 90 L55 100 M35 70 L25 70 M75 70 L85 70" stroke="#F8B400" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g className="illus-float-slow">
        <circle cx="60" cy="250" r="18" fill="#00C9A7" opacity="0.15" />
        <circle cx="60" cy="250" r="10" fill="#00C9A7" />
      </g>
    </svg>
  );
}
