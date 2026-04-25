import { Feature108 } from "./ui/feature108";
import { Users, GraduationCap, School } from "lucide-react";
import parentDashboard from "figma:asset/1b604b00a356d21197878be7b63516cc21fd9312.png";
import teacherDashboard from "figma:asset/392c8be03e9c1eadb8db0ac0b3c07f35f37060ce.png";
import adminDashboard from "figma:asset/d690e50a41e8134fd5d60d270e25d25a67180b54.png";

export function AppPreview() {
  return (
    <Feature108
      badge="EduTrack Platform"
      heading="A Modern Experience for Everyone"
      description="Designed for every stakeholder in the education ecosystem"
      tabs={[
        {
          value: "parents",
          icon: <Users className="h-auto w-4 shrink-0" />,
          label: "Parents",
          content: {
            badge: "Parent Dashboard",
            title: "Track your child's complete journey",
            description: "See everything — attendance, homework, remarks, marks, and AI learning suggestions. Stay connected with your child's education in real-time.",
            buttonText: "Explore Parent Features",
            imageSrc: parentDashboard,
            imageAlt: "Parent dashboard showing student progress",
          },
        },
        {
          value: "teachers",
          icon: <GraduationCap className="h-auto w-4 shrink-0" />,
          label: "Teachers",
          content: {
            badge: "Teacher Tools",
            title: "Streamline classroom management",
            description: "Mark attendance, upload homework, track class progress, and review AI responses. Spend less time on admin, more time teaching.",
            buttonText: "See Teacher Dashboard",
            imageSrc: teacherDashboard,
            imageAlt: "Teacher dashboard with class management tools",
          },
        },
        {
          value: "admin",
          icon: <School className="h-auto w-4 shrink-0" />,
          label: "School Admin",
          content: {
            badge: "Admin Control Center",
            title: "Manage your entire institution",
            description: "Manage teachers, students, classes, and view school-wide analytics. Get insights that drive better educational outcomes.",
            buttonText: "View Admin Panel",
            imageSrc: adminDashboard,
            imageAlt: "School admin analytics dashboard",
          },
        },
      ]}
    />
  );
}