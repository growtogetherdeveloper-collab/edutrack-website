import image_0c1056f0d45642d5f615ae2b5102c60c4f372094 from 'figma:asset/0c1056f0d45642d5f615ae2b5102c60c4f372094.png';
import image_0e49f99c57ca10941a2d5114fb3c60b21864785e from 'figma:asset/0e49f99c57ca10941a2d5114fb3c60b21864785e.png';
import image_04ed7a455e7bc9d283972794cf0fbb44a75da41c from 'figma:asset/04ed7a455e7bc9d283972794cf0fbb44a75da41c.png';
import image_1eec119fc67e621684123bd2db09e676a5e40962 from 'figma:asset/1eec119fc67e621684123bd2db09e676a5e40962.png';
import image_0acbc803506b55f6fc0e3858ee2a33436d41b858 from 'figma:asset/0acbc803506b55f6fc0e3858ee2a33436d41b858.png';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1647934786533-f3c15896410b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjM3MjU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1528082414335-adbd64f18d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc2Mzk5ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYWxlJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzc2Mzk5ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1607710577791-a31393e17748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc2Mzk5ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

const schoolTypes = [
  "Private Schools",
  "Public Schools",
  "International Schools",
  "Charter Schools",
  "Home Schools",
];

export function ForSchools() {
  return (
    <section className="py-20 px-4 bg-[#f5f3ff]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              🏫 Built for Education
            </div>
            
            <h2 className="text-4xl lg:text-5xl text-gray-900">
              Made for Private Schools & Institutions
            </h2>
            
            <p className="text-xl text-gray-600">
              EduTrack is flexible and adapts to your institution's unique needs, supporting various educational boards and school types.
            </p>
            
            <div className="space-y-4">
              {schoolTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-900">{type}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt={`User ${i + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="text-gray-900">Trusted by 500+ schools</div>
                <div className="text-sm text-gray-500">Join the EduTrack community</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={image_0c1056f0d45642d5f615ae2b5102c60c4f372094}
                alt="Modern School"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}