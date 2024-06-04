import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries"

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image) => (
        <div key={image.id} className="w-80 flex flex-col">
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            width={320}
            height={320}
            alt={image.name}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="w-ful h-ful text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
