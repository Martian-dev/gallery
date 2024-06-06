import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "~/components/ui/button";

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
		<div className="flex w-96 h-full flex-shrink-0 flex-col justify-between items-center p-10">
			<div className="text-2xl font-bold">{image.name}</div>
			<div>
				<span>Uploaded by </span>
				<span className="text-xl font-bold underline">{uploaderInfo.fullName}</span>
			</div>
			<div>
				<span>Uploaded on </span>
				<span className="text-xl font-bold underline">{new Date(image.createdAt).toLocaleDateString()}</span>
			</div>
			<div>
				<form
					action={async () => {
						"use server"

						await deleteImage(props.imageId);
					}}
				>
					<Button
						variant="destructive"
						type="submit"
					>
						Delete
					</Button>
				</form>
			</div>
		</div>
	</div>

}

