"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useProfession } from '@/hooks/use-profession';
import { useRouter } from 'next/navigation';
import { ChevronUp, ChevronDown, Briefcase, Building2, Stethoscope, GraduationCap, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export function ProfessionSwitcher({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { profession, setProfession } = useProfession();
  const router = useRouter();

  const professions = [
    { id: 'ecommerce', name: 'E-commerce', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'real-estate', name: 'Real Estate', icon: <Building2 className="h-4 w-4" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Stethoscope className="h-4 w-4" /> },
    { id: 'education', name: 'Education', icon: <GraduationCap className="h-4 w-4" /> },
    { id: 'default', name: 'Default', icon: <Code className="h-4 w-4" /> },
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
    <div className={clsx("fixed bottom-4 right-4 z-50", className)}>
      <div className="relative">
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-full bg-background/80 backdrop-blur-sm border shadow-md" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center gap-2">
            {getCurrentIcon()}
            <span className="hidden sm:inline">Switch View</span>
          </span>
          {isOpen ? <ChevronDown className="ml-2 h-4 w-4" /> : <ChevronUp className="ml-2 h-4 w-4" />}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full right-0 mb-2 w-48 bg-background rounded-lg shadow-lg border p-1"
            >
              {professions.map((item) => (
                <Button
                  key={item.id}
                  variant={profession === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start mb-1"
                  onClick={() => handleSelect(item.id)}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
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