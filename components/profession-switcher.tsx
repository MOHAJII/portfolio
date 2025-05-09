"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useProfession } from '@/hooks/use-profession';
import { useRouter } from 'next/navigation';
import { ChevronUp, ChevronDown, Briefcase, Building2, Stethoscope, GraduationCap, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProfessionSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { profession, setProfession } = useProfession();
  const router = useRouter();

  const professions = [
    { id: 'ecommerce', name: 'E-commerce', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'real-estate', name: 'Real Estate', icon: <Building2 className="h-4 w-4" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Stethoscope className="h-4 w-4" /> },
    { id: 'education', name: 'Education', icon: <GraduationCap className="h-4 w-4" /> },
    { id: 'default', name: 'Developer', icon: <Code className="h-4 w-4" /> },
  ];

  const handleSelect = (id: string) => {
    setProfession(id);
    setIsOpen(false);
    router.push(`/${id}`);
  };

  const getCurrentIcon = () => {
    const current = professions.find(p => p.id === profession);
    return current?.icon || <Code className="h-4 w-4" />;
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <div className="relative">
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white border-none hover:opacity-90 hover:scale-[0.98] transition-all duration-200 shadow-md text-sm sm:text-base md:text-lg sm:px-6 md:px-8 sm:py-6" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center gap-2 sm:gap-3">
            <span className="sm:scale-125 md:scale-150">{getCurrentIcon()}</span>
            <span className="hidden sm:inline font-medium">Switch View</span>
          </span>
          {isOpen ? <ChevronUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /> : <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full right-0 mb-2 w-48 sm:w-56 md:w-64 bg-background rounded-lg shadow-lg border p-1"
            >
              {professions.map((item) => (
                <Button
                  key={item.id}
                  variant={profession === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start mb-1 sm:text-base md:text-lg sm:py-3"
                  onClick={() => handleSelect(item.id)}
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    <span className="sm:scale-125 md:scale-150">{item.icon}</span>
                    {item.name}
                  </span>
                </Button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}