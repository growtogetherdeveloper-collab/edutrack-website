'use client';

import { useRef } from "react";
import { School, Users, GraduationCap, UserCircle } from "lucide-react";
import { AnimatedBeam } from "./ui/animated-beam";
import { motion } from "motion/react";

const stakeholders = [
  {
    icon: School,
    title: "Schools",
    position: "top",
  },
  {
    icon: Users,
    title: "Teachers",
    position: "right",
  },
  {
    icon: GraduationCap,
    title: "Students",
    position: "bottom",
  },
  {
    icon: UserCircle,
    title: "Parents",
    position: "left",
  },
];

export function IntegrationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const schoolRef = useRef<HTMLDivElement>(null);
  const teacherRef = useRef<HTMLDivElement>(null);
  const studentRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  
  const stakeholderRefs = [schoolRef, teacherRef, studentRef, parentRef];

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
      </div>
    </section>
  );
}
