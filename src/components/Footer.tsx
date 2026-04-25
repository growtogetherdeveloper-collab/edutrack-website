import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, GraduationCap } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "AI Tutor", "Mobile Apps", "Integrations"],
  Company: ["About Us", "Careers", "Blog", "Press Kit", "Contact"],
  Resources: ["Documentation", "API Reference", "Support Center", "Video Tutorials", "Case Studies"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR Compliance", "Security"],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#155dfc] rounded-lg flex items-center justify-center text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-2xl text-white">EduTrack</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering Students with Intelligence. Smart school management for real student growth.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>hello@edutrack.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
          
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates on features and education insights
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2025 EduTrack — Empowering Students with Intelligence.
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Instagram, href: "#" },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}