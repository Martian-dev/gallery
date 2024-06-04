import Modal from "./modal";
import FullImagePage from "~/components/full-image-page";

export default async function ImageModal({
	params: { id: imageId }
}: {
	params: { id: string };
}) {
	const idAsNumber = Number(imageId);

	if (Number.isNaN(idAsNumber)) throw new Error("Invalide Image id");

	return <Modal>
		<FullImagePage imageId={idAsNumber} />
	</Modal>

}

