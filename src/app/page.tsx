import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries"

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-80 flex flex-col">
          <img src={image.url} />
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
