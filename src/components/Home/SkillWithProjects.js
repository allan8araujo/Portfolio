import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

function getPositions(count) {
  const radius = 185;
  return Array.from({ length: count }, (_, i) => {
    const angle = -90 + (i / count) * 360;
    const rad = (angle * Math.PI) / 180;
    return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
  });
}

export default function SkillWithProjects({ icon, label, projects = [] }) {
  const [hovered, setHovered] = useState(false);
  const [scrollHiding, setScrollHiding] = useState(false);
  const [rect, setRect] = useState(null);
  const wrapperRef = useRef(null);
  const leaveTimer = useRef(null);
  const navigate = useNavigate();
  const positions = getPositions(projects.length);
  const THUMB = 130;

  const clearLeave = () => clearTimeout(leaveTimer.current);

  const startLeave = () => {
    leaveTimer.current = setTimeout(() => setHovered(false), 1500);
  };

  const instantHide = () => {
    clearLeave();
    setScrollHiding(true);
    setHovered(false);
    setTimeout(() => setScrollHiding(false), 150);
  };

  const handleEnter = () => {
    clearLeave();
    window.dispatchEvent(new CustomEvent("skill-focus", { detail: { label } }));
    if (wrapperRef.current) {
      setRect(wrapperRef.current.getBoundingClientRect());
    }
    setHovered(true);
  };

  useEffect(() => {
    const onScroll = () => instantHide();
    const onOtherFocus = (e) => { if (e.detail.label !== label) instantHide(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("skill-focus", onOtherFocus);
    return () => {
      clearLeave();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("skill-focus", onOtherFocus);
    };
  }, [label]);

  const cx = rect ? rect.left + rect.width / 2 : 0;
  const cy = rect ? rect.top + rect.height / 2 : 0;

  return (
    <>
      <div
        ref={wrapperRef}
        className={`skill-wrapper${hovered && projects.length ? " skill-ring" : ""}`}
        style={{ zIndex: hovered ? 50 : "auto" }}
        onMouseEnter={handleEnter}
        onMouseLeave={startLeave}
      >
        {icon}
        <p style={{ fontSize: 24 }}>{label}</p>
      </div>

      {rect &&
        ReactDOM.createPortal(
          <>
            {projects.map((proj, i) => (
              <div
                key={i}
                className="skill-thumb"
                style={{
                  position: "fixed",
                  left: cx + positions[i].x - THUMB / 2,
                  top: cy + positions[i].y - THUMB / 2,
                  width: THUMB,
                  height: THUMB,
                  opacity: hovered ? 1 : 0,
                  transform: hovered ? "scale(1)" : "scale(0.2)",
                  transition: scrollHiding ? "opacity 0.1s ease, transform 0.1s ease" : undefined,
                  transitionDelay: hovered ? `${i * 65}ms` : "0ms",
                  pointerEvents: hovered ? "auto" : "none",
                  cursor: "pointer",
                  zIndex: 9999,
                }}
                onMouseEnter={clearLeave}
                onMouseLeave={startLeave}
                onClick={() => {
                  setHovered(false);
                  if (proj.state) navigate("/project-details", { state: proj.state });
                }}
              >
                {(proj.miniatura ?? proj.img)
                  ? <img src={proj.miniatura ?? proj.img} alt={proj.name} />
                  : <div className="skill-thumb-placeholder"><AiFillGithub /></div>
                }
                <span className="skill-thumb-label">{proj.name}</span>
              </div>
            ))}
          </>,
          document.body
        )}
    </>
  );
}
