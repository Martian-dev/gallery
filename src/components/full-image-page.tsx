import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullImagePage(props: { imageId: number }) {

	const image = await getImage(props.imageId);

	const uploaderInfo = await clerkClient.users.getUser(image.userId);

	return <div className="flex h-full w-full items-center">
		<div className="flex-shrink">
			<img
				src={image.url}
				alt={image.name}
				className="object-contain"
			/>
		</div>
		<div className="flex w-96 flex-shrink-0 flex-col justify-start items-center">
			<div className="text-xl font-bold">{image.name}</div>
			<div>
				<span>Uploaded by </span>
				<span className="font-bold underline">{uploaderInfo.fullName}</span>
			</div>
			<div>
				<span>Uploaded on </span>
				<span className="font-bold underline">{new Date(image.createdAt).toLocaleDateString()}</span>
			</div>
		</div>
	</div>

}

