import React, { useState, useRef } from "react";

export const AnimatedTooltip = ({ children, content }) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  const show = () => {
    clearTimeout(timeoutRef.current);
    setVisible(true);
  };

  const hide = () => {
    timeoutRef.current = setTimeout(() => setVisible(false), 80);
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {children}

      <div
        className={`
          absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50
          bg-[#151030] border border-white/10 rounded-xl px-3 py-2.5 shadow-xl
          flex flex-col items-center gap-1 min-w-max
          pointer-events-none
          transition-all duration-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
        `}
      >
        {/* kleiner Pfeil */}
        <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#151030] border-r border-b border-white/10 rotate-45" />
        {content}
      </div>
    </div>
  );
};
