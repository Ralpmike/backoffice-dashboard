import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";
import AppBar from "@/components/app-bar";

const LeagueSpartan = League_Spartan({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PiggyCanvas Dashboard - Business Analytics & Management",
  description:
    "Comprehensive business dashboard for managing employees, payments, and analytics. Track your business performance with real-time data visualization.",
  keywords:
    "business dashboard, analytics, employee management, payments, business intelligence, data visualization",
  authors: [{ name: "PiggyCanvas Inc" }],
  creator: "PiggyCanvas Inc",
  publisher: "PiggyCanvas Inc",
  robots: "index, follow",
  openGraph: {
    title: "PiggyCanvas Dashboard - Business Analytics & Management",
    description:
      "Comprehensive business dashboard for managing employees, payments, and analytics.",
    type: "website",
    locale: "en_US",
    siteName: "PiggyCanvas Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "PiggyCanvas Dashboard - Business Analytics & Management",
    description:
      "Comprehensive business dashboard for managing employees, payments, and analytics.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${LeagueSpartan.variable} antialiased`}>
        <SidebarProvider defaultOpen={true}>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <main className="flex-1 overflow-hidden">
              <div className="flex flex-col min-h-screen  xl:px-12">
                <AppBar />
                <div className="py-12">{children}</div>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
