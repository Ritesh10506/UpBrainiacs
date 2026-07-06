import { useEffect, useRef, useState } from "react";
import "./Stats.css";

// Splits "1000+" -> { value: 1000, suffix: "+" }, "95%" -> { value: 95, suffix: "%" }
const parseStat = (str) => {
  const match = str.match(/^([\d.]+)(.*)$/);
  if (!match) return { value: 0, suffix: str };
  return { value: parseFloat(match[1]), suffix: match[2] };
};

const StatCard = ({ number, title }) => {
  const { value: target, suffix } = parseStat(number);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCount();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateCount = () => {
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress); // easeOutQuad

      const current = target % 1 === 0
        ? Math.floor(eased * target)
        : (eased * target).toFixed(1);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(tick);
  };

  return (
    <div className="stat-card" ref={ref}>
      <h2>{count}{suffix}</h2>
      <p>{title}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { number: "1000+", title: "Students Guided" },
    { number: "60+", title: "Partner Universities" },
    { number: "4+", title: "Countries" },
    { number: "95%", title: "Success Rate" }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <StatCard key={index} number={item.number} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Stats;