"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog"
import { RequestDemoForm } from "./RequestDemoForm"
import { CheckCircle2, ShieldCheck, Zap, Users, GraduationCap } from "lucide-react"

import { useState } from "react"

interface RequestDemoDialogProps {
  children: React.ReactNode
}

export function RequestDemoDialog({ children }: RequestDemoDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    // Close the dialog after a short delay to let the user see the "Done" state
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  };

  const schoolLogos = [
    { name: "Delhi Public School", img: "https://html.tailus.io/blocks/customers/nvidia.svg" },
    { name: "Ryan International", img: "https://html.tailus.io/blocks/customers/column.svg" },
    { name: "Kendriya Vidyalaya", img: "https://html.tailus.io/blocks/customers/github.svg" },
    { name: "DAV Public School", img: "https://html.tailus.io/blocks/customers/nike.svg" },
    { name: "St. Xavier's School", img: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg" },
    { name: "Narayana Group", img: "https://html.tailus.io/blocks/customers/laravel.svg" },
  ]

  const features = [
    {
      title: "AI Tracking",
      desc: "Real-time insights into behavior and performance.",
      icon: <Zap className="size-5 text-blue-400" />
    },
    {
      title: "Smart Attendance",
      desc: "Automated, error-free student management.",
      icon: <CheckCircle2 className="size-5 text-blue-400" />
    },
    {
      title: "Parent Clarity",
      desc: "Instant updates and transparent communication.",
      icon: <Users className="size-5 text-blue-400" />
    },
    {
      title: "Enterprise Grade",
      desc: "Secure, scalable, and built for modern schools.",
      icon: <ShieldCheck className="size-5 text-blue-400" />
    }
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[850px] overflow-hidden bg-white border-0 shadow-2xl">
        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Left Sidebar - Social Proof & Features */}
          <div className="w-full md:w-[38%] bg-blue-600 p-6 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="size-7 text-white" />
                <span className="text-lg font-bold tracking-tight">EduTrack AI</span>
              </div>

              <h2 className="text-xl font-semibold mb-1 leading-tight">
                Empowering <span className="text-blue-100">500+ Schools</span>
              </h2>
              <p className="text-blue-100/70 text-[11px] mb-6">Joined by 10k+ students globally.</p>

              {/* Logo Grid */}
              <div className="grid grid-cols-3 gap-2 mb-10">
                {schoolLogos.map((logo, i) => (
                  <div key={i} className="aspect-square bg-white/20 rounded-lg flex items-center justify-center p-1.5 hover:bg-white/30 transition-colors">
                    <img src={logo.img} alt={logo.name} className="max-w-full h-auto brightness-0 invert opacity-90" />
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-100/80 mb-2">Key Features</h3>
                {features.map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5">{f.icon}</div>
                    <div>
                      <h4 className="font-medium text-xs text-white leading-none mb-1">{f.title}</h4>
                      <p className="text-[10px] text-blue-100/70 leading-tight">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[9px] text-blue-100/40 flex justify-between items-center">
              <span>© 2026 EduTrack AI</span>
              <div className="flex gap-3">
                <span>Privacy</span>
                <span>Terms</span>
              </div>
            </div>
          </div>

          {/* Right Area - Form */}
          <div className="w-full md:w-[62%] p-6 md:p-10 flex flex-col justify-center bg-[#f8fbff]">
            <div className="max-w-[440px] mx-auto w-full">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Schedule Your Demo</h2>
                <p className="text-gray-500 text-[12px]">
                  Fill out the form below and our team will be in touch.
                </p>
              </div>
              <RequestDemoForm className="bg-transparent" onSuccess={handleSuccess} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
