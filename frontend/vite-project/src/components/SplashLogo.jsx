import { useEffect, useState } from "react";

export default function SplashLogo() {
  const [fadeOut, setFadeOut] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Start fade-out after 2.5 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    // Remove splash completely after 3 seconds
    const hideTimer = setTimeout(() => setShow(false), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#111",
        transition: "opacity 0.5s ease",
        opacity: fadeOut ? 0 : 1,
      }}
    >
      <img
        src="/ub-logo.png"
        alt="UpBrainiacs Logo"
        style={{
          width: "200px",
          animation: "fadeIn 2s", // fade-in when it appears
        }}
      />
    </div>
  );
}
