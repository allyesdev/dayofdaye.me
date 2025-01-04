import { ThemeProvider } from "@/components/theme-provider";
import { GNB } from "@/components/gnb";
import "@/app/globals.css";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="w-full h-full flex flex-col grow">
        <GNB />
        <main className="flex w-full h-full flex-col">{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
