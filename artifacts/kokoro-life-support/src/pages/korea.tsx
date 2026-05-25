import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home, FileText, Train, Heart, Stethoscope, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function KoreaSupport() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="min-h-screen pt-20 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0">
          <img src="/korea-hero.png" alt="Seoul cityscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            한국에서의 새로운 시작, 완벽하게 가이드합니다.
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-white/90">
            외국인 등록부터 주거, 의료, 문화 적응까지. 빠르고 역동적인 한국 생활에 안정적으로 정착하도록 돕습니다.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">주요 지원 서비스</h2>
          <p className="text-muted-foreground">한국 정착에 필요한 모든 과정을 체계적으로 지원합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Home, title: "주거 가이드", desc: "전세/월세 시스템 이해, 부동산 방문 동행, 계약서 검토 및 확정일자 부여 절차 안내." },
            { icon: FileText, title: "외국인 등록", desc: "출입국외국인청 방문 예약, 외국인등록증 발급 절차 및 체류지 변경 신고 지원." },
            { icon: Train, title: "교통 및 통신", desc: "대중교통 카드 발급, KTX/SRT 이용법, 본인 명의 휴대폰 개통 및 인터넷 설치." },
            { icon: Stethoscope, title: "병원 및 의료", desc: "국민건강보험 가입, 병원 예약 및 방문 시 증상 설명 번역 지원, 약국 이용 가이드." },
            { icon: Heart, title: "일상 생활", desc: "은행 계좌 개설 및 공동인증서 발급, 배달/쇼핑 앱 사용법, 분리수거 규정 안내." },
            { icon: Users, title: "문화 적응", desc: "한국 직장 문화 및 예절 교육, 멘탈 케어, 한국어 학습 기관 연계." }
          ].map((service, i) => (
            <motion.div key={i} variants={fadeIn} className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-6">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">한국 정착, 전문가와 함께 시작하세요</h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">복잡한 절차도 KOKORO와 함께라면 쉽고 확실합니다.</p>
            <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-10 h-14 text-lg font-bold shadow-xl" asChild>
              <Link href="/consultation">1:1 상담 예약하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
