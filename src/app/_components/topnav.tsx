"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav
      className="flex z-50 w-full h-auto max-h-20 items-center justify-between py-4 px-8 bg-gray-800 text-xl font-semibold border-b-gray-500 border-solid border-b-2"
    >
      <div className="text-2xl">Gallery</div>
      <div className="flex flex-row gap-2">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

