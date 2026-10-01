import { Link } from "react-router-dom";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const FooterLink = ({ href, children, external, onClick }: FooterLinkProps) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 no-underline text-[13px] hover:text-white transition-colors"
      >
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="text-white/70 no-underline text-[13px] hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      to={href}
      className="text-white/70 no-underline text-[13px] hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
};

interface ClappFooterProps {
  onOpenModal?: (type: string) => void;
}

const ClappFooter = ({ onOpenModal }: ClappFooterProps) => {
  return (
    <footer className="py-16 px-5 border-t border-white/10 bg-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-20 mb-10">
          {/* Brand Section */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.1em] text-white/50 mb-4 font-semibold">
              CLAPP
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Enterprise AI orchestration platform. Research, evaluate, orchestrate, govern.
              200+ integrations. Deploy in 10 days.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.1em] text-white/50 mb-4 font-semibold">
              PRODUCTS
            </h4>
            <ul className="list-none space-y-2.5">
              <li>
                <FooterLink href="https://performance.clapp.in" external>
                  Clapp Atlas
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://usemoss.dev" external>
                  Moss
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenModal?.("northstar-waitlist");
                  }}
                >
                  Clapp Northstar
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenModal?.("custom");
                  }}
                >
                  Custom
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.1em] text-white/50 mb-4 font-semibold">
              COMPANY
            </h4>
            <ul className="list-none space-y-2.5">
              <li>
                <FooterLink href="https://calendly.com/clappp/30min" external>
                  Book Demo
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/blogs">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="/features">Features</FooterLink>
              </li>
              <li>
                <FooterLink href="/use-cases">Use Cases</FooterLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.1em] text-white/50 mb-4 font-semibold">
              LEGAL
            </h4>
            <ul className="list-none space-y-2.5">
              <li>
                <FooterLink href="/security">Security</FooterLink>
              </li>
              <li>
                <FooterLink href="/privacy-policy">Privacy</FooterLink>
              </li>
              <li>
                <FooterLink href="/terms">Terms</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-xs mb-3">
            © 2026 Clapp B.V. Enterprise AI orchestration platform.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 justify-center items-center mb-3">
            <a
              href="https://instagram.com/clappai_official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-emerald-500 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="http://linkedin.com/company/108947382"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-emerald-500 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Contact */}
          <p className="text-white/70 text-sm mb-2">
            Email us at{" "}
            <a href="mailto:info@clapp.in" className="text-emerald-500 no-underline">
              info@clapp.in
            </a>
          </p>

          <p className="text-white/40 text-[13px]">
            Clapp B.V. registered in the Netherlands
          </p>
          <p className="text-white/40 text-[13px] mt-1">
            Built by teams from USA · Netherlands · India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ClappFooter;
