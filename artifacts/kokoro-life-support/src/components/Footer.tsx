import { Link } from "wouter";
import { Leaf, Instagram, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Leaf size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-md leading-tight text-foreground">
                  KOKORO
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 font-serif">
              한국과 일본을 연결하는<br />프리미엄 생활지원 플랫폼
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="footer-kakaotalk">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="footer-line">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="footer-instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 font-serif">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/japan" className="text-sm text-muted-foreground hover:text-primary transition-colors">Japan Life Support</Link></li>
              <li><Link href="/korea" className="text-sm text-muted-foreground hover:text-primary transition-colors">Korea Life Support</Link></li>
              <li><Link href="/consultation" className="text-sm text-muted-foreground hover:text-primary transition-colors">Settlement Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 font-serif">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog & Guides</Link></li>
              <li><Link href="/reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 font-serif">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle size={16} /> KakaoTalk: @kokorolife
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle size={16} /> LINE: @kokorolife_jp
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} /> +82 02-1234-5678
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kokoro Life Support. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
