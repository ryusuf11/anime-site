import ExploreContainer from "@/containers/explore";

export default async function Explore({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const { q, page = "1" } = await searchParams;
	const pageNumber = Number.parseInt(page as string, 10);

	return <ExploreContainer keyword={q?.toString() ?? ""} page={pageNumber} />;
}
