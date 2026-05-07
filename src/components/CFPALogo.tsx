import React from 'react';

export function CFPALogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
       <circle cx="100" cy="100" r="95" fill="white" stroke="#C9A96E" strokeWidth="3" />
       <circle cx="100" cy="100" r="85" fill="none" stroke="#C67B4B" strokeWidth="1" strokeDasharray="4 4" />
       
       <path id="topTextPath" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
       <text>
         <textPath href="#topTextPath" startOffset="50%" textAnchor="middle" fill="#3A7B85" fontSize="11" fontWeight="bold" fontFamily="system-ui" direction="rtl">
           وزارة التكوين والتعليم المهنيين
         </textPath>
       </text>

       <path id="middleTextPath" d="M 40,100 A 60,60 0 0,1 160,100" fill="none" />
       <text>
         <textPath href="#middleTextPath" startOffset="50%" textAnchor="middle" fill="#2D2D2D" fontSize="8" fontWeight="bold" fontFamily="system-ui" direction="rtl">
           الجمهورية الجزائرية الديمقراطية الشعبية
         </textPath>
       </text>
       
       <path id="bottomTextPath" d="M 170,105 A 70,70 0 0,1 30,105" fill="none" />
       <text>
         <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle" fill="#C67B4B" fontSize="12" fontWeight="bold" fontFamily="system-ui" direction="rtl">
           مركز التكوين المهني • جديوية
         </textPath>
       </text>

       {/* Emblem abstraction */}
       <g transform="translate(100, 110)">
         {/* Crescent */}
         <path d="M-15,-5 A 20,20 0 1,0 15,-5 A 15,15 0 1,1 -15,-5" fill="#E62C2C" />
         {/* Star */}
         <path d="M0,-12 L2,-6 L8,-6 L3,-2 L5,4 L0,0 L-5,4 L-3,-2 L-8,-6 L-2,-6 Z" fill="#E62C2C" />
         {/* Hand/Leaves/Sun abstraction */}
         <path d="M-10,-20 Q-5,-30 0,-25 Q5,-30 10,-20 Q5,-15 0,-15 Q-5,-15 -10,-20" fill="none" stroke="#3A7B85" strokeWidth="2" />
         <circle cx="0" cy="-35" r="5" fill="none" stroke="#C9A96E" strokeWidth="2" strokeDasharray="2 2" />
       </g>
    </svg>
  );
}
