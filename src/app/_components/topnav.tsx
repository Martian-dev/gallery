import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UploadButton from "./uploadbutton";

export default function TopNav() {

  return (
    <nav
      className="flex z-50 w-full h-auto max-h-20 items-center justify-between py-4 px-8 bg-gray-800 text-2xl font-semibold border-b-gray-500 border-solid border-b-2"
    >
      <div className="text-2xl">Gallery</div>
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

