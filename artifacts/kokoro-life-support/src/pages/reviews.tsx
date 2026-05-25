import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "이지은",
      initial: "이",
      tag: "일본 생활 지원",
      rating: 5,
      text: "도쿄에서의 첫 자취라 막막했는데, 집 구하기부터 구약소 등록까지 정말 세심하게 도와주셔서 든든했습니다. 계약 과정에서 일본어로 소통하는 것이 두려웠는데 직접 동행해주셔서 너무 감사했습니다."
    },
    {
      id: 2,
      name: "Sato Yumi",
      initial: "S",
      tag: "한국 정착 상담",
      rating: 5,
      text: "韓国語가 서툴러서 병원 가는 것이 제일 무서웠는데, 통역 지원과 시스템 설명 덕분에 안심할 수 있었습니다. 특히 외국인 등록 과정이 복잡했는데 명확하게 가이드 해주셔서 좋았습니다."
    },
    {
      id: 3,
      name: "김민수",
      initial: "김",
      tag: "가족 이주 코칭",
      rating: 5,
      text: "아이들 학교 문제와 주거 환경 등 복잡한 고민이 많았는데, 전문가의 정확한 정보와 따뜻한 상담으로 해결했습니다. 학군 정보와 지역 분위기를 상세히 알려주신 점이 가장 큰 도움이 되었습니다."
    },
    {
      id: 4,
      name: "박서연",
      initial: "박",
      tag: "일본 정착 상담",
      rating: 4,
      text: "워킹홀리데이로 와서 알바 구하는 것부터 휴대폰 개통까지 많은 도움을 받았습니다. 특히 일본의 비즈니스 매너와 이력서 작성법을 코칭해주신 것이 취업에 결정적인 역할을 했습니다."
    },
    {
      id: 5,
      name: "Tanaka Kenji",
      initial: "T",
      tag: "한국 커뮤니케이션 코칭",
      rating: 5,
      text: "한국 회사에 취업하면서 직장 문화 적응이 걱정되었는데, 사내 커뮤니케이션 방식과 예절에 대한 코칭을 받고 나니 훨씬 자신감이 생겼습니다. 동료들과의 관계가 아주 좋아졌습니다."
    },
    {
      id: 6,
      name: "최유진",
      initial: "최",
      tag: "일본 온라인 상담",
      rating: 5,
      text: "코로나 이후 우울감과 향수병으로 힘들었는데, 전문 상담사님과의 정기적인 화상 상담 덕분에 멘탈을 회복할 수 있었습니다. 타지에서 내 마음을 온전히 이해해주는 분이 있다는 것 자체가 큰 위로입니다."
    },
    {
      id: 7,
      name: "정민재",
      initial: "정",
      tag: "한국 생활 지원",
      rating: 5,
      text: "교포로서 오랜만에 한국에 돌아와 모든 시스템이 낯설었는데, 은행 업무부터 공동인증서 발급, 통신사 가입까지 원스톱으로 해결할 수 있었습니다."
    },
    {
      id: 8,
      name: "Nakamura Aoi",
      initial: "N",
      tag: "한국 정착 상담",
      rating: 5,
      text: "유학생으로 와서 겪는 여러 가지 어려움들을 잘 들어주시고 현실적인 조언을 해주셨습니다. 특히 주거지 이전 시 보증금 문제로 곤란했는데 전문가의 도움으로 안전하게 해결했습니다."
    },
    {
      id: 9,
      name: "강현우",
      initial: "강",
      tag: "일본 비자/행정",
      rating: 4,
      text: "이직으로 인한 취업 비자 갱신 절차가 복잡했는데, 필요한 서류 목록과 준비 방법을 명확하게 알려주셔서 한 번에 통과할 수 있었습니다. 신속하고 정확한 정보 제공에 감사드립니다."
    }
  ];

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="min-h-screen pt-28 pb-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Summary */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">고객 후기</h1>
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-[2rem] border border-border shadow-sm">
            <div className="text-5xl font-bold text-foreground font-serif mb-4">4.9</div>
            <div className="flex gap-1 text-accent mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} fill="currentColor" />
              ))}
            </div>
            <p className="text-muted-foreground font-medium">500+ 명의 고객이 경험한 생생한 이야기</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["전체", "일본 지원", "한국 지원", "정착상담", "커뮤니케이션"].map((tab, i) => (
            <Badge key={i} variant={i === 0 ? "default" : "outline"} className={i === 0 ? "bg-primary text-white" : "bg-white text-muted-foreground hover:bg-muted cursor-pointer"}>
              {tab}
            </Badge>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <motion.div key={review.id} variants={fadeIn} className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col h-full">
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-muted"} />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-8 flex-grow">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary font-serif font-bold flex items-center justify-center text-lg shrink-0">
                  {review.initial}
                </div>
                <div>
                  <div className="font-bold text-foreground font-serif">{review.name}</div>
                  <div className="text-xs text-primary font-medium">{review.tag}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
