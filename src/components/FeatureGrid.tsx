import { BarChart3, ClipboardCheck, FolderOpen, Users, Bell, Lock } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Attendance Dashboard",
    description: "Monthly insights, trends, class-wise breakdown.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: ClipboardCheck,
    title: "Smart Homework",
    description: "Auto-reminders, submission tracking, and performance link.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: FolderOpen,
    title: "Student Portfolio",
    description: "Complete academic + behavioral history.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Users,
    title: "Teacher Tools",
    description: "Remarks, subject reports, attendance logs.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Bell,
    title: "Communication",
    description: "Announcements, notices, monthly summaries.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Lock,
    title: "Secure Cloud Platform",
    description: "Encrypted, safe, and school-compliant.",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Everything a Modern School Needs
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive tools for complete school management
          </p>
        </div>
        
        <div className="relative mx-auto grid max-w-2xl lg:max-w-5xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${feature.color} rounded-xl flex items-center justify-center`}>
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-gray-900">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
