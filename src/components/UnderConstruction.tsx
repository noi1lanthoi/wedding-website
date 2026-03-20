import React from "react";

export default function UnderConstruction() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fdfaf6] text-[#4a4a4a] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#e8d5c4] blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#d4a373] blur-[120px] opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-lg w-full flex flex-col items-center">
        {/* Heart icon */}
        <div className="mb-8 relative">
          <svg
            className="w-16 h-16 text-[#d4a373] animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <div
            className="absolute inset-0 bg-[#d4a373] blur-xl opacity-20 rounded-full animate-ping"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>

        {/* Text content */}
        <h1 className="text-3xl md:text-5xl font-serif text-[#b58c56] mb-4 tracking-wider leading-tight">
          Sắp ra mắt
        </h1>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4a373] to-transparent mb-6 opacity-60"></div>

        <p className="text-xl md:text-2xl font-light text-[#5a5a5a] tracking-wide mb-8">
          Web chưa hoàn thiện
        </p>

        {/* QR Code */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-10 w-48 h-48 relative z-20 flex items-center justify-center">
          <img 
            src="/qrcode.webp" 
            alt="QR Code" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Animated dots */}
        <div className="flex justify-center gap-3">
          <div
            className="w-2.5 h-2.5 rounded-full bg-[#d4a373] opacity-60 animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2.5 h-2.5 rounded-full bg-[#d4a373] opacity-60 animate-bounce"
            style={{ animationDelay: "200ms" }}
          ></div>
          <div
            className="w-2.5 h-2.5 rounded-full bg-[#d4a373] opacity-60 animate-bounce"
            style={{ animationDelay: "400ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
