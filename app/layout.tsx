import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Sidebar} from "@/components/sidebar/sidebar";
import {cn} from "@/lib/utils";
import Footer from "@/components/footer/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ToolGlimpse",
    template: "%s - ToolGlimpse",
  },
};

export default function RootLayout({children}: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("antialiased", inter.variable)}>
      <body className="min-h-dvh flex">
        <Sidebar />
        <div className="flex min-w-0 lg:ml-68 flex-1 flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
