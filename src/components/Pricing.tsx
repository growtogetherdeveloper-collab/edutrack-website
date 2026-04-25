import { Button } from "./ui/button";
import { Check, Plus } from "lucide-react";

const includedFeatures = [
  "Parent App",
  "Teacher Dashboard",
  "Admin Console",
  "Attendance & Homework",
  "Performance Analytics",
  "AI Tutor (basic)",
];

const addOns = [
  "Transport Tracking",
  "Online Payments",
  "AI Advanced Tutor",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Simple Pricing for Schools
          </h2>
          <p className="text-xl text-gray-600">
            Transparent, affordable, and scalable
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Main Pricing Card */}
          <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border-2 border-blue-200 shadow-xl">
            <div className="mb-8">
              <div className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm mb-4">
                Most Popular
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl text-gray-900">₹99</span>
                <span className="text-gray-600">/student/month</span>
              </div>
              <p className="text-gray-600">
                Everything your school needs to get started
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="text-gray-900 mb-4">Includes:</div>
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl">
              Request School Pricing
            </Button>
          </div>
          
          {/* Add-ons Card */}
          <div className="p-8 bg-white rounded-3xl border-2 border-gray-200">
            <div className="mb-8">
              <h3 className="text-2xl text-gray-900 mb-2">Add-ons</h3>
              <p className="text-gray-600">
                Enhance your experience with premium features
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {addOns.map((addon, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Plus className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">{addon}</span>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-blue-200">
              <div className="text-gray-900 mb-2">Need a custom plan?</div>
              <p className="text-sm text-gray-600 mb-4">
                Contact our sales team for enterprise pricing and custom integrations.
              </p>
              <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          <div className="p-4 bg-gray-50 rounded-xl text-center">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-sm text-gray-600">Bank-grade Security</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl text-center">
            <div className="text-2xl mb-2">💳</div>
            <div className="text-sm text-gray-600">Flexible Payment</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl text-center">
            <div className="text-2xl mb-2">📞</div>
            <div className="text-sm text-gray-600">24/7 Support</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl text-center">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm text-gray-600">Instant Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
}
