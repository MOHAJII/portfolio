"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useProfession } from '@/hooks/use-profession';
import { Briefcase, Building2, Stethoscope, GraduationCap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProfessionModal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setProfession, profession } = useProfession();

  useEffect(() => {
    // Only show modal if no profession has been selected
    const timer = setTimeout(() => {
      if (!profession) {
        setOpen(true);
      } else {
        router.push(`/${profession}`);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [profession, router]);

  const handleSelect = (selected: string) => {
    setProfession(selected);
    setOpen(false);
    router.push(`/${selected}`);
  };

  const professions = [
    { name: 'ecommerce', title: 'E-commerce', icon: <Briefcase className="h-6 w-6" />, description: 'Portfolio as a product showcase' },
    { name: 'real-estate', title: 'Real Estate', icon: <Building2 className="h-6 w-6" />, description: 'Portfolio as property listings' },
    { name: 'healthcare', title: 'Healthcare', icon: <Stethoscope className="h-6 w-6" />, description: 'Portfolio as medical services' },
    { name: 'education', title: 'Education', icon: <GraduationCap className="h-6 w-6" />, description: 'Portfolio as learning modules' },
    { name: 'default', title: 'Default', icon: <Code className="h-6 w-6" />, description: 'Standard developer portfolio' },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Choose Your Profession View</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          {professions.map((item) => (
            <motion.div 
              key={item.name}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className="cursor-pointer hover:border-primary hover:shadow-md transition-all" 
                onClick={() => handleSelect(item.name)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}