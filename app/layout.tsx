import type {Metadata} from "next";
import {Outfit, Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import {Sidebar} from "@/components/sidebar/sidebar";
import {cn} from "@/lib/utils";
import {Topbar} from "@/components/topbar/topbar";
import Footer from "@/components/footer/footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
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
    <html lang="en" className={cn("antialiased", outfit.variable, plusJakarta.variable)}>
      <body className="min-h-dvh flex">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
