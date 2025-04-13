import { actionGetAnimeRecommendation } from "@/containers/detail/detail.action";
import Image from "next/image";
import Link from "next/link";

export default async function RecommendationSection({ id }: { id: string }) {
	const { animeRecommendation } = await actionGetAnimeRecommendation(id);
	return (
		<section className="container px-4 py-8 mx-auto">
			<h2 className="text-2xl font-bold mb-6">Anime Recommendation</h2>
			<div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{animeRecommendation.slice(0, 10).map(({ entry }) => (
					<Link
						href={`/detail/${entry.mal_id}`}
						key={entry.mal_id}
						className="group relative rounded overflow-hidden shadow hover:shadow-lg transition-shadow"
					>
						<div className="relative aspect-[2/3] w-full">
							<Image
								src={entry.images.webp.image_url || "/default-banner.png"}
								alt={entry.title}
								fill
								className="object-cover transition-transform group-hover:scale-105"
								sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
							/>
						</div>
						<div className="mt-2 text-sm font-medium text-center line-clamp-2">
							{entry.title}
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
