
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 animate-fade-up">
      <img
        src="/lovable-uploads/8bf0fce7-2e64-4905-b43f-5738c5c62d75.png"
        alt="ListMyCopies Logo"
        className="w-24 h-24 mb-8"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-center text-brand-black mb-6 max-w-4xl">
        Simplify your copy-paste workflow on macOS
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 text-center mb-6">
        Your clipboard history, reimagined.
      </p>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
        Built for power users, ListMyCopies offers a simple, smooth way to keep track of everything you copy. Never lose an important piece of text, a useful link, or a snippet again.
      </p>
      <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
        <Download className="mr-2 h-5 w-5" />
        Download ListMyCopies for macOS
      </Button>
    </section>
  );
};
