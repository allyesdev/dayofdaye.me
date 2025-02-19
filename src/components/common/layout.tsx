import { ThemeProvider } from "@/components/common/theme-provider";
import { GNB } from "@/components/common/gnb";
import "@/app/globals.css";
import { useScrollHook } from "@/hooks/use-scroll-hook";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const {
    scrollData,
    handleScroll,
    scrollToTop,
    scrollToBottom,
    scrollStartRef,
    scrollEndRef,
  } = useScrollHook();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
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
    </ThemeProvider>
  );
};

export default Layout;
