import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Blog() {
  const posts = [
    {
      id: 1,
      image: "/blog-1.png",
      category: "비자/행정",
      title: "일본 취업 비자 신청 완벽 가이드 (2024년 최신판)",
      excerpt: "일본 취업이 확정되셨나요? 재류자격인정증명서(COE) 발급부터 실제 비자 수령까지의 모든 절차를 상세히 안내해 드립니다.",
      date: "2024.03.15"
    },
    {
      id: 2,
      image: "/blog-2.png",
      category: "생활/주거",
      title: "한국에서 집 구하기 — 외국인 필수 체크리스트",
      excerpt: "전세와 월세의 차이점, 부동산 계약 시 주의사항, 확정일자의 중요성 등 한국의 독특한 주거 문화를 이해하고 안전하게 집을 구하는 방법.",
      date: "2024.03.10"
    },
    {
      id: 3,
      image: "/blog-3.png",
      category: "문화/적응",
      title: "언어 장벽 없이 일본 생활 적응하기",
      excerpt: "일본어가 서툴러도 걱정하지 마세요. 관공서, 병원, 은행에서 유용하게 쓸 수 있는 생존 일본어 팁과 번역 앱 활용 노하우.",
      date: "2024.03.05"
    },
    {
      id: 4,
      image: "/hero-consultation.png",
      category: "상담사 칼럼",
      title: "해외 생활의 외로움, 어떻게 극복할까?",
      excerpt: "새로운 국가에서의 첫 6개월은 누구에게나 힘든 시기입니다. 전문 상담사가 제안하는 향수병 극복과 현지 커뮤니티 형성 방법.",
      date: "2024.02.28"
    },
    {
      id: 5,
      image: "/japan-hero.png",
      category: "생활/주거",
      title: "도쿄 지하철 완벽 마스터하기",
      excerpt: "복잡한 도쿄의 전철 노선도. JR, 메트로, 사철의 차이점과 스이카/파스모 활용법, 그리고 출퇴근 시간대의 팁.",
      date: "2024.02.20"
    },
    {
      id: 6,
      image: "/korea-hero.png",
      category: "의료/건강",
      title: "외국인을 위한 한국 국민건강보험 가입 가이드",
      excerpt: "의무 가입 대상자 기준, 보험료 산정 방식, 병원 이용 시 혜택 등 한국의 우수한 의료 시스템을 제대로 활용하는 방법.",
      date: "2024.02.15"
    }
  ];

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="min-h-screen pt-28 pb-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Blog & Guides</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            한국과 일본에서의 안정적인 정착을 위한 유용한 정보와 전문가의 칼럼을 제공합니다.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["전체", "생활/주거", "비자/행정", "의료/건강", "문화/적응", "상담사 칼럼"].map((tab, i) => (
            <Badge key={i} variant={i === 0 ? "default" : "outline"} className={i === 0 ? "bg-primary text-white" : "bg-white text-muted-foreground hover:bg-muted cursor-pointer"}>
              {tab}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div key={post.id} variants={fadeIn} className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm shadow-sm">{post.category}</Badge>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto flex items-center text-xs text-muted-foreground font-medium">
                  <Calendar size={14} className="mr-1.5" />
                  {post.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
