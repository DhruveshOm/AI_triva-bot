"use client";
import { Home, Settings, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useState, useEffect } from 'react';

function SideNav() {
  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard'
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();
  const [chatbotOpen, setChatbotOpen] = useState(false);

  useEffect(() => {
    if (chatbotOpen) {
      const script = document.createElement('script');
      script.src = 'https://www.chatbase.co/embed.min.js';
      script.id = 'rc4eL59ygk3vmgM_zWwyi';
      script.setAttribute('domain', 'www.chatbase.co');
      script.async = true;
      
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [chatbotOpen]);

  return (
    <div className='h-screen p-5 border-r border-gray-200 bg-gradient-to-b from-white to-violet-50 w-64 relative'>
      <div className="flex justify-center items-center mb-8">
        <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
          Trivio
        </div>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-gradient-to-b from-white to-violet-50 text-xs text-gray-500">
            Navigation
          </span>
        </div>
      </div>

      <div className='space-y-1'>
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div className={`
              flex items-center gap-3 p-3 rounded-lg transition-all duration-200
              ${path === menu.path 
                ? 'bg-violet-600 text-white shadow-md' 
                : 'text-gray-600 hover:bg-violet-100 hover:text-violet-700'}
            `}>
              <menu.icon className={`h-5 w-5 ${path === menu.path ? 'text-white' : 'text-violet-500'}`} />
              <span className="font-medium">{menu.name}</span>
              {path === menu.path && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Floating Chatbot Button */}
      <button 
        onClick={() => setChatbotOpen(!chatbotOpen)}
        className="fixed bottom-6 right-6 bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-full shadow-lg z-50 transition-all hover:scale-110"
        aria-label="Open chatbot"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chatbot Iframe */}
      {chatbotOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-[500px] bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden animate-fade-in">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/rc4eL59ygk3vmgM_zWwyi"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Chatbase Chatbot"
            className="border-0"
          />
          <button 
            onClick={() => setChatbotOpen(false)}
            className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors"
            aria-label="Close chatbot"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      <div className="absolute bottom-5 left-0 right-0 px-5">
        <div className="p-3 text-center text-xs text-gray-500 border-t border-gray-200">
          Trivio © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}

export default SideNav;