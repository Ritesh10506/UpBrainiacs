import { useEffect, useRef, useState } from "react";
import "./Benefits.css";

const benefits = [
  {
    num: "01",
    title: "University Selection",
    desc: "We help students choose the right NMC-approved medical universities based on their budget, ranking and career goals.",
    image: "/about/university.png",
  },
  {
    num: "02",
    title: "Admission Support",
    desc: "Complete documentation, application process and communication with universities — we handle it all.",
    image: "/about/admission.png",
  },
  {
    num: "03",
    title: "Visa Assistance",
    desc: "End-to-end visa guidance including documentation, form filling and interview preparation.",
    image: "/about/visa.png",
  },
  {
    num: "04",
    title: "Student Support",
    desc: "24/7 support for students including accommodation, academics and personal assistance.",
    image: "/about/student.png",
  },
  {
    num: "05",
    title: "Career Counselling",
    desc: "Expert one-on-one counselling to guide students towards the right medical career path.",
    image: "/offerings/counseling.png",
  },
  {
    num: "06",
    title: "FMGE/NEXT Preparation",
    desc: "Dedicated preparation support for FMGE/NEXT examination with expert mentors.",
    image: "/offerings/admission.png",
  },
  {
    num: "07",
    title: "Lifelong Health Insurance",
    desc: "Health insurance support for students throughout their entire abroad journey.",
    image: "/offerings/visa.png",
  },
  {
    num: "08",
    title: "Travel Assistance",
    desc: "We arrange safe and comfortable travel for students to their dream destination.",
    image: "/offerings/travel.png",
  },
];

// Tune these to change the feel — CSS reads the same values via CSS variables,
// so they never fall out of sync.
const PIN_TOP_OFFSET = 90;        // gap from top of viewport while pinned
const SCROLL_PER_CARD = 300;      // scroll distance used to reveal each card
const COLLAPSED_ROW_HEIGHT = 56;  // slim header height
const EXPANDED_CARD_HEIGHT = 440; // active card height
const ROW_GAP = 10;

const PIN_HEIGHT =
  (benefits.length - 1) * (COLLAPSED_ROW_HEIGHT + ROW_GAP) +
  EXPANDED_CARD_HEIGHT +
  ROW_GAP * 2;

const Benefits = () => {
  const trackRef = useRef(null);
  const pinRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = null;

    const update = () => {
      const track = trackRef.current;
      const pin = pinRef.current;
      if (!track || !pin) return;

      // Mobile — no pinning, just show the final merged state statically
      if (window.innerWidth <= 900) {
        pin.style.position = "static";
        pin.style.top = "";
        pin.style.left = "";
        pin.style.width = "";
        if (activeIndexRef.current !== benefits.length - 1) {
          activeIndexRef.current = benefits.length - 1;
          setActiveIndex(benefits.length - 1);
        }
        return;
      }

      const trackRect = track.getBoundingClientRect();
      const scrollableRange = track.offsetHeight - PIN_HEIGHT;
      const start = trackRect.top;

      if (start > PIN_TOP_OFFSET) {
        pin.style.position = "static";
        pin.style.top = "";
        pin.style.left = "";
        pin.style.width = "";
      } else if (start > PIN_TOP_OFFSET - scrollableRange) {
        pin.style.position = "fixed";
        pin.style.top = `${PIN_TOP_OFFSET}px`;
        pin.style.left = `${trackRect.left}px`;
        pin.style.width = `${track.offsetWidth}px`;
      } else {
        pin.style.position = "absolute";
        pin.style.top = `${track.offsetHeight - PIN_HEIGHT}px`;
        pin.style.left = "0px";
        pin.style.width = "100%";
      }

      const scrolledIntoPin = PIN_TOP_OFFSET - start;
      const progress = Math.min(
        Math.max(scrolledIntoPin / scrollableRange, 0),
        1
      );

      const idx = Math.min(
        benefits.length - 1,
        Math.floor(progress * benefits.length)
      );

      if (idx !== activeIndexRef.current) {
        activeIndexRef.current = idx;
        setActiveIndex(idx);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        update();
        frame = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const trackHeight = benefits.length * SCROLL_PER_CARD + PIN_HEIGHT;

  return (
    <section className="benefits-section" id="benefits">
      {/* Big background image behind the whole section */}
      <div className="benefits-bg" />
      <div className="benefits-bg-overlay" />

      <div className="benefits-content">
        <div className="benefits-header">
          <span className="benefits-eyebrow">BENEFITS OF</span>
          <h2 className="benefits-brandline">
            <span className="brand-up">Up</span>
            <span className="brand-brainiacs">Brainiacs</span>
          </h2>
          <h3 className="benefits-subhead">
            Your Trusted Partner for MBBS Abroad Admissions
          </h3>
          <p className="benefits-para">
            From university selection to graduation, we guide students
            through every stage of their medical education journey.
          </p>
          <div className="benefits-divider" />
        </div>

        <div
          className="benefits-track"
          ref={trackRef}
          style={{ height: `${trackHeight}px` }}
        >
          <div
            className="benefits-pin"
            ref={pinRef}
            style={{ height: `${PIN_HEIGHT}px` }}
          >
            <div
              className="benefits-stack"
              style={{
                "--collapsed-h": `${COLLAPSED_ROW_HEIGHT}px`,
                "--expanded-h": `${EXPANDED_CARD_HEIGHT}px`,
                "--row-gap": `${ROW_GAP}px`,
              }}
            >
              {benefits.slice(0, activeIndex + 1).map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={item.num}
                    className={`benefit-row ${isActive ? "is-active" : "is-collapsed"}`}
                    style={{ animationDelay: `${index * 0.4}s` }}
                  >
                    {isActive ? (
                      <>
                        <div className="benefit-row-head">
                          <span className="benefit-num">{item.num}</span>
                          <h3>{item.title}</h3>
                        </div>
                        <div className="benefit-body">
                          <div className="benefit-image">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <p className="benefit-desc">{item.desc}</p>
                        </div>
                      </>
                    ) : (
                      <div className="benefit-row-head">
                        <span className="benefit-num">{item.num}</span>
                        <h3>{item.title}</h3>
                        <div className="benefit-thumb">
                          <img src={item.image} alt={item.title} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
