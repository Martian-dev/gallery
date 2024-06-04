import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="flex flex-row w-full items-center justify-between p-4 bg-gray-800 text-xl font-semibold border-b-gray-500 border-solid border-b-2">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

