import React from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(
    'Hola Roberto, vi el portafolio y tarifario de ARLUC Soluciones Tecnológicas y me gustaría cotizar un proyecto.'
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      title="Cotizar por WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className="fixed bottom-6 right-6 z-50 no-print group flex items-center gap-2.5"
    >
      {/* Hover Label */}
      <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-[#06140e]/95 border border-emerald-400/30 text-emerald-100 text-xs font-semibold shadow-lg backdrop-blur-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
        Cotizar por WhatsApp
      </span>

      {/* WhatsApp Icon Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_8px_30px_-4px_rgba(37,211,102,0.7)] border border-emerald-200/30 transition-colors">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7 relative z-10"
          aria-hidden="true"
        >
          <path d="M16.002 3C8.832 3 3 8.832 3 16.002c0 2.517.72 4.867 1.964 6.86L3.48 28.52l5.803-1.454A12.94 12.94 0 0 0 16.002 29C23.172 29 29 23.172 29 16.002S23.172 3 16.002 3zm0 23.62c-2.186 0-4.22-.64-5.934-1.74l-.426-.27-3.443.862.888-3.356-.29-.448a10.57 10.57 0 0 1-1.662-5.666c0-5.87 4.777-10.647 10.647-10.647 2.845 0 5.518 1.108 7.528 3.12a10.578 10.578 0 0 1 3.118 7.528c0 5.87-4.777 10.617-10.426 10.617zm5.84-7.953c-.32-.16-1.894-.934-2.187-1.04-.294-.107-.507-.16-.72.16-.214.32-.827 1.04-1.014 1.254-.187.213-.374.24-.694.08-.32-.16-1.352-.498-2.575-1.588-.952-.85-1.595-1.898-1.782-2.218-.187-.32-.02-.493.14-.652.144-.144.32-.374.48-.56.16-.187.214-.32.32-.534.107-.213.054-.4-.026-.56-.08-.16-.72-1.734-.987-2.374-.26-.624-.524-.54-.72-.55-.186-.01-.4-.01-.614-.01-.213 0-.56.08-.853.4-.294.32-1.12 1.094-1.12 2.668 0 1.574 1.147 3.095 1.307 3.308.16.213 2.257 3.447 5.468 4.834.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.894-.774 2.16-1.52.267-.748.267-1.388.187-1.52-.08-.134-.293-.214-.613-.374z" />
        </svg>
      </span>
    </motion.a>
  );
}
