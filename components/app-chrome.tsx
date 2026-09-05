"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/ui/header";
import SupportChat from "@/components/support-chat";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {isAdmin ? null : <Header />}
      {children}
      {isAdmin ? null : <SupportChat />}
    </>
  );
}
