import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "상담 예약이 접수되었습니다.",
      description: "담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.",
    });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-28 pb-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Contact & Booking</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            궁금한 점이 있으시거나 상담을 원하시면 언제든지 연락해 주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">빠른 문의</h2>
            
            <a href="#" className="flex items-center gap-4 p-4 bg-[#FEE500] hover:bg-[#FEE500]/90 rounded-2xl transition-colors shadow-sm">
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center shrink-0 text-[#3C1E1E]">
                <MessageCircle size={24} fill="currentColor" />
              </div>
              <div>
                <div className="font-bold text-[#3C1E1E]">KakaoTalk 상담</div>
                <div className="text-sm text-[#3C1E1E]/80">@kokorolife</div>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 p-4 bg-[#06C755] hover:bg-[#06C755]/90 rounded-2xl transition-colors shadow-sm">
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center shrink-0 text-white">
                <MessageCircle size={24} fill="currentColor" />
              </div>
              <div>
                <div className="font-bold text-white">LINE 상담</div>
                <div className="text-sm text-white/80">@kokorolife_jp</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-white border border-border rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <div className="font-bold text-foreground">고객센터</div>
                <div className="text-sm text-muted-foreground">+82 02-1234-5678</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white border border-border rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <div className="font-bold text-foreground">이메일 문의</div>
                <div className="text-sm text-muted-foreground">support@kokorolife.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white border border-border rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <div className="font-bold text-foreground">Office</div>
                <div className="text-sm text-muted-foreground">Seoul / Tokyo</div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-border shadow-md">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">1:1 상담 예약 폼</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름 (성함)</Label>
                    <Input id="name" placeholder="홍길동" required className="h-12 rounded-xl bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" type="email" placeholder="example@email.com" required className="h-12 rounded-xl bg-background" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">연락처</Label>
                    <Input id="phone" placeholder="010-0000-0000" required className="h-12 rounded-xl bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">서비스 유형</Label>
                    <Select required>
                      <SelectTrigger className="h-12 rounded-xl bg-background">
                        <SelectValue placeholder="원하시는 상담을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="japan">일본 생활 지원</SelectItem>
                        <SelectItem value="korea">한국 생활 지원</SelectItem>
                        <SelectItem value="consultation">정착 심리 상담</SelectItem>
                        <SelectItem value="coaching">커뮤니케이션 코칭</SelectItem>
                        <SelectItem value="other">기타 문의</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">상담 희망일 (선택)</Label>
                  <Input id="date" type="date" className="h-12 rounded-xl bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">상담 내용</Label>
                  <Textarea 
                    id="message" 
                    placeholder="현재 상황이나 궁금하신 점을 자유롭게 적어주세요. 자세히 적어주실수록 정확한 상담이 가능합니다." 
                    className="min-h-[150px] rounded-xl bg-background resize-none"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                  예약 신청하기
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  * 폼을 제출하시면 영업일 기준 24시간 이내에 담당자가 연락을 드립니다.
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
