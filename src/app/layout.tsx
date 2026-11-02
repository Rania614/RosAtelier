import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { playfair, manrope, geistMono } from "@/lib/fonts";
import { MotionProvider } from "@/components/layout/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: { default: siteConfig.seo.defaultTitle, template: siteConfig.seo.titleTemplate },
  description: siteConfig.seo.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
  },
  twitter: { card: "summary_large_image", title: siteConfig.seo.defaultTitle, description: siteConfig.seo.description },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      id="top"
      className={`${playfair.variable} ${manrope.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh overflow-x-clip">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
