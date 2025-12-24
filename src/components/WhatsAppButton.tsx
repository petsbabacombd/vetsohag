import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/8801756449329?text=Hello%20Dr.%20Sohag,%20I%20visited%20VetSohag.com%20and%20would%20like%20to%20connect.",
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline">Chat on WhatsApp</span>
    </button>
  );
}
