import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries"

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-8 p-6 justify-center">
      {images.map((image) => (
        <div
          key={image.id}
          className="w-80 flex flex-col gap-2 bg-zinc-700/50 p-2 rounded-md hover:cursor-pointer hover:bg-zinc-600/60 transition-all ease-in"
        >
          <Link href={`/img/${image.id}`} >
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={320}
              height={320}
              alt={image.name}
            />
            <div>{image.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {

  return (
    <main>
      <SignedOut>
        <div className="p-10 w-ful h-ful text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
