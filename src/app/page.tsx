import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/53d8b0d7-2afb-4a30-abc6-da6157183d8c-g0bev1.jpg",
  "https://utfs.io/f/83a17462-5dc7-4e14-9141-009cbd02e15e-26m2xw.jpg",
  "https://utfs.io/f/7ae68f85-8e88-4f51-ad1b-3a813599c401-fda8gv.png",
  "https://utfs.io/f/025d0e0c-8080-4f6e-bb98-f42d411eb751-fdaapt.png"
]

const mockImgs = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImgs, ...mockImgs, ...mockImgs].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />

          </div>
        ))}
      </div>
    </main>
  );
}
