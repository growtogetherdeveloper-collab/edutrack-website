import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { MoveRight, SendHorizonal, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";

import { RequestDemoDialog } from "./RequestDemoDialog";

export function EduTrackHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Smart", "Simple", "Efficient", "Powerful", "AI-Driven"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 lg:pb-20 lg:pt-0 items-center justify-center flex-col px-0 pb-[17px] pt-0">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium text-[14px]">
              🌐 AI-Powered School Management
            </div>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-4xl md:text-7xl max-w-4xl tracking-tighter text-center font-normal font-[Poppins] leading-tight">
              <span className="text-[rgb(4,35,101)] text-4xl md:text-[64px]">School Management made</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.2em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -50 : 50,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="md:text-xl leading-relaxed tracking-tight text-gray-600 max-w-2xl text-center mt-4 text-[16px]">
              A complete AI-powered platform that gives parents, teachers, and schools real-time clarity on student attendance, homework, performance, and behavior.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-6 sm:px-0">
            <RequestDemoDialog>
              <ShimmerButton
                background="linear-gradient(135deg, #2563eb, #1d4ed8)"
                borderRadius="0.75rem"
                className="h-12 md:h-14 px-8 md:px-10 text-base md:text-lg w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                   Request Demo <MoveRight className="size-4 md:size-5" />
                </span>
              </ShimmerButton>
            </RequestDemoDialog>
            <RequestDemoDialog>
              <Button
                variant="outline"
                className="h-12 md:h-14 px-8 md:px-10 text-base md:text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white w-full sm:w-auto">
                Contact Sales
              </Button>
            </RequestDemoDialog>
          </div>
        </div>
      </div>
    </div>
  );
}
