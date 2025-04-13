import { AnimeDetailContainer } from "@/containers/detail";

export default async function AnimeDetailPage({
	params,
}: { params: Promise<{ id: string }> }) {
	const id = (await params).id;
	return <AnimeDetailContainer id={id} />;
}
