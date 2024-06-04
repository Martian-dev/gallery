import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullImagePage(props: { imageId: number }) {

	const image = await getImage(props.imageId);

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

