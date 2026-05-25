import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home, FileText, Compass, Train, Map, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function JapanSupport() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="min-h-screen pt-20 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0">
          <img src="/japan-hero.png" alt="Tokyo cityscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            일본 생활, 이제 걱정하지 마세요.
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-white/90">
            복잡한 행정 절차부터 일상 생활의 크고 작은 문제들까지, KOKORO가 당신의 든든한 가이드가 되어드립니다.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">주요 지원 서비스</h2>
          <p className="text-muted-foreground">일본 정착에 필요한 모든 과정을 체계적으로 지원합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Home, title: "주거 지원", desc: "외국인 입주 가능 물건 탐색, 보증인 회사 안내, 계약 절차 동행 및 초기 세팅 지원." },
            { icon: FileText, title: "비자 및 행정", desc: "취업, 유학, 워홀 등 비자별 필요 서류 안내, 구약소 전출입 신고 및 마이넘버 등록 지원." },
            { icon: BookOpen, title: "생활 가이드", desc: "은행 계좌 개설, 휴대폰 개통, 인터넷 설치, 신용카드 발급 등 초기 정착 필수 과정 안내." },
            { icon: Train, title: "교통 및 이동", desc: "정기권(테이키켄) 발급, 효율적인 출퇴근/통학 루트 설계, 이사 및 화물 운송 업체 연결." },
            { icon: Map, title: "커뮤니케이션", desc: "부동산, 은행, 관공서 방문 시 필요한 실전 일본어 템플릿 제공 및 중요 통화 대행 지원." },
            { icon: Compass, title: "취업 및 진학", desc: "이력서/직무경력서 첨삭, 면접 매너 코칭, 비즈니스 일본어 기초 교육." }
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

      {/* FAQ */}
      <section className="container mx-auto px-4 lg:px-8 max-w-4xl mb-24">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-10 text-center">자주 묻는 질문</h2>
        <div className="space-y-4">
          {[
            { q: "일본어를 전혀 못해도 집을 구할 수 있나요?", a: "네, 가능합니다. 외국인 입주가 가능한 부동산을 전문으로 소개하며, 필요시 계약 과정에 동행 또는 통역을 지원해 드립니다." },
            { q: "초기 정착에 비용이 어느 정도 드나요?", a: "지역과 주거 형태에 따라 다르지만, 일반적으로 야친(월세)의 4~5배 정도의 초기 비용(시키킨, 레이킨, 중개수수료 등)이 발생합니다. 예산에 맞는 계획을 함께 세워드립니다." },
            { q: "구약소 등록은 언제까지 해야 하나요?", a: "일본 입국 후 주소지가 정해진 날로부터 14일 이내에 관할 구약소(또는 시약소)에 전입 신고를 해야 합니다." }
          ].map((faq, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-2 flex gap-3"><span className="text-primary font-serif">Q.</span> {faq.q}</h3>
              <p className="text-muted-foreground pl-7 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">일본 정착, 전문가와 함께 시작하세요</h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">개인의 상황에 맞는 맞춤형 정착 플랜을 제안해 드립니다.</p>
            <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-10 h-14 text-lg font-bold shadow-xl" asChild>
              <Link href="/consultation">1:1 상담 예약하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
