import React, { useRef, useEffect, useState } from "react";


const MouseTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const maxPositions = 13;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPositions((prev) => {
        const newPositions = [{ x: clientX, y: clientY }, ...prev];
        return newPositions.slice(0, maxPositions); 
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;
    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      positions.forEach((pos, index) => {
        const opacity = 1 - index * 0.05;
        const radius = 5 - index * 0.3;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, Math.max(radius, 2), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(110, 10, 50, ${opacity})`; 
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [positions]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    />
  );
};

export default MouseTrail;
