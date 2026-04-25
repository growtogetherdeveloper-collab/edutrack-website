import CallToAction from "./ui/call-to-action-1";
import { RequestDemoDialog } from "./RequestDemoDialog";

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <RequestDemoDialog>
        <div className="cursor-pointer">
          <CallToAction
            badge={{
              images: [
                "https://images.unsplash.com/photo-1543430720-fa600c67e423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzAzNTI1OXww&ixlib=rb-4.1.0&q=80&w=50",
                "https://images.unsplash.com/photo-1593463523012-d1a2aa2b801f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBoYXBweSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzAzNTI1OXww&ixlib=rb-4.1.0&q=80&w=50",
                "https://images.unsplash.com/photo-1657446969218-499fb1599584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzAxOTc1NXww&ixlib=rb-4.1.0&q=80&w=50",
              ],
              text: "Join 10,000+ students & 500+ schools",
            }}
            heading="Ready to Transform Your School Experience?"
            buttonText="Contact Sales"
            onButtonClick={() => {}} 
            className="text-[36px] md:text-[48px]"
          />
        </div>
      </RequestDemoDialog>
    </section>
  );
}
