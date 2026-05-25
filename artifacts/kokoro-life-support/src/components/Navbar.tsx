import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X, Calendar, MessageCircle, ChevronDown, Leaf } from "lucide-react";
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
    { name: "홈", path: "/" },
    { name: "한국생활지원", path: "/korea", hasDropdown: true },
    { name: "일본생활지원", path: "/japan", hasDropdown: true },
    { name: "정착상담", path: "/consultation", hasDropdown: true },
    { name: "블로그", path: "/blog" },
    { name: "후기", path: "/reviews" },
    { name: "문의하기", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/95 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <Link href="/" className="flex items-center gap-2.5 group" data-testid="nav-logo">
            <div className="w-9 h-9 rounded-full bg-accent/25 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
              <Leaf size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-[15px] leading-tight tracking-wide text-foreground">
                KOKORO LIFE SUPPORT
              </span>
              <span className="text-[9px] text-muted-foreground font-sans tracking-wide hidden sm:block">
                한국과 일본을 연결하는 생활지원 플랫폼
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "flex items-center gap-0.5 px-3.5 py-2 text-[13.5px] font-medium transition-colors hover:text-foreground",
                  location === link.path
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                )}
                data-testid={`nav-link-${link.name}`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={13} className="opacity-60 mt-0.5" />}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-border bg-transparent hover:bg-muted font-medium text-[13px] gap-1.5 px-4 h-9"
              data-testid="nav-kakaotalk"
            >
              <MessageCircle size={14} />
              카카오톡 상담
            </Button>
            <Button
              size="sm"
              className="rounded-full bg-[#0F3D3E] text-white hover:bg-[#0d3435] font-medium text-[13px] gap-1.5 px-4 h-9 shadow-sm"
              data-testid="nav-book-consultation"
              asChild
            >
              <Link href="/consultation">
                <Calendar size={14} />
                상담 예약하기
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden absolute top-[68px] left-0 w-full bg-white border-b border-border transition-all duration-300 overflow-hidden shadow-lg",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                location === link.path
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-muted/80"
              )}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} className="opacity-50" />}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/50">
            <Button variant="outline" className="w-full justify-center rounded-xl gap-2" data-testid="mobile-nav-kakaotalk">
              <MessageCircle size={15} />
              카카오톡 상담
            </Button>
            <Button className="w-full justify-center rounded-xl gap-2 shadow-sm bg-[#0F3D3E] text-white hover:bg-[#0d3435]" asChild data-testid="mobile-nav-book">
              <Link href="/consultation" onClick={() => setIsMobileMenuOpen(false)}>
                <Calendar size={15} />
                상담 예약하기
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
