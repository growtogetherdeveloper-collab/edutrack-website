import { Calendar, BookOpen, MessageSquare, TrendingUp, Bot } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Calendar,
    title: "Real-time Attendance Tracking",
    description: "Track student IN/OUT, periods attended, and monthly attendance analytics.",
  },
  {
    icon: BookOpen,
    title: "Homework & Assignment Management",
    description: "Teachers upload homework → Students complete → Parents get updates.",
  },
  {
    icon: MessageSquare,
    title: "Behavior & Remarks",
    description: "Track discipline, performance concerns, and improvement suggestions.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Subject-wise scores, term graphs, rank range, and trends.",
  },
  {
    icon: Bot,
    title: "AI Tutor (Doubt Solver)",
    description: "Students ask syllabus-based questions → AI answers instantly using school-approved materials.",
  },
];

export function ValueProposition() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Why EduTrack?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Give parents complete transparency, reduce teacher workload, and help schools improve results — all in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex flex-col ${
                index === 0 || index === 3 ? 'lg:border-l' : ''
              } lg:border-r ${
                index < 3 ? 'lg:border-b' : ''
              } border-gray-200 py-10 relative group/feature`}
            >
              {index < 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
              )}
              {index >= 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-100 to-transparent pointer-events-none" />
              )}
              
              <div className="mb-4 relative z-10 px-10 text-gray-600 group cursor-pointer">
                <feature.icon className="h-8 w-8 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:text-blue-600" />
              </div>
              
              <div className="mb-2 relative z-10 px-10">
                <motion.div 
                  className="absolute left-0 top-0 h-full w-1 rounded-tr-full rounded-br-full overflow-hidden bg-gray-200"
                >
                  <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15 + 0.3,
                      ease: "easeOut"
                    }}
                    className="w-full bg-gradient-to-b from-blue-500 to-purple-500"
                  />
                </motion.div>
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800">
                  {feature.title}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 5 * 0.15 }}
            className="flex flex-col lg:border-r border-gray-200 py-10 relative group/feature"
          >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-100 to-transparent pointer-events-none" />
            
            <div className="mb-4 relative z-10 px-10 text-blue-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            
            <div className="mb-2 relative z-10 px-10">
              <motion.div 
                className="absolute left-0 top-0 h-full w-1 rounded-tr-full rounded-br-full overflow-hidden bg-gray-200"
              >
                <motion.div
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 5 * 0.15 + 0.3,
                    ease: "easeOut"
                  }}
                  className="w-full bg-gradient-to-b from-purple-500 to-pink-500"
                />
              </motion.div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800">
                And Much More...
              </span>
            </div>
            
            <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10 mb-4">
              Discover all the features that make EduTrack the complete school management solution.
            </p>
            
            <div className="relative z-10 px-10">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                View All Features
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
