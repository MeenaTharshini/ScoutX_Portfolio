"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const animationFrameRef = useRef<number | null>(null);

  const mouse = useRef({
    x: -100,
    y: -100,
  });

  const ring = useRef({
    x: -100,
    y: -100,
  });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't enable custom cursor on touch devices
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(${e.clientX}px, ${e.clientY}px, 0)
          translate(-50%, -50%)
        `;
      }

      const target = e.target as HTMLElement;

      const interactiveElement = target.closest(
        "a, button, input, textarea, select, [role='button'], .cursor-hover"
      );

      setIsHovering(Boolean(interactiveElement));
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      const targetX = mouse.current.x;
      const targetY = mouse.current.y;

      ring.current.x +=
        (targetX - ring.current.x) * 0.12;

      ring.current.y +=
        (targetY - ring.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate3d(
            ${ring.current.x}px,
            ${ring.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    document.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    animationFrameRef.current =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* =====================================================
          CORE CURSOR
      ====================================================== */}

      <div
        ref={dotRef}
        className="
          fixed
          top-0
          left-0
          z-[10000]
          pointer-events-none
          will-change-transform
        "
      >
        <div
          className={`
            rounded-full
            bg-[#E7C979]
            transition-all
            duration-200
            ease-out

            shadow-[0_0_10px_rgba(231,201,121,0.9)]
            ${
              isHovering
                ? "w-2 h-2 opacity-70"
                : "w-2.5 h-2.5 opacity-100"
            }
          `}
        />
      </div>

      {/* =====================================================
          OUTER RING
      ====================================================== */}

      <div
        ref={ringRef}
        className="
          fixed
          top-0
          left-0
          z-[9999]
          pointer-events-none
          will-change-transform
        "
      >
        <div
          className={`
            rounded-full
            border
            transition-all
            duration-300
            ease-out

            ${
              isHovering
                ? `
                  w-14
                  h-14
                  border-[#D4AF37]/70
                  bg-[#D4AF37]/5
                  shadow-[0_0_35px_rgba(212,175,55,0.18)]
                `
                : `
                  w-9
                  h-9
                  border-[#D4AF37]/40
                  shadow-[0_0_20px_rgba(212,175,55,0.08)]
                `
            }
          `}
        />
      </div>
    </>
  );
}