import { motion } from "framer-motion";
import { 
  Users, UserPlus, HeartHandshake, Speech, MapPin, CheckCircle2,
  CalendarDays, Video, MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Consultation() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="min-h-screen pt-28 pb-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">정착 상담 서비스</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            새로운 국가에서의 생활, 언어와 문화 차이로 인한 어려움. 혼자 고민하지 마세요. 한국과 일본 양국의 문화를 깊이 이해하는 전문가가 당신의 상황에 맞는 최적의 솔루션을 함께 찾습니다.
          </p>
        </div>

        {/* Process Timeline */}
        <section className="mb-24">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-10 text-center">상담 진행 프로세스</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "상담 신청", desc: "웹사이트를 통해 희망하는 상담 분야와 시간을 선택하여 신청합니다." },
                { step: "2", title: "전문가 매칭", desc: "고객님의 상황에 가장 적합한 전문 상담사가 배정됩니다." },
                { step: "3", title: "1:1 상담 진행", desc: "Zoom 또는 대면으로 1:1 맞춤형 심층 상담을 진행합니다." },
                { step: "4", title: "후속 지원", desc: "상담 후 필요한 정보 제공 및 지속적인 모니터링을 지원합니다." }
              ].map((process, i) => (
                <div key={i} className="relative z-10 bg-background md:bg-transparent text-center">
                  <div className="w-12 h-12 mx-auto bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-background shadow-sm">
                    {process.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-24">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-10 text-center">상담 카테고리</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: MapPin, title: "생활 적응 상담", desc: "새로운 환경에서의 일상적인 스트레스, 외로움, 문화 충격 극복 지원." },
              { icon: Speech, title: "커뮤니케이션 코칭", desc: "직장 내 의사소통, 이웃과의 교류 등 효과적인 현지 커뮤니케이션 방법 안내." },
              { icon: UserPlus, title: "장기 체류 계획", desc: "비자 갱신, 이직, 결혼 등 인생의 중요한 전환점에 따른 체류 자격 및 계획 상담." },
              { icon: Users, title: "가족 상담", desc: "자녀의 학교 적응, 배우자의 현지 생활 등 동반 가족의 정착 지원." },
              { icon: HeartHandshake, title: "외국인 주민 지원", desc: "차별이나 오해로 인한 갈등 해결, 지역 사회 커뮤니티 참여 안내." }
            ].map((category, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white p-6 rounded-2xl border border-border flex gap-4 items-start shadow-sm">
                <div className="w-12 h-12 shrink-0 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <category.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white p-8 md:p-12 rounded-[2rem] border border-border shadow-md text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">상담을 예약하시겠습니까?</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            온라인(Zoom) 화상 상담과 채팅 상담 중 편리한 방법을 선택하실 수 있습니다. 모든 상담 내용은 철저하게 비밀이 보장됩니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-14" asChild>
              <a href="/contact"><CalendarDays className="mr-2" size={20} /> 화상 상담 예약</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 bg-white" asChild>
              <a href="/contact"><MessageCircle className="mr-2" size={20} /> 카카오톡/LINE 문의</a>
            </Button>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
