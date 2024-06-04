import { getImage } from "~/server/queries";

export default async function FullImagePage(props: { imageId: number }) {

	const image = await getImage(props.imageId);

	return <div className="flex h-full w-full items-center">
		<div className="flex-shrink">
			<img
				src={image.url}
				alt={image.name}
				className="object-contain"
			/>
		</div>
		<div className="flex w-96 flex-shrink-0 flex-col justify-between">
			<div className="text-xl font-bold">{image.name}</div>
		</div>
	</div>

}

