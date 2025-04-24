
import { Keyboard, ClipboardCheck, MousePointer, Settings } from "lucide-react";

const features = [
  {
    icon: Keyboard,
    title: "Global Shortcut: Option + V",
    description:
      "Open your clipboard history instantly from anywhere on your Mac—no need to click the icon, it's just one keystroke away.",
  },
  {
    icon: ClipboardCheck,
    title: "Instant Clipboard Tracking",
    description:
      "Every time you copy text, ListMyCopies automatically saves it in your history. No manual actions required.",
  },
  {
    icon: MousePointer,
    title: "Click to Recopy",
    description:
      "Need something you copied earlier? Just click it—it's instantly placed back at the top of your history and ready to paste again.",
  },
  {
    icon: Settings,
    title: "Customizable History Limit",
    description:
      "Choose how many items to keep in your clipboard history: 5, 10, or 20? You're in control. Adjust it easily in the app.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-16">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-10 h-10 text-brand-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
