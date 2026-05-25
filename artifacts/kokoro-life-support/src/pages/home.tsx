import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, ArrowRight, HomeIcon, MessageCircle, Users, Video, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/50 via-background to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial="initial" 
              animate="animate" 
              variants={stagger}
              className="max-w-xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                한국과 일본을 연결하는 생활지원 플랫폼
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.2] mb-6">
                한국과 일본,<br />
                새로운 생활을<br />
                <span className="text-primary">함께 준비합니다.</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Expert support for Japan employment, long-term stay, settlement, and lifestyle adaptation.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-base shadow-lg shadow-primary/20" asChild>
                  <Link href="/consultation">
                    상담 예약하기 <Calendar className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-border bg-white hover:bg-secondary/50 shadow-sm" asChild>
                  <Link href="/japan">
                    서비스 보기
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> 전문 상담사 1:1 상담
                </div>
                <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> 비대면 화상 상담 가능
                </div>
                <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-border/50">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> 한국·일본 동시 지원
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="/hero-consultation.png" 
                alt="Professional consultation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none" />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute bottom-8 -left-6 md:left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white"
              >
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg shadow-sm border-2 border-white z-10">🇰🇷</div>
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-lg shadow-sm border-2 border-white">🇯🇵</div>
                </div>
                <div className="font-serif font-bold text-foreground">
                  한국 ⇄ 일본
                  <div className="text-xs text-muted-foreground font-sans font-normal mt-0.5">원스톱 지원 서비스</div>
                </div>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">어떤 도움이 필요하신가요?</h2>
            <p className="text-muted-foreground text-lg">새로운 환경에서의 시작, 든든한 파트너가 되어 드립니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: HomeIcon,
                title: "생활지원",
                en: "Lifestyle Support",
                desc: "집 구하기, 교통, 병원, 통신 등 생활에 필요한 모든 정보를 안내해 드립니다.",
                link: "/japan"
              },
              {
                icon: MessageCircle,
                title: "정착상담",
                en: "Settlement Consultation",
                desc: "문화 차이, 언어, 인간관계 등 새로운 환경에 적응할 수 있도록 맞춤 상담을 제공합니다.",
                link: "/consultation"
              },
              {
                icon: Users,
                title: "커뮤니케이션 코칭",
                en: "Communication Coaching",
                desc: "한국과 일본의 문화 이해를 바탕으로 효과적인 의사소통 방법을 코칭해 드립니다.",
                link: "/consultation"
              },
              {
                icon: Video,
                title: "온라인 상담",
                en: "Online Consultation",
                desc: "Zoom을 통한 1:1 비대면 상담으로 언제 어디서든 편리하게 상담받을 수 있습니다.",
                link: "/contact"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-1">{service.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">{service.en}</p>
                <p className="text-muted-foreground mb-8 line-clamp-3">{service.desc}</p>
                <Link href={service.link} className="inline-flex items-center text-primary font-medium text-sm group/link">
                  자세히 보기 <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/50 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
            {[
              { num: "500+", label: "상담 완료" },
              { num: "98%", label: "고객 만족도" },
              { num: "2", label: "개국 전문 지원" },
              { num: "5년", label: "전문 경력" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 font-serif">{stat.num}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">고객 후기</h2>
              <p className="text-muted-foreground">KOKORO와 함께 새로운 시작을 한 분들의 이야기</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex text-primary hover:text-primary/80 hover:bg-primary/5">
              <Link href="/reviews">모든 후기 보기 <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "이지은", tag: "일본 취업 정착", text: "도쿄에서의 첫 자취라 막막했는데, 집 구하기부터 구약소 등록까지 정말 세심하게 도와주셔서 든든했습니다.", initial: "이" },
              { name: "Sato Yumi", tag: "한국 워홀", text: "韓国語가 서툴러서 병원 가는 것이 제일 무서웠는데, 통역 지원과 시스템 설명 덕분에 안심할 수 있었습니다.", initial: "S" },
              { name: "김민수", tag: "가족 이주", text: "아이들 학교 문제와 주거 환경 등 복잡한 고민이 많았는데, 전문가의 정확한 정보와 따뜻한 상담으로 해결했습니다.", initial: "김" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <div className="flex gap-1 text-accent mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-foreground leading-relaxed mb-8">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-secondary text-primary font-serif font-bold flex items-center justify-center text-lg">
                    {review.initial}
                  </div>
                  <div>
                    <div className="font-bold text-foreground font-serif">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild className="w-full rounded-full">
              <Link href="/reviews">모든 후기 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            지금 바로 전문가와 상담을 시작하세요
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            당신의 새로운 여정을 KOKORO가 함께 응원합니다.
          </p>
          <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg font-bold shadow-xl shadow-black/20" asChild>
            <Link href="/consultation">상담 예약하기</Link>
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
