import { Link } from "react-router-dom";

const ClappNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex justify-between items-center h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img src="/clapp-logo.png" alt="Clapp" className="h-8 w-8" />
          <span className="text-base font-semibold tracking-[0.1em] text-white">CLAPP</span>
        </Link>
        <a
          href="https://calendly.com/clappp/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-5 py-2.5 rounded font-semibold text-[13px] tracking-wide no-underline hover:opacity-90 transition-opacity"
        >
          BOOK DEMO
        </a>
      </div>
    </nav>
  );
};

export default ClappNavbar;
