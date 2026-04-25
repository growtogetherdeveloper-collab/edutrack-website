import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "EduTrack transformed how we track student progress. The AI tutor feature is absolutely brilliant for my daughter's homework!",
    image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MzE0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Priya Sharma",
    role: "Parent, Grade 5",
  },
  {
    text: "The real-time attendance tracking and homework updates keep me connected with my child's education. Highly recommended!",
    image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMwMTQyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Rajesh Kumar",
    role: "Parent, Grade 8",
  },
  {
    text: "EduTrack saves me 2+ hours daily on attendance and grading. The analytics help me understand each student better.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMDE0Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Mrs. Anjali Desai",
    role: "Mathematics Teacher",
  },
  {
    text: "The parent dashboard is so intuitive! I can see my son's performance, behavior remarks, and AI learning suggestions all in one place.",
    image: "https://images.unsplash.com/photo-1633379205701-48b324e96a54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBzbWlsaW5nfGVufDF8fHx8MTc2MzAzNDg5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Meera Patel",
    role: "Parent, Grade 6",
  },
  {
    text: "Managing 500+ students became seamless with EduTrack. The school-wide analytics give us actionable insights.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI5OTE1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Vikram Singh",
    role: "School Principal",
  },
  {
    text: "The smooth implementation and excellent support team made onboarding our entire school a breeze. Truly impressed!",
    image: "https://images.unsplash.com/photo-1761039808584-ece726074e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzMDM0ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Sarah Thompson",
    role: "IT Coordinator",
  },
  {
    text: "I love how the AI tutor explains concepts step-by-step. My students' doubts are solved instantly, even after school hours.",
    image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MzE0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Kavita Reddy",
    role: "Science Teacher",
  },
  {
    text: "Parent-teacher communication has improved by 70%. The platform is user-friendly and packed with useful features.",
    image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMwMTQyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Amit Malhotra",
    role: "School Administrator",
  },
  {
    text: "Our online classroom management and student tracking significantly improved. EduTrack is a game-changer!",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNjMwMTQ3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Lisa Chen",
    role: "English Teacher",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg bg-white">Testimonials</div>
          </div>

          <h2 className="text-4xl lg:text-5xl text-gray-900 mt-5 text-center">
            Trusted by Schools & Loved by Parents
          </h2>
          <p className="text-center mt-5 text-gray-600">
            See what our community has to say about EduTrack
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-4xl text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-4xl text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-4xl text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Partner Schools</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-4xl text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
