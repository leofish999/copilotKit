import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { CopilotKit } from "@copilotkit/react-core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CopilotKit Todos",
  description: "A simple todo app using CopilotKit in Chinese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <CopilotKit publicApiKey="ck_pub_79dc7201861080b19df41cbc89ede3cf">
            {children}
          </CopilotKit>
      </body>
    </html>
  );
}
