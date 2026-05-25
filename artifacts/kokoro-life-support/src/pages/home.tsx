import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Calendar, ArrowRight, HomeIcon, MessageCircle, Users, Video,
  Star, User, MonitorPlay, Globe
} from "lucide-react";
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
      className="min-h-screen pt-[68px] bg-[#F7F4EF]"
    >
      {/* Hero Section — big green card */}
      <section className="px-4 lg:px-6 pt-5 pb-0 bg-[#F7F4EF]">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative rounded-[1.75rem] overflow-hidden flex flex-col lg:flex-row min-h-[460px] lg:min-h-[500px]">

            {/* LEFT: Dark green content area */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="relative z-10 flex flex-col justify-center px-8 py-10 lg:px-10 lg:py-12 bg-[#0F3D3E] w-full lg:w-[60%] shrink-0"
            >
              {/* Eyebrow */}
              <motion.p
                variants={fadeIn}
                className="text-[13px] text-white/60 font-sans mb-4 tracking-wide"
              >
                한국과 일본을 연결하는 생활지원 플랫폼
              </motion.p>

              {/* Main heading */}
              <motion.h1
                variants={fadeIn}
                className="text-[2rem] lg:text-[2.3rem] xl:text-[2.6rem] font-serif font-bold text-white leading-[1.3] mb-5"
              >
                한국과 일본,<br />
                새로운 생활을 함께 준비합니다.
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeIn}
                className="text-[14.5px] text-white/70 mb-7 leading-relaxed max-w-sm"
              >
                일본 취업, 장기 체류, 생활 적응, 한국 정착까지<br />
                실질적인 정보와 1:1 맞춤 상담으로 든든하게 도와드립니다.
              </motion.p>

              {/* Flag row */}
              <motion.div
                variants={fadeIn}
                className="flex items-center gap-4 mb-7"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🇰🇷</span>
                  <span className="text-white/80 text-[13px] font-medium">한국 생활지원</span>
                </div>
                <span className="text-white/30 text-sm">|</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🇯🇵</span>
                  <span className="text-white/80 text-[13px] font-medium">일본 생활지원</span>
                </div>
              </motion.div>

              {/* Buttons */}
              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <Button
                  size="default"
                  className="rounded-full bg-[#D4A843] hover:bg-[#c49a38] text-[#1a1a1a] font-semibold h-12 px-7 text-[14px] shadow-md gap-2 border-0"
                  asChild
                  data-testid="hero-book-consultation"
                >
                  <Link href="/consultation">
                    <Calendar size={15} />
                    상담 예약하기
                  </Link>
                </Button>
                <Button
                  size="default"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-[14px] border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 gap-1.5"
                  asChild
                  data-testid="hero-explore-services"
                >
                  <Link href="/consultation">
                    서비스 보기 <ArrowRight size={14} />
                  </Link>
                </Button>
              </motion.div>

              {/* Feature badges */}
              <motion.div
                variants={fadeIn}
                className="flex flex-wrap items-center gap-x-5 gap-y-2"
              >
                <div className="flex items-center gap-1.5 text-white/55 text-[12.5px]">
                  <User size={13} />
                  전문 상담사 1:1 상담
                </div>
                <div className="flex items-center gap-1.5 text-white/55 text-[12.5px]">
                  <MonitorPlay size={13} />
                  비대면 화상 상담 가능
                </div>
                <div className="flex items-center gap-1.5 text-white/55 text-[12.5px]">
                  <Globe size={13} />
                  한국·일본 동시 지원
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT: Consultation photo */}
            <div className="relative hidden lg:block flex-1 min-h-[460px]">
              {/* Consultation photo */}
              <img
                src="/hero-consultation.png"
                alt="전문 상담 서비스"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Left edge gradient to blend with green */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0F3D3E] to-transparent pointer-events-none" />

              {/* Floating Korea/Japan city card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 120 }}
                className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl overflow-hidden"
                style={{ width: 290, boxShadow: "0 12px 40px rgba(0,0,0,0.18)" }}
              >
                {/* City images split */}
                <div className="flex h-[118px] relative">
                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src="/korea-hero.png"
                      alt="Seoul"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src="/japan-hero.png"
                      alt="Tokyo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Center swap icon */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center z-10">
                    <span className="text-[11px] text-[#0F3D3E] font-bold">⇄</span>
                  </div>
                  {/* Korea pill */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
                    <span className="text-[11px]">🇰🇷</span>
                    <span className="text-[11px] font-semibold text-[#0F3D3E]">한국</span>
                  </div>
                  {/* Japan pill */}
                  <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
                    <span className="text-[11px]">🇯🇵</span>
                    <span className="text-[11px] font-semibold text-[#0F3D3E]">일본</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-12 bg-[#F7F4EF]">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: HomeIcon,
                title: "생활지원",
                desc: "집 구하기, 교통, 병원, 통신 등 생활에 필요한 모든 정보를 안내해 드립니다.",
                link: "/korea"
              },
              {
                icon: MessageCircle,
                title: "정착상담",
                desc: "문화 차이, 언어, 인간관계 등 새로운 환경에 적응할 수 있도록 맞춤 상담을 제공합니다.",
                link: "/consultation"
              },
              {
                icon: Users,
                title: "커뮤니케이션 코칭",
                desc: "한국과 일본의 문화 이해를 바탕으로 효과적인 의사소통 방법을 코칭해 드립니다.",
                link: "/consultation"
              },
              {
                icon: Video,
                title: "온라인 상담",
                desc: "Zoom을 통한 1:1 비대면 상담으로 언제 어디서든 편리하게 상담받을 수 있습니다.",
                link: "/contact"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[1.2rem] p-7 shadow-[0_2px_16px_rgba(15,61,62,0.06)] hover:shadow-[0_8px_32px_rgba(15,61,62,0.11)] transition-all duration-300 group flex flex-col"
                data-testid={`service-card-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#EEF4F4] flex items-center justify-center text-[#0F3D3E] mb-5 group-hover:bg-[#0F3D3E] group-hover:text-white transition-all duration-300">
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-[16px] font-serif font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-[13.5px] text-muted-foreground leading-relaxed mb-5 flex-1">{service.desc}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#0F3D3E] font-medium text-[13px] group/link"
                  data-testid={`service-link-${i}`}
                >
                  자세히 보기
                  <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-border/40">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/40">
            {[
              { num: "500+", label: "상담 완료" },
              { num: "98%", label: "고객 만족도" },
              { num: "2개국", label: "전문 지원" },
              { num: "5년", label: "전문 경력" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-bold text-[#0F3D3E] mb-2 font-serif">{stat.num}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">고객 후기</h2>
              <p className="text-muted-foreground text-sm">KOKORO와 함께 새로운 시작을 한 분들의 이야기</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex text-[#0F3D3E] hover:text-[#0F3D3E]/80 hover:bg-[#0F3D3E]/5 text-sm">
              <Link href="/reviews">모든 후기 보기 <ArrowRight size={14} className="ml-1" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "이지은", tag: "일본 취업 정착", text: "도쿄에서의 첫 자취라 막막했는데, 집 구하기부터 구약소 등록까지 정말 세심하게 도와주셔서 든든했습니다.", initial: "이" },
              { name: "Sato Yumi", tag: "한국 워홀", text: "韓国語가 서툴러서 병원 가는 것이 제일 무서웠는데, 통역 지원과 시스템 설명 덕분에 안심할 수 있었습니다.", initial: "S" },
              { name: "김민수", tag: "가족 이주", text: "아이들 학교 문제와 주거 환경 등 복잡한 고민이 많았는데, 전문가의 정확한 정보와 따뜻한 상담으로 해결했습니다.", initial: "김" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-7 rounded-[1.2rem] shadow-[0_2px_16px_rgba(15,61,62,0.06)]">
                <div className="flex gap-0.5 text-amber-400 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[14px] text-foreground leading-relaxed mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EEF4F4] text-[#0F3D3E] font-serif font-bold flex items-center justify-center text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <div className="text-[13.5px] font-bold text-foreground">{review.name}</div>
                    <div className="text-[11.5px] text-muted-foreground">{review.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0F3D3E] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/4 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-[1100px] mx-auto px-4 lg:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">
            지금 바로 전문가와 상담을 시작하세요
          </h2>
          <p className="text-white/65 text-base mb-9 max-w-xl mx-auto">
            당신의 새로운 여정을 KOKORO가 함께 응원합니다.
          </p>
          <Button
            size="default"
            className="rounded-full bg-[#D4A843] hover:bg-[#c49a38] text-[#1a1a1a] font-bold h-12 px-9 text-[14px] shadow-xl gap-2 border-0"
            asChild
            data-testid="cta-book-consultation"
          >
            <Link href="/consultation">
              <Calendar size={15} />
              상담 예약하기
            </Link>
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
