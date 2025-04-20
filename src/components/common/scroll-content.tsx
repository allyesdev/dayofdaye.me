"use client";

import { GNB } from "@/components/common/gnb";
import { useScrollHook } from "@/hooks/use-scroll-hook";

export const ScrollContent = ({ children }: { children: React.ReactNode }) => {
  const { handleScroll, scrollStartRef, scrollEndRef } = useScrollHook();

  return (
    <div
      id="scroll-content"
      className="w-full h-full flex flex-col grow overflow-auto overflow-x-hidden"
      onScroll={handleScroll}
    >
      <GNB />
      <div ref={scrollStartRef} />
      <main className="flex w-full h-full flex-col">{children}</main>
      <div ref={scrollEndRef} />
    </div>
  );
};
