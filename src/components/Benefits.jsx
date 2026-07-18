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

// Desktop carousel tuning
const COLLAPSED_WIDTH = 90;
const COLLAPSED_HEIGHT = 340;
const OPEN_WIDTH = 560;
const OPEN_HEIGHT = 460;
const GAP = 14;
const BLUR_AMOUNT = 3;
const DURATION = 0.35;

// Mobile accordion tuning
const MOBILE_COLLAPSED_HEIGHT = 64;
const MOBILE_OPEN_HEIGHT = 320;

const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth <= 900;

const Benefits = () => {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(isMobile());
  const closeTimer = useRef(0);

  useEffect(() => {
    const onResize = () => setMobile(isMobile());
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(closeTimer.current);
    };
  }, []);

  // Desktop — hovering a card opens it directly, no click needed
  const handleEnter = (i) => {
    if (mobile) return;
    setOpen(i);
  };

  const handleContainerLeave = () => {
    if (mobile) return;
    setOpen(null);
  };

  // Mobile — tap to open/close since there's no hover
  const handleTap = (i) => {
    if (!mobile) return;
    setOpen((prev) => (prev === i ? null : i));
  };

  const sizeFor = (i) => {
    if (mobile) {
      return open === i
        ? { width: "100%", height: MOBILE_OPEN_HEIGHT }
        : { width: "100%", height: MOBILE_COLLAPSED_HEIGHT };
    }
    return open === i
      ? { width: OPEN_WIDTH, height: OPEN_HEIGHT }
      : { width: COLLAPSED_WIDTH, height: COLLAPSED_HEIGHT };
  };

  const barTransition = `width ${DURATION}s ease-in-out, height ${DURATION}s ease-in-out, filter ${DURATION}s ease-in-out, opacity ${DURATION}s ease-in-out`;

  return (
    <section className="benefits-section" id="benefits">
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
          className={`mc-container ${mobile ? "mc-mobile" : ""}`}
          style={{ gap: mobile ? 12 : GAP }}
          onMouseLeave={handleContainerLeave}
        >
          {benefits.map((item, i) => {
            const { width, height } = sizeFor(i);
            const blurred = !mobile && open !== null && i !== open;
            const isOpen = open === i;

            return (
              <div
                key={item.num}
                className={`mc-bar ${isOpen ? "mc-bar-open" : ""} ${
                  mobile ? "mc-bar-mobile" : ""
                }`}
                onMouseEnter={() => handleEnter(i)}
                onClick={() => handleTap(i)}
                style={{
                  width,
                  height,
                  transition: barTransition,
                  zIndex: isOpen ? 3 : 2,
                  filter: blurred ? `blur(${BLUR_AMOUNT}px)` : "none",
                  opacity: blurred ? 0.55 : 1,
                  backgroundImage: mobile ? "none" : `url(${item.image})`,
                }}
              >
                {mobile ? (
                  <>
                    <div className="mc-mobile-header">
                      <div
                        className="mc-mobile-thumb"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <span className="mc-num mc-num-mobile">{item.num}</span>
                      <h3 className="mc-mobile-title">{item.title}</h3>
                      <span
                        className={`mc-chevron ${isOpen ? "mc-chevron-open" : ""}`}
                      >
                        ⌄
                      </span>
                    </div>

                    {isOpen && (
                      <div className="mc-mobile-body">
                        <p>{item.desc}</p>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="mc-overlay" />

                    {!isOpen && (
                      <div className="mc-collapsed-label">
                        <span className="mc-num">{item.num}</span>
                      </div>
                    )}

                    {isOpen && (
                      <div className="mc-open-content">
                        <span className="mc-num mc-num-open">{item.num}</span>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        <p className="benefits-hint">
          {mobile ? "Tap a card to explore." : "Hover a card to explore."}
        </p>
      </div>
    </section>
  );
};

export default Benefits;
