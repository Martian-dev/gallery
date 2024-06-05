import "~/styles/globals.css";
import TopNav from "./_components/topnav";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "./api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";
import { Toaster } from "~/components/ui/toaster";

export const metadata = {
  title: "Gallery",
  description: "gallery web app built using t3 stack and uploadthing",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className={`${inter.className} dark`}>
          <div className="w-full">
            <header className="sticky inset-x-0 top-0 w-full">
              <TopNav />
            </header>
            <div className="w-full">
              {children}
            </div>
          </div>
          {modal}
          <Toaster />
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
