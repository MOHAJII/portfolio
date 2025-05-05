"use client";

import { ThemeProvider } from "next-themes";
import { ProfessionProvider } from "@/hooks/use-profession";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ProfessionProvider>
        {children}
      </ProfessionProvider>
    </ThemeProvider>
  );
}