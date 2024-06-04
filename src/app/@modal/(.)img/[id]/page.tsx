import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function ImageModal({
	params: { id: imageId }
}: {
	params: { id: string };
}) {
	const idAsNumber = Number(imageId);

	if (Number.isNaN(idAsNumber)) throw new Error("Invalide Image id");

	const image = await getImage(idAsNumber);

	return <div>
		<Image
			src={image.url}
			alt={image.name}
			width={600}
			height={600}
			style={{ objectFit: "contain" }}
		/>
	</div>

}

