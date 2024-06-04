import FullImagePage from "~/components/full-image-page";

export default async function ImagePage({
	params: { id: imageId }
}: {
	params: { id: string };
}) {
	const idAsNumber = Number(imageId);

	if (Number.isNaN(idAsNumber)) throw new Error("Invalide Image id");

	return <FullImagePage imageId={idAsNumber} />
}

