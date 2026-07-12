import "./Countries.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";

const AUTOPLAY_MS = 2600;

const Countries = () => {
  const navigate = useNavigate();

  const countries = [
    {
      name: "Georgia",
      image: "/countries/georgia.jpg",
      description:
        "Affordable MBBS education with globally recognized universities and English taught medical programs.",
      page: "georgia",
    },
    {
      name: "Russia",
      image: "/countries/russia.jpg",
      description:
        "Advanced medical universities with quality education and international recognition.",
      page: "russia",
    },
    {
      name: "Kazakhstan",
      image: "/countries/kazakhstan.jpg",
      description:
        "Popular choice for medical students with affordable fees and modern facilities.",
      page: "kazakhstan",
    },
    {
      name: "Romania",
      image: "/countries/romania.jpg",
      description:
        "European medical education with modern hospitals and global exposure.",
      page: "romania",
    },
    {
      name: "Uzbekistan",
      image: "/countries/uzbekistan.jpg",
      description:
        "Affordable medical programs with simple admission process.",
      page: "uzbekistan",
    },
    {
      name: "Kyrgyzstan",
      image: "/countries/kyrgyzstan.jpg",
      description:
        "Low cost medical education with international student friendly universities.",
      page: "kyrgyzstan",
    },
    {
      name: "Poland",
      image: "/countries/poland.jpg",
      description:
        "Quality education in modern universities with strong global recognition.",
      page: "poland",
    },
    {
      name: "Nepal",
      image: "/countries/nepal.jpg",
      description:
        "Affordable education with cultural diversity and easy accessibility.",
      page: "nepal",
    },
  ];

  const count = countries.length;

  const [active, setActive] = useState(0);
  const [dragX, setDragX] = useState(0);
  const dragState = useRef({ startX: 0, dragging: false });
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

  // responsive card sizing (mirrors your existing mobile-breakpoint approach)
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 640
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // scroll-triggered fade-in for the heading, same IntersectionObserver
  // pattern used in the Stats count-up component
  const [headingVisible, setHeadingVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback(
    (i) => setActive(((i % count) + count) % count),
    [count]
  );

  // autoplay, loops infinitely in both directions
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) setActive((a) => (a + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [count]);

  const pause = () => (pausedRef.current = true);
  const resume = () => (pausedRef.current = false);

  const onPointerDown = (e) => {
    pause();
    dragState.current = {
      startX: e.clientX ?? e.touches?.[0]?.clientX ?? 0,
      dragging: true,
    };
  };
  const onPointerMove = (e) => {
    if (!dragState.current.dragging) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    setDragX(x - dragState.current.startX);
  };
  const endDrag = () => {
    if (!dragState.current.dragging) return;
    dragState.current.dragging = false;
    if (dragX < -60) goTo(active + 1);
    else if (dragX > 60) goTo(active - 1);
    setDragX(0);
    resume();
  };

  const cardW = isMobile ? 200 : 320;
  const cardH = isMobile ? 300 : 440;
  const spacingX = isMobile ? 118 : 235;
  const depthZ = isMobile ? 80 : 130;
  const rotateDeg = isMobile ? -22 : -30;
  const maxVisibleOffset = isMobile ? 2 : 3;

  return (
    <section className="countries-section">
      <div
        className="section-header"
        ref={headingRef}
        style={{
          opacity: headingVisible ? 1 : 0,
          transform: headingVisible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <span className="eyebrow">EXPLORE COUNTRIES</span>
        <h2>
          Popular Study <span className="highlight">Destinations</span>
        </h2>
        <div className="header-divider" />
        <p className="section-subtitle">
          Discover world-class medical education in top countries with
          affordable tuition and global recognition.
        </p>
      </div>

      <div
        className="carousel-wrapper"
        style={{ height: cardH + 40 }}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={endDrag}
        onMouseEnter={pause}
      >
        {countries.map((country, i) => {
          let offset = i - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;

          const dragOffset = dragX / 5.5;
          const abs = Math.abs(offset);
          const hidden = abs > maxVisibleOffset;

          const translateX = offset * spacingX + dragOffset;
          const translateZ = -abs * depthZ;
          const rotateY = offset * rotateDeg;
          const scale = Math.max(1 - abs * 0.16, 0.5);
          const opacity = hidden ? 0 : 1 - abs * 0.22;
          const zIndex = 100 - abs;
          const isActive = offset === 0;

          return (
            <div
              key={country.page}
              className={`country-card-3d${isActive ? " is-active" : ""}`}
              style={{
                width: cardW,
                height: cardH,
                marginTop: -cardH / 2,
                marginLeft: -cardW / 2,
                zIndex,
                opacity,
                pointerEvents: hidden ? "none" : "auto",
                transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                transition: dragState.current.dragging
                  ? "none"
                  : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
              }}
              onClick={() => {
                if (!isActive) {
                  goTo(i);
                } else {
                  navigate(`/mbbs-in/${country.page}`);
                }
              }}
            >
              <div className="card-inner">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${country.image})` }}
                />
                <div className="card-text">
                  <h3>{country.name}</h3>
                  <p>{country.description}</p>
                  {isActive && (
                    <span className="explore-link">
                      Explore Universities →
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="carousel-dots">
        {countries.map((c, i) => (
          <button
            key={c.page}
            aria-label={`Go to ${c.name}`}
            className={`dot${i === active ? " active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Countries;
