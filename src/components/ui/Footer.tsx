import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="px-5 bg-primary">
      <div className="flex flex-col md:flex-row max-w-[90rem] w-full mx-auto h-[140px] items-center justify-center md:justify-between gap-6">
        <span>Copyright © 2025 Selo H | Powered by Selo H</span>

        <div className="flex gap-2">
          <a href="https://www.instagram.com" target="_blank" className="cursor-pointer">
            <Instagram size={18} />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="cursor-pointer">
            <Facebook size={18} />
          </a>
          <a href="https://www.x.com" target="_blank" className="cursor-pointer">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
