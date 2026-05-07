import React from 'react';

interface CraftIllustrationProps {
  craftId: string;
  className?: string;
}

export default function CraftIllustration({ craftId, className = '' }: CraftIllustrationProps) {
  // Common theme colors matching the CSS variables
  const primary = "var(--color-primary)"; 
  const secondary = "var(--color-secondary)";
  const accent = "var(--color-accent)"; 
  const dark = "var(--color-dark)"; 
  const bg = "var(--color-bg-sand)";
  const border = "var(--color-border)";
  const skinColor = "#E2C6B5";

  const ZelligePattern = () => (
    <pattern id="zellige_new" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <path d="M50 0L100 50L50 100L0 50Z" fill={accent} opacity="0.03" />
      <path d="M25 25L75 25L75 75L25 75Z" fill="none" stroke={primary} strokeWidth="1" opacity="0.05" />
      <circle cx="50" cy="50" r="10" fill="none" stroke={secondary} strokeWidth="2" opacity="0.05" />
    </pattern>
  );

  const LogoText = ({ x, y, color, rotation = 0 }: { x: number, y: number, color: string, rotation?: number }) => (
    <g transform={`translate(${x}, ${y}) rotate(${rotation})`}>
       <text x="0" y="0" fill={color} fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
         CFPA
       </text>
       <text x="0" y="16" fill={color} fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
         Jdiouia
       </text>
    </g>
  );

  // Modern Flat Character Helper
  const Person = ({ 
    shirtColor = primary, 
    logoColor = "#FFFFFF", 
    skinColor = "#E2C6B5",
    hairColor = dark,
    pantsColor = secondary,
    action, 
    foreground = null,
    facingRight = true,
  }: any) => (
    <g transform="translate(400, 360)">
      {/* Background Action / Props */}
      {action}
      
      {/* Person Group */}
      <g transform={`scale(${facingRight ? 1 : -1}, 1)`}>
        {/* Legs */}
        <path d="M -30 180 L -30 250 L -10 250 L -10 180 Z" fill={pantsColor} />
        <path d="M 10 180 L 10 250 L 30 250 L 30 180 Z" fill={pantsColor} />
        
        {/* Torso/Shirt */}
        <path d="M -50 180 C -50 60, -30 0, 0 0 C 30 0, 50 60, 50 180 Z" fill={shirtColor} />
        
        {/* Logo on shirt (back) */}
        {facingRight ? (
          <LogoText x={-5} y={60} color={logoColor} />
        ) : (
          <LogoText x={0} y={60} color={logoColor} />
        )}

        {/* Neck */}
        <rect x="-10" y="-20" width="20" height="30" fill={skinColor} />

        {/* Head */}
        <circle cx="0" cy="-50" r="40" fill={skinColor} />
        
        {/* Hair */}
        <path d="M -45 -50 Q 0 -110 45 -50 Q 0 -80 -45 -50 Z" fill={hairColor} />
        <path d="M 35 -50 Q 40 -20 45 -50 Z" fill={hairColor} />
        <path d="M -40 -30 Q -45 -50 -45 -50 Z" fill={skinColor} />
      </g>

      {/* Foreground Action / Props (like tables overlapping the person) */}
      {foreground}
    </g>
  );

  const renderIllustration = () => {
    switch (craftId) {
      case 'data_entry':
        return (
          <Person 
            shirtColor="#FFFFFF" 
            logoColor={accent}
            pantsColor={dark}
            facingRight={false}
            action={
              <g transform="translate(-150, -100)">
                 {/* Desktop Monitor */}
                 <rect x="-60" y="0" width="160" height="100" rx="10" fill={dark} />
                 <rect x="-50" y="10" width="140" height="80" rx="4" fill="#E0F7FA" />
                 {/* Spreadsheet lines */}
                 <line x1="-40" y1="30" x2="80" y2="30" stroke={accent} strokeWidth="4" />
                 <line x1="-40" y1="50" x2="80" y2="50" stroke={secondary} strokeWidth="4" />
                 <line x1="-40" y1="70" x2="60" y2="70" stroke={secondary} strokeWidth="4" />
                 {/* Stand */}
                 <rect x="10" y="100" width="20" height="40" fill={dark} />
                 <rect x="-20" y="140" width="80" height="10" rx="5" fill={dark} />
              </g>
            }
            foreground={
              <g transform="translate(0, 100)">
                {/* Desk */}
                <rect x="-300" y="50" width="450" height="15" fill={primary} />
                {/* Keyboard and Hands */}
                <rect x="-180" y="40" width="80" height="10" rx="2" fill={dark} />
                {/* Arm typing */}
                <path d="M -50 0 Q -150 20 -150 40 L -130 40 Q -120 20 -20 10 Z" fill={skinColor} />
              </g>
            }
          />
        );
      
      case 'ms_access':
        return (
          <Person 
            shirtColor="#ECEFF1" 
            logoColor={accent}
            facingRight={true}
            action={
              <g transform="translate(-200, -160)">
                 {/* Large Server / Database Screen */}
                 <rect x="0" y="0" width="220" height="150" rx="10" fill={secondary} />
                 <rect x="10" y="10" width="200" height="130" rx="5" fill="#FFFFFF" />
                 {/* Database blocks */}
                 <rect x="30" y="30" width="40" height="30" rx="5" fill={accent} />
                 <rect x="30" y="70" width="40" height="30" rx="5" fill={accent} />
                 <rect x="30" y="110" width="40" height="30" rx="5" fill={accent} />
                 
                 <circle cx="100" cy="45" r="10" fill={primary} />
                 <line x1="80" y1="45" x2="140" y2="45" stroke={dark} strokeWidth="3" />
                 <line x1="80" y1="85" x2="160" y2="85" stroke={dark} strokeWidth="3" />
                 <line x1="80" y1="125" x2="120" y2="125" stroke={dark} strokeWidth="3" />
              </g>
            }
            foreground={
              <g transform="translate(0, 50)">
                 {/* Arm pointing */}
                 <path d="M 20 -50 Q -100 -80 -150 -150 L -130 -160 Q -80 -80 40 -30 Z" fill={skinColor} />
                 {/* Desk */}
                 <rect x="-250" y="100" width="300" height="20" fill={dark} />
              </g>
            }
          />
        );
      
      case 'alu_pvc_joinery':
        return (
          <Person 
            shirtColor={secondary} 
            logoColor="#FFFFFF"
            facingRight={false}
            action={
              <g transform="translate(0, 50)">
                {/* Workshop window behind */}
                <rect x="-250" y="-200" width="150" height="150" rx="10" fill="none" stroke={accent} strokeWidth="10" />
                <line x1="-250" y1="-125" x2="-100" y2="-125" stroke={accent} strokeWidth="10" />
                <line x1="-175" y1="-200" x2="-175" y2="-50" stroke={accent} strokeWidth="10" />
              </g>
            }
            foreground={
              <g transform="translate(0, 100)">
                {/* Workbench */}
                <rect x="-300" y="0" width="500" height="30" fill={dark} />
                {/* Aluminum Profile */}
                <path d="M -250 -20 L 50 -20 L 40 -40 L -260 -40 Z" fill="#CFD8DC" />
                {/* Circular Saw */}
                <g transform="translate(-100, -50)">
                   <circle cx="0" cy="0" r="40" fill="none" stroke={dark} strokeWidth="8" />
                   <circle cx="0" cy="0" r="35" fill={accent} opacity="0.8" />
                   <circle cx="0" cy="0" r="5" fill={dark} />
                   <rect x="-20" y="-60" width="40" height="30" rx="5" fill={primary} />
                </g>
                {/* Arm holding saw */}
                <path d="M 0 -80 Q -100 -80 -100 -50 L -80 -40 Q -80 -60 20 -60 Z" fill={skinColor} />
                {/* Safety Goggles on face (offset to person's head) */}
                <g transform="translate(5, -150)">
                   <rect x="-20" y="0" width="40" height="15" rx="5" fill="#E0F7FA" stroke={dark} strokeWidth="3" opacity="0.9" />
                   <line x1="-40" y1="5" x2="-20" y2="5" stroke={dark} strokeWidth="3" />
                </g>
              </g>
            }
          />
        );

      case 'hair_styling':
        return (
          <Person 
            shirtColor={dark} 
            logoColor={accent}
            facingRight={false}
            action={
              <g transform="translate(-200, -100)">
                {/* Mirror */}
                <rect x="0" y="-80" width="140" height="200" rx="70" fill="none" stroke={primary} strokeWidth="10" />
                <rect x="10" y="-70" width="120" height="180" rx="60" fill="#E0F7FA" opacity="0.3" />
              </g>
            }
            foreground={
              <g transform="translate(-80, 0)">
                {/* Customer (Smaller silhouette) */}
                <circle cx="-50" cy="-20" r="35" fill="#E2C6B5" />
                <path d="M -80 -20 Q -50 -80 -20 -20 Q -50 0 -80 -20 Z" fill={primary} /> {/* Hair being dyed */}
                <path d="M -90 40 C -90 -20, -10 0, -10 40 Z" fill={secondary} />
                
                {/* Hand and brush applying dye */}
                <path d="M 80 -20 L 0 -40 L -10 -25 L 70 0 Z" fill={skinColor} />
                <rect x="-30" y="-55" width="30" height="10" fill={dark} transform="rotate(20 -30 -55)" />
                <rect x="-40" y="-55" width="10" height="20" fill={primary} transform="rotate(20 -30 -55)" />
              </g>
            }
          />
        );

      case 'mens_barbering':
        return (
          <Person 
            shirtColor="#FFFFFF" 
            logoColor={dark}
            facingRight={false}
            action={
               <g transform="translate(-250, -150)">
                 {/* Barber pole stripes bg */}
                 <rect x="0" y="0" width="40" height="180" fill="none" stroke={border} strokeWidth="10" rx="20" />
                 <path d="M 5 20 L 35 40 M 5 60 L 35 80 M 5 100 L 35 120 M 5 140 L 35 160" stroke={primary} strokeWidth="15" />
               </g>
            }
            foreground={
              <g transform="translate(-80, 50)">
                {/* Customer in chair */}
                <circle cx="-50" cy="-50" r="30" fill="#E2C6B5" />
                <path d="M -75 -50 Q -50 -100 -25 -50 Q -50 -30 -75 -50 Z" fill={dark} /> {/* Hair */}
                <path d="M -70 -30 Q -50 0 -30 -30 Z" fill={dark} /> {/* Beard */}
                {/* Barber cape */}
                <path d="M -100 20 C -100 -40, 0 -40, 0 20 Z" fill={secondary} />
                
                {/* Trimmer and hand */}
                <path d="M 80 -50 L 0 -50 L 0 -35 L 80 -35 Z" fill={skinColor} />
                <rect x="-20" y="-55" width="30" height="15" rx="5" fill={dark} />
                <rect x="-25" y="-50" width="5" height="5" fill="#BDBDBD" />
              </g>
            }
          />
        );

      case 'sanitary_plumbing':
        return (
          <Person 
            shirtColor={accent} 
            logoColor="#FFFFFF"
            facingRight={true}
            action={
              <g transform="translate(-100, 80)">
                {/* Wall pipes */}
                <path d="M -150 -150 L -150 0 L 150 0 L 150 100" fill="none" stroke={dark} strokeWidth="15" strokeLinejoin="round" />
                <path d="M -150 -150 L -150 0 L 150 0 L 150 100" fill="none" stroke="#B0BEC5" strokeWidth="5" strokeLinejoin="round" />
                
                {/* Sink outline above */}
                <path d="M -250 -150 L -50 -150 L -80 -100 L -220 -100 Z" fill="none" stroke={primary} strokeWidth="8" strokeLinejoin="round" />
              </g>
            }
            foreground={
              <g transform="translate(0, 100)">
                 {/* Legs bent/kneeling */}
                 <path d="M -20 -80 L -80 50 L -30 50 L 20 -80 Z" fill={secondary} />
                 
                 {/* Arm and wrench holding pipe nut */}
                 <path d="M 20 -80 Q -100 0 -100 -20 L -80 -40 Q -80 -20 40 -60 Z" fill={skinColor} />
                 <g transform="translate(-120, -30) rotate(-45)">
                    <rect x="0" y="0" width="100" height="20" fill={primary} rx="5" />
                    <path d="M -10 -10 L 20 -10 L 20 30 L -10 30 Z" fill={dark} />
                 </g>
                 
              </g>
            }
          />
        );

      case 'security_agent':
        return (
          <Person 
            shirtColor={dark} 
            logoColor={accent}
            pantsColor={primary}
            facingRight={true}
            action={
              <g transform="translate(-200, -100)">
                {/* Glass gate / Barrier */}
                <rect x="-100" y="-100" width="20" height="350" fill={secondary} />
                <rect x="-80" y="0" width="200" height="150" fill="#E0F7FA" opacity="0.3" stroke={accent} strokeWidth="4" />
                {/* CCTV Camera icon */}
                <path d="M -150 -100 L -100 -80 L -100 -50 L -150 -70 Z" fill={primary} />
                <circle cx="-100" cy="-65" r="10" fill={dark} />
              </g>
            }
            foreground={
              <g transform="translate(-20, 50)">
                 {/* Arm holding walkie-talkie */}
                 <path d="M 20 -50 L -50 0 L -30 20 L 40 -30 Z" fill={skinColor} />
                 <rect x="-60" y="-10" width="30" height="50" rx="5" fill={dark} stroke="#FFFFFF" strokeWidth="2" />
                 <rect x="-55" y="-30" width="5" height="20" fill={dark} />
                 <rect x="-50" y="0" width="10" height="10" fill={accent} />
              </g>
            }
          />
        );

      case 'storekeeper':
        return (
          <Person 
            shirtColor="#FFB300" 
            logoColor={dark}
            facingRight={false}
            action={
              <g transform="translate(-250, -200)">
                 {/* High warehouse shelves */}
                 <rect x="0" y="0" width="20" height="400" fill={secondary} />
                 <rect x="0" y="100" width="200" height="10" fill={secondary} />
                 <rect x="0" y="250" width="200" height="10" fill={secondary} />
                 
                 {/* Boxes */}
                 <rect x="30" y="40" width="60" height="60" fill={primary} opacity="0.9" />
                 <rect x="100" y="20" width="80" height="80" fill={primary} opacity="0.7" />
                 <rect x="30" y="150" width="100" height="100" fill={primary} opacity="0.8" />
              </g>
            }
            foreground={
              <g transform="translate(-120, 0)">
                 {/* Arm aiming scanner */}
                 <path d="M 120 -50 L 0 -50 L 0 -30 L 120 -30 Z" fill={skinColor} />
                 <path d="M -20 -60 L 10 -60 L 10 -20 L -20 -20 Z" fill={dark} />
                 {/* Laser beam */}
                 <polygon points="-20,-45 -100,-25 -100,-65" fill="#F44336" opacity="0.5" />
                 
                 {/* Text on vest back since facing back-ish (abstract) */}
                 <text x="210" y="-80" fill="#3A7B85" fontSize="22" fontWeight="bold" transform="rotate(-10)">
                   CFPA Jdiouia
                 </text>
              </g>
            }
          />
        );

      case 'accounting':
        return (
          <Person 
            shirtColor="#FFFFFF" 
            logoColor={primary}
            facingRight={false}
            action={
              <g transform="translate(-150, -100)">
                {/* Documents and charts on wall */}
                <rect x="-100" y="-50" width="80" height="100" fill="#FFFFFF" stroke={border} strokeWidth="2" />
                <line x1="-90" y1="-30" x2="-30" y2="-30" stroke={dark} strokeWidth="2" />
                <line x1="-90" y1="-10" x2="-40" y2="-10" stroke={dark} strokeWidth="2" />
                <line x1="-90" y1="10" x2="-50" y2="10" stroke={dark} strokeWidth="2" />
                {/* Pie Chart Pin */}
                <circle cx="-60" cy="50" r="20" fill={accent} />
                <path d="M -60 50 L -60 30 A 20 20 0 0 1 -40 50 Z" fill={secondary} />
              </g>
            }
            foreground={
              <g transform="translate(0, 100)">
                 {/* Desk */}
                 <rect x="-300" y="20" width="450" height="20" fill={dark} />
                 {/* Large Calculator */}
                 <rect x="-160" y="-10" width="80" height="30" rx="5" fill={primary} />
                 <rect x="-150" y="-5" width="20" height="10" fill="#FFFFFF" />
                 {/* Paper stack */}
                 <rect x="-250" y="0" width="60" height="20" fill="#FFFFFF" stroke={border} strokeWidth="2" />
                 {/* Arm typing/calculating */}
                 <path d="M -50 -50 L -120 -20 L -100 0 L -30 -30 Z" fill={skinColor} />
              </g>
            }
          />
        );

      case 'autoelectrician':
        return (
          <Person 
            shirtColor={secondary} 
            logoColor="#FFFFFF"
            facingRight={false}
            action={
              <g transform="translate(-250, 0)">
                {/* Car open hood */}
                <path d="M -50 150 L -50 0 L 100 -50 L 100 0 L -30 60 Z" fill={primary} opacity="0.9" />
                {/* Battery Engine block */}
                <rect x="-20" y="80" width="80" height="60" rx="10" fill={dark} />
                <rect x="0" y="70" width="10" height="10" fill="#F44336" />
                <rect x="30" y="70" width="10" height="10" fill="#2196F3" />
              </g>
            }
            foreground={
              <g transform="translate(-100, 50)">
                 {/* Multimeter */}
                 <rect x="-20" y="-80" width="40" height="60" rx="5" fill="#FFC107" />
                 <rect x="-10" y="-70" width="20" height="20" fill={dark} />
                 {/* Cables */}
                 <path d="M -20 -20 Q -50 50 -100 30" fill="none" stroke="#F44336" strokeWidth="4" />
                 <path d="M 0 -20 Q -80 70 -130 50" fill="none" stroke={dark} strokeWidth="4" />
                 {/* Arm holding multimeter */}
                 <path d="M 100 -50 L 0 -50 L -10 -30 L 100 -30 Z" fill={skinColor} stroke={skinColor} strokeWidth="1" />
              </g>
            }
          />
        );

      case 'welding':
        return (
          <Person 
             shirtColor={dark} 
             logoColor={accent}
             facingRight={false}
             action={
               <g transform="translate(-150, 100)">
                 {/* Metal workpiece */}
                 <path d="M -100 0 L 50 0 L 80 50 L -100 50 Z" fill={secondary} />
                 <line x1="-50" y1="0" x2="30" y2="50" stroke={dark} strokeWidth="5" />
               </g>
             }
             foreground={
               <g transform="translate(-80, -50)">
                 {/* Welding mask overlay on head */}
                 <g transform="translate(80, -50)">
                    <rect x="-40" y="-40" width="80" height="80" rx="10" fill={dark} />
                    <rect x="-30" y="-20" width="30" height="15" fill="#00E676" opacity="0.8" />
                 </g>
                 {/* Apron */}
                 <path d="M 30 50 L 30 200 L 100 200 L 100 50 Z" fill={primary} opacity="0.9" />

                 {/* Hand holding torch */}
                 <path d="M 80 50 L 0 80 L 10 100 L 90 70 Z" fill={skinColor} />
                 
                 {/* Welding Torch */}
                 <rect x="-20" y="80" width="50" height="15" fill={dark} transform="rotate(30 -20 80)" />
                 
                 {/* Sparks and electric arc */}
                 <circle cx="-50" cy="120" r="15" fill="#FFEB3B" opacity="0.8" />
                 <circle cx="-50" cy="120" r="35" fill="#FFC107" opacity="0.4" />
                 <line x1="-50" y1="120" x2="-100" y2="80" stroke="#FF9800" strokeWidth="3" />
                 <line x1="-50" y1="120" x2="-80" y2="160" stroke="#FF9800" strokeWidth="3" />
                 <line x1="-50" y1="120" x2="-10" y2="170" stroke="#FF9800" strokeWidth="3" />
               </g>
             }
          />
        );

      default:
        // Generic fallback with tools
        return (
          <Person 
            shirtColor={primary} 
            logoColor="#FFFFFF"
            facingRight={true}
            action={
              <g transform="translate(100, -50)">
                 <rect x="-80" y="-80" width="160" height="160" rx="20" fill="none" stroke={secondary} strokeWidth="10" />
                 <circle cx="0" cy="0" r="40" fill={accent} opacity="0.5" />
                 <path d="M -30 -30 L 30 30 M -30 30 L 30 -30" stroke={dark} strokeWidth="10" />
              </g>
            }
          />
        );
    }
  };

  return (
    <svg 
      className={`w-full h-full ${className}`} 
      viewBox="0 0 800 600" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <ZelligePattern />
      </defs>
      
      {/* Background layer */}
      <rect width="800" height="600" fill={bg} />
      <rect width="800" height="600" fill="url(#zellige_new)" />

      {/* Main Illustration */}
      {renderIllustration()}

      {/* Frame border */}
      <rect x="20" y="20" width="760" height="560" rx="30" fill="none" stroke={border} strokeWidth="4" />
    </svg>
  );
}

