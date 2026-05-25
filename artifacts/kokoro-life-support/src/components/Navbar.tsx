import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X, Calendar, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Japan Life Support", path: "/japan" },
    { name: "Korea Life Support", path: "/korea" },
    { name: "Settlement Consultation", path: "/consultation" },
    { name: "Blog", path: "/blog" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
              <Leaf size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight tracking-wide text-foreground">
                KOKORO LIFE SUPPORT
              </span>
              <span className="text-[10px] text-muted-foreground font-serif tracking-wider hidden sm:block">
                한국과 일본을 연결하는 생활지원 플랫폼
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-muted/80",
                  location === link.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
                data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="rounded-full border-border bg-background/50 hover:bg-muted font-medium"
              data-testid="nav-kakaotalk"
            >
              KakaoTalk 상담
            </Button>
            <Button
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 shadow-sm gap-2"
              data-testid="nav-book-consultation"
              asChild
            >
              <Link href="/consultation">
                <Calendar size={16} />
                상담 예약하기
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={cn(
          "lg:hidden absolute top-20 left-0 w-full bg-background border-b border-border transition-all duration-300 overflow-hidden shadow-lg",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                location === link.path
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-muted/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/50">
            <Button variant="outline" className="w-full justify-center rounded-xl" data-testid="mobile-nav-kakaotalk">
              KakaoTalk 상담
            </Button>
            <Button className="w-full justify-center rounded-xl gap-2 shadow-sm" asChild data-testid="mobile-nav-book">
               <Link href="/consultation" onClick={() => setIsMobileMenuOpen(false)}>
                 <Calendar size={16} />
                 상담 예약하기
               </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
