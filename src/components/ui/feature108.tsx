import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { Badge } from "./badge";
import { Button } from "./button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "EduTrack",
  heading = "A Modern Experience for Everyone",
  description = "Designed for every stakeholder in the education ecosystem",
  tabs = [],
}: Feature108Props) => {
  return (
    <section className="py-12 md:py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h2 className="max-w-2xl text-2xl md:text-4xl text-gray-900 leading-tight">
            {heading}
          </h2>
          <p className="text-gray-600 px-4">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0]?.value} className="mt-8">
          <div className="flex justify-center w-full overflow-x-auto pb-4 sm:pb-0">
            <TabsList className="flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-10 p-1 bg-gray-100/50 rounded-2xl">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm whitespace-nowrap"
                >
                  {tab.icon} {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div className="mx-auto mt-6 md:mt-8 max-w-screen-xl rounded-2xl bg-gradient-to-br from-purple-50 via-blue-50 to-white p-5 md:p-10 lg:p-16 border border-purple-100">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-4 md:gap-5 text-center lg:text-left items-center lg:items-start">
                  <Badge variant="outline" className="w-fit bg-white">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl lg:text-5xl text-gray-900 leading-tight">
                    {tab.content.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    {tab.content.description}
                  </p>
                  <Button className="mt-2 w-full sm:w-fit gap-2 bg-[#155dfc] hover:bg-[#1248c9]" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border border-gray-200/50">
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="w-full h-auto object-cover md:object-contain"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
