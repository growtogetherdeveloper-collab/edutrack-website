import { Button } from "./ui/button";
import { Sparkles, MessageCircle, BookCheck, Brain, Lightbulb, Shield, Bot } from "lucide-react";
import { cn } from "./ui/utils";
import { Component as AILoader } from "./ui/ai-loader";

const aiFeatures = [
  {
    icon: MessageCircle,
    title: "Students can ask doubts anytime",
    color: "text-purple-600",
  },
  {
    icon: BookCheck,
    title: "Answers come from textbook syllabus only",
    color: "text-blue-600",
  },
  {
    icon: Brain,
    title: "Explains in simple words",
    color: "text-purple-600",
  },
  {
    icon: Lightbulb,
    title: "Step-by-step solutions",
    color: "text-blue-600",
  },
  {
    icon: Sparkles,
    title: "Gives examples + practice questions",
    color: "text-purple-600",
  },
  {
    icon: Shield,
    title: "Teacher moderation included",
    color: "text-blue-600",
  },
];

const IntegrationCard = ({ 
  children, 
  className,
  borderClassName
}: { 
  children: React.ReactNode; 
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <div className={cn('relative flex size-20 rounded-xl bg-white dark:bg-transparent', className)}>
      <div
        role="presentation"
        className={cn('absolute inset-0 rounded-xl border border-gray-200 dark:border-white/25', borderClassName)}
      />
      <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
    </div>
  )
}

export function AITutor() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="py-12 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            {/* Two Column Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - AI Loader Display */}
              <div className="relative z-10 mx-auto w-full min-h-[400px] flex items-center justify-center">
                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                  <MessageCircle 
                    className="absolute top-8 left-4 text-[#155dfc] opacity-60"
                    style={{ animation: 'float 4s ease-in-out infinite' }}
                    size={32}
                  />
                  <BookCheck 
                    className="absolute top-12 right-8 text-[#155dfc] opacity-50"
                    style={{ animation: 'floatReverse 5s ease-in-out infinite', animationDelay: '0.5s' }}
                    size={28}
                  />
                  <Brain 
                    className="absolute bottom-20 left-2 text-[#155dfc] opacity-70"
                    style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}
                    size={36}
                  />
                  <Lightbulb 
                    className="absolute top-24 left-12 text-[#155dfc] opacity-40"
                    style={{ animation: 'floatReverse 4.5s ease-in-out infinite', animationDelay: '1.5s' }}
                    size={30}
                  />
                  <Shield 
                    className="absolute bottom-16 right-6 text-[#155dfc] opacity-60"
                    style={{ animation: 'float 5.5s ease-in-out infinite', animationDelay: '2s' }}
                    size={34}
                  />
                  <Sparkles 
                    className="absolute top-32 right-12 text-[#155dfc] opacity-50"
                    style={{ animation: 'floatReverse 4s ease-in-out infinite', animationDelay: '2.5s' }}
                    size={26}
                  />
                </div>
                
                {/* AI Loader Component */}
                <div className="relative z-20">
                  <AILoader size={240} text="AI Tutor" fullScreen={false} />
                </div>

              </div>

              {/* Right Column - Text Content */}
              <div className="max-w-lg space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f1ff] text-[#155dfc] rounded-full">
                  <Sparkles className="h-5 w-5" />
                  <span>Powered by AI</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl text-gray-900 text-left">
                  Meet Your AI Learning Assistant 🤖
                </h2>
                
                <p className="text-xl text-gray-600 text-left">
                  An in-app AI chat trained on your school's syllabus.
                </p>
                
                {/* Feature List */}
                <div className="mt-8 grid grid-cols-1 gap-3 text-left">
                  {aiFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-8 h-8 bg-[#e8f1ff] rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-4 w-4 text-[#155dfc]" />
                      </div>
                      <span className="text-sm">{feature.title}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="mt-6 bg-[#155dfc] hover:bg-[#1248c9] text-white"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Try AI Demo
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}