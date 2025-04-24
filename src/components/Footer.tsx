
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 flex items-center justify-center">
          Built with <Heart className="w-4 h-4 text-red-500 mx-2" fill="currentColor" /> by BlueTech
        </p>
      </div>
    </footer>
  );
};
