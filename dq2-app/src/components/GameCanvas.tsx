"use client";

import { useEffect, useRef } from "react";

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!canvasRef.current || initialized.current) return;
    initialized.current = true;

    import("@/game/engine").then((mod) => {
      if (canvasRef.current) {
        mod.initGame(canvasRef.current);
      }
    });
  }, []);

  return (
    <>
      <div id="gc">
        <canvas ref={canvasRef} id="cv" width={768} height={720} />
      </div>
      <div id="pad">
        <div className="dpad">
          <button className="up" data-key="ArrowUp">▲</button>
          <button className="down" data-key="ArrowDown">▼</button>
          <button className="left" data-key="ArrowLeft">◀</button>
          <button className="right" data-key="ArrowRight">▶</button>
          <div className="center">+</div>
        </div>
        <div className="ab-area">
          <div className="ab-row">
            <button className="btn-b" data-key="KeyX">B</button>
            <button data-key="KeyZ">A</button>
          </div>
          <div className="meta-row">
            <button data-key="Escape">MENU</button>
            <button data-key="Enter">START</button>
          </div>
        </div>
      </div>
    </>
  );
}
